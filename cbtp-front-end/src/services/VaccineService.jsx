import axios from "axios";

const VaccineService={
    
    addvaccine: async (vaccinedata)=>{
        try {
            const response = await axios.post('http://localhost:8888/api/vaccine',vaccinedata);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
    getvaccine: async ()=>{
        try {
            const response = await axios.get('http://localhost:8888/api/vaccine');
            console.log(response)
            return response.data; 
        } catch (error) {
            // console.log(error)
            return error.response.data;
        }
    },
    update:async (vaccinedata,id)=>{
        try {
            const response = await axios.put(`http://localhost:8888/api/vaccine/${id}`,vaccinedata);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
    delete:async (vaccinedata)=>{
        try {
            const response = await axios.delete('/vaccine/delete',vaccinedata);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
    vaccineChild: async (vaccinedata)=>{
        try {
            const response = await axios.post('http://localhost:8888/api/vaccination',vaccinedata);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
   
     

}
export default VaccineService;