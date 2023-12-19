function Validation(values){
    alert("")
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const pass_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.email==="")error.email="Please enter your email";
    else error.email="";
    if(values.password===""){
        error.password="Please enter password";
    }
    else if(!pass_pattern.test(values.password)){
        error.password="Invalid Password";
    }
    else error.password="";
    return error;
}

export default Validation;