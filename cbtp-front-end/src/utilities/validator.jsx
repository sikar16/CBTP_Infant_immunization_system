const FormValidator = {
  //USER VALIDATION

  // firstname: "",
  //   lastname: "",
  //   middlename: "",
  //   password: "",
  //   gender: "",
  //   image_url:"",
  //   position:"",
  //   phonenumber: "",
  addUser: (form) => {
    if (form.firstname === "") {
      return { success: false, error: { firstname: "First name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.firstname)) {
      return {
        success: false,
        error: {
          firstname:
            "First name should be consist of alphabetic characters only",
        },
      };
    }

    if (form.middlename === "") {
      return {
        success: false,
        error: { middlename: "Middle name is required" },
      };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.middlename)) {
      return {
        success: false,
        error: {
          middlename:
            "Middle name should be consist of alphabetic characters only",
        },
      };
    }
    if (form.lastname === "") {
      return { success: false, error: { lastname: "Last name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.lastname)) {
      return {
        success: false,
        error: {
          lastname: "Last name should be consist of alphabetic characters only",
        },
      };
    }

    if (form.position === "") {
      return {
        success: false,
        error: { position: "User position is required" },
      };
    }
    if (form.gender === "") {
      return { success: false, error: { gender: "User gender is required" } };
    }

    if (form.phonenumber === "") {
      return {
        success: false,
        error: { phonenumber: "User phone number is required" },
      };
    } else if (
      form.phonenumber.length !== 10 ||
      !/^\d+$/.test(form.phonenumber)
    ) {
      return {
        success: false,
        error: { phonenumber: "Invalid user phone number" },
      };
    }

    if (form.password === "") {
      return { success: false, error: { password: "password is required" } };
    } else if (form.password.length < 8) {
      return {
        success: false,
        error: { password: "password must be at least 8 characters long" },
      };
      // } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.password)) {
      //   return { success: false, error: { password: "password must contain at least one special character" } };
      // } else if (!/\d/.test(form.password)) {
      //   return { success: false, error: { password: "password must contain at least one number" } };
      // } else if (!/[A-Z]/.test(form.password)) {
      //   return { success: false, error: { password: "password must contain at least one uppercase letter" } };
    }

    if (form.image_url === "") {
      return {
        success: false,
        error: { image_url: "User Profile is required" },
      };
    }

    return { success: true, error: {} };
  },

  userUpdate: (form) => {
    if (form.firstname === "") {
      return { success: false, error: { firstname: "First name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.firstname)) {
      return {
        success: false,
        error: {
          firstname:
            "First name should be consist of alphabetic characters only",
        },
      };
    }

    if (form.middlename === "") {
      return {
        success: false,
        error: { middlename: "Middle name is required" },
      };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.middlename)) {
      return {
        success: false,
        error: {
          middlename:
            "Middle name should be consist of alphabetic characters only",
        },
      };
    }
    if (form.lastname === "") {
      return { success: false, error: { lastname: "Last name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.lastname)) {
      return {
        success: false,
        error: {
          lastname: "Last name should be consist of alphabetic characters only",
        },
      };
    }

    if (form.position === "") {
      return {
        success: false,
        error: { position: "User position is required" },
      };
    }
    if (form.gender === "") {
      return { success: false, error: { gender: "User gender is required" } };
    }

    if (form.phonenumber === "") {
      return {
        success: false,
        error: { phonenumber: "User phone number is required" },
      };
    } else if (
      form.phonenumber.length !== 10 ||
      !/^\d+$/.test(form.phonenumber)
    ) {
      return {
        success: false,
        error: { phonenumber: "Invalid user phone number" },
      };
    }

    if (form.password === "") {
      return { success: false, error: { password: "password is required" } };
    } else if (form.password.length < 8) {
      return {
        success: false,
        error: { password: "password must be at least 8 characters long" },
      };
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.password)) {
      return {
        success: false,
        error: {
          password: "password must contain at least one special character",
        },
      };
    } else if (!/\d/.test(form.password)) {
      return {
        success: false,
        error: { password: "password must contain at least one number" },
      };
    } else if (!/[A-Z]/.test(form.password)) {
      return {
        success: false,
        error: {
          password: "password must contain at least one uppercase letter",
        },
      };
    }

    if (form.image_url === "") {
      return {
        success: false,
        error: { image_url: "User Profile is required" },
      };
    }

    return { success: true, error: {} };
  },

  //CHILD  VALIDATION

  childRegistration: (form) => {
    //   firstname: "",
    // middlename: "",
    // lastname: "",
    // date_of_birth: "",
    // gender: "",
    // blood_type: "",

    if (form.firstname === "") {
      return { success: false, error: { firstname: "First name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.firstname)) {
      return {
        success: false,
        error: {
          firstname: "First name should consist of alphabetic characters only",
        },
      };
    }

    if (form.middlename === "") {
      return {
        success: false,
        error: { middlename: "Middle name is required" },
      };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.middlename)) {
      return {
        success: false,
        error: {
          middlename:
            "Middle name should consist of alphabetic characters only",
        },
      };
    }

    if (form.lastname === "") {
      return { success: false, error: { lastname: "Last name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.lastname)) {
      return {
        success: false,
        error: {
          lastname: "Last name should consist of alphabetic characters only",
        },
      };
    }

    if (form.date_of_birth === "") {
      return {
        success: false,
        error: { date_of_birth: "Date of birth is required" },
      };
    } else if (
      !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
        form.date_of_birth
      )
    ) {
      return {
        success: false,
        error: { date_of_birth: "Invalid date of birth" },
      };
    } else {
      const currentDate = new Date().toISOString().split("T")[0];
      if (form.date_of_birth > currentDate) {
        return {
          success: false,
          error: { date_of_birth: "Invalid date of birth" },
        };
      }
    }

    if (form.gender === "") {
      return { success: false, error: { gender: "Gender is required" } };
    }

    if (form.blood_type === "") {
      return {
        success: false,
        error: { blood_type: "Blood type is required" },
      };
    }

    return { success: true, error: {} };
  },
  updateChild: (form) => {
    if (form.firstname === "") {
      return { success: false, error: { firstname: "First name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.firstname)) {
      return {
        success: false,
        error: {
          firstname: "First name should consist of alphabetic characters only",
        },
      };
    }

    if (form.middlename === "") {
      return {
        success: false,
        error: { middlename: "Middle name is required" },
      };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.middlename)) {
      return {
        success: false,
        error: {
          middlename:
            "Middle name should consist of alphabetic characters only",
        },
      };
    }

    if (form.lastname === "") {
      return { success: false, error: { lastname: "Last name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.lastname)) {
      return {
        success: false,
        error: {
          lastname: "Last name should consist of alphabetic characters only",
        },
      };
    }

    if (form.childBD === "") {
      return {
        success: false,
        error: { childBD: "Date of birth is required" },
      };
    } else if (
      !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(form.childBD)
    ) {
      return { success: false, error: { childBD: "Invalid date of birth" } };
    } else {
      const currentDate = new Date().toISOString().split("T")[0];
      if (form.childBD > currentDate) {
        return { success: false, error: { childBD: "Invalid date of birth" } };
      }
    }

    if (form.gender === "") {
      return { success: false, error: { gender: "Gender is required" } };
    }

    if (form.childBloodtype === "") {
      return {
        success: false,
        error: { childBloodtype: "Blood type is required" },
      };
    }

    return { success: true, error: {} };
  },

  //MOTHER VALIDATION

  addmother: (form) => {
    //   firstname: "",
    // middlename: "",
    // lastname: "",
    // date_of_birth: "",
    // phonenumber: "",
    // email: "",
    // gender: "",
    // password:"",
    // image_url: "",
    // emergencycontact: "",
    // zone: "",
    // wereda: "",
    // housenum: "",

    if (form.firstname === "") {
      return { success: false, error: { firstname: "First name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.firstname)) {
      return {
        success: false,
        error: {
          firstname: "First name should consist of alphabetic characters only",
        },
      };
    } else if (form.middlename === "") {
      return { success: false, error: { middlename: "Last name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.middlename)) {
      return {
        success: false,
        error: {
          middlename: "Last name should consist of alphabetic characters only",
        },
      };
    } else if (form.lastname === "") {
      return { success: false, error: { lastname: "Last name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.lastname)) {
      return {
        success: false,
        error: {
          lastname: "Last name should consist of alphabetic characters only",
        },
      };
    }
    if (form.date_of_birth === "") {
      return {
        success: false,
        error: { date_of_birth: "Date of birth is required" },
      };
    } else if (
      !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
        form.date_of_birth
      )
    ) {
      return {
        success: false,
        error: { date_of_birth: "Invalid date of birth" },
      };
    } else {
      const currentDate = new Date().toISOString().split("T")[0];
      if (form.date_of_birth > currentDate) {
        return {
          success: false,
          error: { date_of_birth: "Invalid date of birth" },
        };
      }
    }

    if (form.gender === "") {
      return { success: false, error: { gender: "Gender is required" } };
    }

    if (form.phonenumber === "") {
      return {
        success: false,
        error: { phonenumber: "phone number is required" },
      };
    } else if (
      form.phonenumber.length !== 10 ||
      !/^\d+$/.test(form.phonenumber)
    ) {
      return { success: false, error: { phonenumber: "Invalid phone number" } };
    }

    // if (form.password === "") {
    //   return { success: false, error: { password: "password is required" } };
    // } else if (form.password.length < 8) {
    //   return { success: false, error: { password: "password must be at least 8 characters long" } };
    // }
    // else if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.password)) {
    //   return { success: false, error: { password: "password must contain at least one special character" } };
    // } else if (!/\d/.test(form.password)) {
    //   return { success: false, error: { password: "password must contain at least one number" } };
    // } else if (!/[A-Z]/.test(form.password)) {
    //   return { success: false, error: { password: "password must contain at least one uppercase letter" } };
    // }

    // if (form.email === "") {
    //   return { success: false, error: { email: " email is required" } };
    // } else if (!form.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    //   return { success: false, error: { email: "Invalid  email" } };
    // }
    if (form.zone === "") {
      return { success: false, error: { zone: "zone name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.zone)) {
      return {
        success: false,
        error: {
          zone: "The name should consist of alphabetic characters only",
        },
      };
    }

    if (form.wereda === "") {
      return { success: false, error: { zone: "wereda name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.zone)) {
      return {
        success: false,
        error: {
          zone: "The name should consist of alphabetic characters only",
        },
      };
    }
    if (form.housenum === "") {
      return {
        success: false,
        error: { housenum: "house  number is required" },
      };
      // } else if (form.housenum.length !== 1 || !/^\d+$/.test(form.housenum)) {
      //   return { success: false, error: { housenum: "Invalid house number" } };
    }

    if (form.emergencycontact === "") {
      return {
        success: false,
        error: { emergencycontact: " phone number is required" },
      };
    } else if (
      form.emergencycontact.length !== 10 ||
      !/^\d+$/.test(form.emergencycontact)
    ) {
      return {
        success: false,
        error: { emergencycontact: "Invalid user phone number" },
      };
    }
    return { success: true, error: {} };
  },

  updatemother: (form) => {
    if (form.firstname === "") {
      return { success: false, error: { firstname: "First name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.firstname)) {
      return {
        success: false,
        error: {
          firstname: "First name should consist of alphabetic characters only",
        },
      };
    }
    if (form.lastname === "") {
      return { success: false, error: { lastname: "Last name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.lastname)) {
      return {
        success: false,
        error: {
          lastname: "Last name should consist of alphabetic characters only",
        },
      };
    }

    if (form.dateofbirth === "") {
      return {
        success: false,
        error: { dateofbirth: "Date of birth is required" },
      };
    } else if (
      !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
        form.dateofbirth
      )
    ) {
      return {
        success: false,
        error: { dateofbirth: "Invalid date of birth" },
      };
    } else {
      const currentDate = new Date().toISOString().split("T")[0];
      if (form.dateofbirth > currentDate) {
        return {
          success: false,
          error: { dateofbirth: "Invalid date of birth" },
        };
      }
    }

    if (form.gender === "") {
      return { success: false, error: { gender: "Gender is required" } };
    }

    if (form.phonenum === "") {
      return {
        success: false,
        error: { phonenum: "phone number is required" },
      };
    } else if (form.phonenum.length !== 10 || !/^\d+$/.test(form.phonenum)) {
      return { success: false, error: { phonenum: "Invalid phone number" } };
    }

    if (form.email === "") {
      return { success: false, error: { email: " email is required" } };
    } else if (
      !form.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    ) {
      return { success: false, error: { email: "Invalid  email" } };
    }
    if (form.zone === "") {
      return { success: false, error: { zone: "zone name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.zone)) {
      return {
        success: false,
        error: {
          zone: "The name should consist of alphabetic characters only",
        },
      };
    }

    if (form.wereda === "") {
      return { success: false, error: { zone: "wereda name is required" } };
    } else if (!/^[a-zA-Z]{3,10}$/.test(form.zone)) {
      return {
        success: false,
        error: {
          zone: "The name should consist of alphabetic characters only",
        },
      };
    }
    if (form.housenum === "") {
      return {
        success: false,
        error: { housenum: "house  number is required" },
      };
      // } else if (form.housenum.length !== 1 || !/^\d+$/.test(form.housenum)) {
      //   return { success: false, error: { housenum: "Invalid house number" } };
    }

    if (form.emergencycontact === "") {
      return {
        success: false,
        error: { emergencycontact: " phone number is required" },
      };
    } else if (
      form.emergencycontact.length !== 10 ||
      !/^\d+$/.test(form.emergencycontact)
    ) {
      return {
        success: false,
        error: { emergencycontact: "Invalid user phone number" },
      };
    }
  },

  vaccinatedate: (form) => {
    if (form.nextApp === "") {
        return { success: false, error: { nextApp: "Date of birth is required" } };
    } else if (
        !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(form.nextApp)
    ) {
        return { success: false, error: { nextApp: "Invalid date of birth" } };
    } else {
        const currentDate = new Date().toISOString().split("T")[0];
        const selectedDate = form.nextApp;

        if (selectedDate <= currentDate) {
            return { success: false, error: { nextApp: "valid date" } };
        }
    }
    return { success: true, error: {} };


}


};

export default FormValidator;
