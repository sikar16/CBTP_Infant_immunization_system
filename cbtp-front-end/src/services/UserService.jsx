// import axios from "../utilities/axios";
import axios  from "axios";
const Userservice={
    
    register: async (userData)=>{
        try {
            // console.log(userData)
            const response = await axios.post('http://localhost:8888/api/employee/register',userData,
            {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
            // console.log(response.data)
       
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
        // return {success: true,message: "user created"}
    },
    getuser: async ()=>{
        try {
            // console.log("00000000000000000")
            const response = await axios.get('http://localhost:8888/api/employee/getAll');
            // console.log(response.data)
       
            return response.data; 
        } catch (error) {
            console.log(error.response.data)
            return error.response.data;
        }
        // return {success: true,message: "user created"}
    },
    update:async (userData)=>{
        console.log(userData);
        try {
            const response = await axios.put(`http://localhost:8888/api/employee/${props.user.userId}`,userData);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
    delete:async (userData)=>{
        try {
            const response = await axios.delete('http://localhost:8888/api/employee/user/delete',userData);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
    me:async (userData)=>{
        try {
            const response=await axios.get('/user/me');
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    assignrole:async (userdata)=>{
        try {
            const response = await axios.post(`/user/assegnrole/${userdata.id}`,userdata);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
     

}
export default Userservice;