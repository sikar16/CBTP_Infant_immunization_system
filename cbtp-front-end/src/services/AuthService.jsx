import axios from "../utilities/axios";

const AuthService={
    
    login: async (creadentila)=>{
        try {   
            const response = await axios.post('http://localhost:8888/api/user/login',creadentila);
            // console.log(response.data)
            localStorage.setItem(
                "token",
                JSON.stringify({ token: response.data.token })
              );
            // return {succes: response.data.succes,message: response.data.message}
           return response.data; 
        } catch (error) {
            console.log(error)
            // return {succes: error.response.data.succes,message: error.response.data.message}
            return error.response.data;
        }
    },
    forgetPassword:async (creadentila)=>{
        try {
            const response = await axios.post('/user/forget/password',creadentila);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    confirmPassword:(creadentila)=>{
        try {
            const response = axios.post('/user/confirm/Password',creadentila);
            return response.data;
        } catch (error) {
            return error.response.data;
            
        }
    },

    newPassword:(creadentila)=>{
        try {
            const response = axios.post('/user/new/Password',creadentila);
            return response.data;
        } catch (error) {
            return error.response.data;
            
        }
    }



}
export default AuthService;