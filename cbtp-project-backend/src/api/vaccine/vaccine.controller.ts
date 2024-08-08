import {Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import vaccineSchema from "./vaccine.schema.js";



const vaccineController = {
  register: async (req: Request, res: Response) => {
    // try {
   
      
      vaccineSchema.register.parse(req.body);

      // Check if the vaccine already exists
      // const vaccine = await prisma.vaccine.findFirst({
      //   where: {
      //     OR: [
      //       { v_name: req.body.v_name },
           
      //     ]
      //   }
      // });

      // if (vaccine) {
      //   return res.status(401).json({success:false
      //     message: "vaccine already exists"
      //   });
      // }

      const newVaccine = await prisma.vaccine.create({
         data:{
             v_name:req.body.v_name,
             description: req.body.description,
             ageRange: req.body.ageRange,
             adminId: req.body.adminId

         }
    });
      res.status(200).json({
        message: "vaccine created successfully",
        data: newVaccine,
        success:true
      });

  },

  getAll: async (req: Request, res: Response) => {
    try {
      const vaccines = await prisma.vaccine.findMany();
      res.status(200).json({ success: true,
        message: "vaccine found succesfully",vaccines});
    } catch (error) {
      throw(error);
    }
  },
  updatevaccine: async (req:Request,res:Response)=>{
      
    req.vaccineId=+req.params.id;
    console.log(req.vaccineId)
    vaccineSchema.updatevaccine.parse(req.body);
 
    const foundvaccine=await prisma.vaccine.findFirst({
      where:{
        id: +req.vaccineId
      }
    });
  
    if (!foundvaccine) {

      return res.status(404).json({ message: 'vaccine not found',success: false });
    }

    // Update the news using req.body
    const  updatedvaccine = await prisma.vaccine.update({
      data:{
        v_name:req.body.v_name,
        description: req.body.description,
        ageRange: req.body.ageRange,
        adminId: req.body.adminId

    },
      where:{
        id : foundvaccine.id
      }
    });
    res.status(200).json({
      message: "vaccine updated successfully",
      data: updatedvaccine,
      success:true
    });
   },
   getsinglevaccine: async (req:Request,res:Response)=>{
    req.vaccineId=+req.params.id;

    const foundvaccine= await prisma.vaccine.findFirst({
    where:{
      id:+req.vaccineId
    }
    
          });
    
    return res.status(200).json({ success: true,
      message: "vaccine found successfully",foundvaccine})
   },
   
deletevaccine:async (req:Request,res:Response)=>
  {
    req.vaccineId=+req.params.id
  const foundvaccine= await prisma.vaccine.findFirst
  ({ 
  where:{
    id:+req.vaccineId
  }
  
  });
  if(!foundvaccine){
    return res.status(404).json({success: false,
      message: 'vaccine not found' });
   }
  const deletedvaccine= await prisma.vaccine.delete({
    where:{
      id:foundvaccine.id
    }
  }
  
  );
  
  return res.status(200).json({ success: true,
    message: "vaccine deleted",deletedvaccine});
      },
};

export default vaccineController;
