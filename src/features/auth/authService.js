import axios from "axios";

const API_URL = 'https://worried-goat-underclothes.cyclic.app/api/users/'
                

//Creamos la Peticion para crear un Usuario
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    return response.data
}


//Creamos la Peticion al backend para logear un usuario
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Logout  a un usuario
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService