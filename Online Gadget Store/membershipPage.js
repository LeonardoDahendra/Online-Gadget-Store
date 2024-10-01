const createButton = document.getElementById("createButton");

createButton.addEventListener('click', ()=>{
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('e-mail').value;
    const phone = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;
    const terms = document.getElementById('checkBox').checked;
    //to stop form from resetting if it's not filled correctly
    event.preventDefault();

    if (name === "" || gender === "" || email === "" || phone === "" || address === "" || !terms){
        if (name === "") alert("Name cannot be empty!");
        else if (gender === "") alert("Gender cannot be empty!");
        else if (email === "") alert("E-mail cannot be empty!");
        else if (phone === "") alert("Phone Number cannot be empty!");
        else if (address === "") alert("Address cannot be empty!");
        else alert("Terms and condition must be checked!");
        return;
    }

    let atAmount = 0, dotAmount = 0;
    let emailLength = email.length;
    for (let i = 0; i < emailLength; i++){
        if (email[i] === '@') atAmount++;
        else if (email[i] === '.') dotAmount++;
    }

    if (atAmount != 1 || dotAmount < 1){
        alert("Invalid email!");
        return;
    }

    let phoneLength = phone.length;
    let numAmount = 0;
    for (let i = 0; i < phoneLength; i++){
        let asciiVal = phone.charCodeAt(i);
        if ((asciiVal < 48 || asciiVal > 57) && phone[i] != '-'){
            alert("Invalid phone number!");
            return;
        }
        else if (asciiVal >= 48 && asciiVal <= 57) numAmount++;
    }
    if (numAmount < 10 || numAmount > 13) {
        alert("Invalid phone number!");
        return;
    }

    const form = document.getElementById('formContainer');
    form.reset();
    alert("Membership created!");
})