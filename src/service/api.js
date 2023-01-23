import Axios from "axios";

const URL = `http://localhost:8000`

export const addUser = async (data) => {
    try{
        return await Axios.post(`${URL}/add`, data);
    }catch(e){
        console.log(`Error while calling add user Api`, e);
    }
};

export const allUsers = async () => {
    try{
        return await Axios.get(`${URL}/all`);
    }catch(e){
        console.log(`Error while calling getUsers Api`, e);
    }
};

export const getUser = async (id) => {
    try{
        return await Axios.get(`${URL}/${id}`);
    }catch(e){
        console.log(`Error while calling add getUser Api`, e);
    }
};

export const editUser = async (user, id) => {
    try{
        return await Axios.put(`${URL}/${id}`, user);
    }catch(e){
        console.log(`Error while calling editUser Api`, e);
    }
};

export const deleteUser = async (id) => {
    try{
        return await Axios.delete(`${URL}/${id}`);
    }catch(e){
        console.log(`Error while calling deleteUser Api`, e);
    }
};

export const addPostPropertyDetails = async (postProperty, propertyDetails) => {
    let dataOne = postProperty
    let dataTwo = propertyDetails
    let finalData = {
        ...dataOne,
        ...dataTwo
    };
    console.log(finalData);
};
