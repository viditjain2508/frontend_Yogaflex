function Validation(values){
    alert("")
    let error={}
    // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const pass_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.name===""){
        error.name="Enter your name please";
    }
    else error.name="";

    if(values.password===""){
        error.password="Please enter password";
    }
    else if(!pass_pattern.test(values.password)){
        error.password="Invalid Password";
    }
    else error.password="";
    if(values.age ==="")error.age="Please enter your age";
    else if(parseInt(values.age, 10)<18 ||  parseInt(values.age, 10) >65)error.age="People with age less than 18 and greater than 65 can't join yoga classes because of health issues";
    else error.age="";
    return error;
}

export default Validation;