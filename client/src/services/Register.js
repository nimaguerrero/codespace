import axios from "axios";

const RegisterServ = async (data) => 
    await axios({
        method: 'POST',
        url: 'http://localhost:4000/api/v1.0/auth/register',
        data
    })


export default RegisterServ;