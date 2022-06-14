import axios from "axios";
const APIURL="http://localhost:3001/courses/";

 function getCoursrs(){
    return axios.get(APIURL);
 }

 function getCoursrsId(id){
    return axios.get(`${APIURL}${id}`);
 }
 export {getCoursrs,getCoursrsId};