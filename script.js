function sendEmail() {
    //check
    userEmail = document.getElementById('userEmail').value;
    resultLbl = document.getElementById('resultLbl');

    if (userEmail.includes('@')) resultLbl.innerHTML = "super";
    else resultLbl.innerHTML = "schlecht"; 
}