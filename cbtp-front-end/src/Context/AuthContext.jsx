import { useState, useEffect, useContext, createContext } from "react";
import getAuth from "../utilities/authHeader";
// create auth context
const AuthContext = createContext();
import  NewsService from '../services/NewsService'

// prepare auth provider
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRegistrar, setIsRegistrar] = useState(false);
  const [isMother, setIsMother] = useState(false);
  const [isHp, setIsHp] = useState(false);
  const [news, setNews] = useState([]);
  const [seletedChild,selectChild] = useState({});
  useEffect(() => {
   
    fetchData();
    fetchNews();
  }, []);

  const fetchNews=async ()=>{
    const res = await  NewsService.getnews();
    // console.log(res)
    setNews(res.news);
  }

  const fetchData = async () => {
    const loggedInUser =  getAuth();

    loggedInUser.then((response) => {
      // console.log(response);
      if (response.token) {
        setIsLoggedIn(true);
        if (response.role === "ADMIN") {
          setIsAdmin(true);
        } else if (response.role === "REGISTRER") {
          setIsRegistrar(true);
        } else if (response.role === "MOTHER") {
          setIsMother(true);
        }
        else if(response.role === "DOCTOR"){
          setIsHp(true);
        }
        console.log(response);
        setUserData(response);
      }
    });
  };

  const values = {
    isAdmin,
    isHp,
    isRegistrar,
    isMother,
    userData,
    setUserData,
    fetchData,
    news,setNews,
    fetchNews,seletedChild,selectChild,
    isLoggedIn
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// useAuth
export const useAuth = () => {
  return useContext(AuthContext);
};
