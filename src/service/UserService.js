import axios from "axios";

const APIURL="http://localhost:3002/user/";

function getAlluser(){
    return axios.get(APIURL);
}
function getuserById(id){
    return axios.get(`${APIURL}${id}`);
}
function deleteuser(id){
    return axios.delete(`${APIURL}${id}`);
}
function adduser(data){
    return axios.post(APIURL,data);
}

export {getAlluser,getuserById,deleteuser,adduser};