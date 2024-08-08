// import axios from "../utilities/axios";
import axios from "axios";

const NewsService={

    postnews: async (newsdata) => {
    
        console.log(newsdata);
        try {
          const response = await axios.post('http://localhost:8888/api/news/post', newsdata,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          // console.log(response);
         return response.data;
        } catch (error) {
          // console.log(error);
          return error.response;
        }
      },
    getnews:async ()=>{
        try {
            const respone=await axios.get('http://localhost:8888/api/news/');
            // console.log(respone);
            return respone.data;
            
        } catch (error) {
            // return error.respone.data;
            return [];
        }
        
    },
    updatePost:(newsdata)=>{
        try{    
            const respone=axios.put(`http://localhost:8888/api/news/${newsdata.id}`,newsdata);
            return respone.data;
        }catch(error){
            return error.respone.data;
        }
    }
}

export default  NewsService;