import axios from "../utilities/axios";

const ChildService={
    
    addchild: async (childdata)=>{
         console.log(childdata)
        try {
            const response = await axios.post('http://localhost:8888/api/child/',childdata);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },
    updatechild: async (childdata)=>{
       console.log(childdata)
        try {
            const response = await axios.put(`http://localhost:8888/api/child/${props.user.userId}`,childdata);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    },

    deletechild: async (childdata)=>{
        try {
            const response = await axios.delete(`http://localhost:8888/api/child/${props.user.userId}`,childdata);
            return response.data; 
        } catch (error) {
            return error.response.data;
        }
    }
    
    


}
export default ChildService;