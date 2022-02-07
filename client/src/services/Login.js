const LoginServ = async (data) => {
    await fetch('http://localhost:4000/api/v1.0/auth/login',{
        method: 'POST',
        headers: { Accept: 'application/json', ContentType: 'application/json'},
        body: JSON.stringify(data)
    }).then(response => response.json())
}
export default LoginServ;
