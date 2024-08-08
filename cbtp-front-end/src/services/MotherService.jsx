import axios from "../utilities/axios";

const MotherService={
    
    register: async (motherData)=>{
        // console.log(motherData)
        try {
            const response = await axios.post('http://localhost:8888/api/mother/register',motherData,
            {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
            // console.log(response)
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
    getmother: async ()=>{
        try {
            const response = await axios.get('http://localhost:8888/api/mother');
            // console.log(response.data)
       
            return response.data; 
        } catch (error) {
            return [];
        }
    },
    update:async (motherData)=>{
        console.log(motherData)
        try {
            const response = await axios.put(`http://localhost:8888/api/mother/${pros.user.uersId}`,motherData);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
    delete:async (motherData)=>{
        try {
            const response = await axios.delete(`http://localhost:8888/api/mother/${pros.user.uersId}`,motherData);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },

}
export default MotherService;