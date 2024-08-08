import { Request, Response } from "express";
// import motherSchema from "./mother.schema.js";
import { prisma } from "../../../config/prisma.js";
import userSchema from "../user.schema";
import bcrypt from "bcrypt";
import { generatePassword } from "../../../../util/otp.js";
import { sendSmd } from "../../../../util/m.js";
import { log } from "console";
import { BASE_URL } from "../../../config/secrete.js";
import { bold } from "colors/index.js";

const motherController = {
  register: async (req: Request, res: Response) => {
    console.log(req.body)
    let dataUrl = null;

    // Check if content or attachments are provided
    if (!req.files.attachments || req.files.attachments.length === 0) {
      return res.status(403).json({
        message: "Content or attachments are required",
        success: false,
      });
    }
    // Prepare attachments
    const messageFiles = req.files?.attachments?.map((attachment: any) => ({
      url: attachment.filename,
    }));
    const url = `${BASE_URL}images/${messageFiles[0].url}`;
    dataUrl = url;

    //check if the employye exist before
    const isMotherExist = await prisma.user.findFirst({
      where: {
        OR: [{ username: req.body.username }],
      },
    });
    if (isMotherExist) {
      return res.status(404).json({ message: "user exists", success: false });
    }
    const password = generatePassword();
    req.body.password = bcrypt.hashSync(password, 10);
    console.log(req.body);
    //create the employee
    const newMother = await prisma.user.create({
      data: {
        username: req.body.username,
        password: req.body.password,
        role: "MOTHER",

        phonenumber: req.body.phonenumber,
        profiles: {
          create: {
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            lastname: req.body.lastname,
            image_url: url,
            gender: req.body.gender,
            position: req.body.position,
          },
        },
        mothers: {
          create: {
            date_of_birth: req.body.date_of_birth,
          
         }
      },
      Address:{
         create:{
            wereda:req.body.wereda,
            zone:req.body.zone,
            housenumber: +req.body.housenumber
         }
      }
},
include:{
   profiles: true,
   mothers:true
}

});

const phone  = req.body.phonenumber;
const message = `welcome  ${req.body.firstname} you are registerred as a mother your password is ${password}`;
const re = await sendSmd(phone,message);
console.log(re);

    return res.status(201).json({
      success: true,
      message: "user created successfully",
      data: newMother,
    });
  },
  update: async (req: Request, res: Response) => {
    req.mId = +req.params.id;
    userSchema.updateMother.parse(req.body);
    const isMother = await prisma.user.findFirst({
      where: {
        AND: [{ id: +req.mId }, { role: "MOTHER" }],
      },
    });
    if (!isMother) {
      return res.status(404).json({ error: "user not found" });
    }
    bloodType: req.body.bloodType;
    //update the user info
    const updatedMother = await prisma.profile.update({
      where: {
        user_id: +req.mId,
      },
      data: {
        firstname: req.body.firstname,
        middlename: req.body.middleName,
        lastname: req.body.lastName,
        image_url: req.body.imageUrl,
        gender: req.body.sex,
      },
    });
    const update = await prisma.mother.update({
      where: {
        userid: +req.userId!,
      },
      data: {
        date_of_birth: req.body.birthdate,
      },
    });
    res.status(200).json(updatedMother);
  },
  delete: async (req: Request, res: Response) => {
    req.mId = +req.params.id;
    userSchema.updateMother.parse(req.body);
    const isMother = await prisma.user.findFirst({
      where: {
        AND: [{ id: +req.mId }, { role: "MOTHER" }],
      },
    });
    if (!isMother) {
      return res.status(404).json({ error: "user not found" });
    }
    //start deleting
    const isDeleted = await prisma.user.delete({
      where: {
        id: +req.mId,
      },
    });
    res.status(200).json({
      message: "sucessfully deleted",
      sucess: true,
    });
  },
  getAll: async (req: Request, res: Response) => {
    const allMothers = await prisma.user.findMany({
      where: {
        role: "MOTHER",
      },

      include: {
        profiles: true,
        Address: true,
        
        mothers: {
          include: {
            child: {
              include: {
                vaccinations: {
                  include:{
                    vaccine:true,
                    Employee:{
                      include:{
                        user:{
                          include:{
                            profiles:true
                          }
                        }
                      }
                    }
                  }
                },
              },
            },
            schedules: true,
            _count: true,
          },
        },

        _count: true,
      },
    });
    res.status(200).json(allMothers);
  },
  getSingle: async (req: Request, res: Response) => {
    req.mId = +req.params.id;
    const isMother = await prisma.user.findFirst({
      where: {
        AND: [{ id: +req.mId }, { role: "MOTHER" }],
      },
    });
    if (!isMother) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(200).json(isMother);
  },
};

export default motherController;
