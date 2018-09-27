import axios from 'axios';

export const registerUser=(user)=> {
    return axios.post('http://localhost:3000/', user);
}
export const getUsers=()=>{
    return axios.get('http://localhost:3000/');
}

export const loginUser=(user)=>{
    return axios.post('http://localhost:3000/login',user);
}

export const removeUser=(user)=>{
    debugger;
    //return alert(`http://localhost:3000/${user}`);
    axios.delete(`http://localhost:3000/${user}`);
}