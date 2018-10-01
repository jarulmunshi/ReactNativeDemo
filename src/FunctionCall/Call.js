import axios from 'axios';

export const registerUser=(user)=> {
    console.log("In register");
    return axios.post('http://localhost:3000/', user);
};
export const getUsers=()=>{
    //debugger;
    return axios.get('http://localhost:3000/');
};

export const loginUser=(user)=>{
    return axios.post('http://localhost:3000/login',user);
};

export const removeUser=(user)=>{
    return axios.delete(`http://localhost:3000/${user.name}`);
};

export const editUser=(user)=>{
    return axios.put(`http://localhost:3000/${user.name}`,user);
};