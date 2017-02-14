function signupValidation(){
  var password = document.getElementById('password').value;
  var passwordCom = document.getElementById('passwordCom').value;

  if( password != passwordCom){
    document.getElementById('password').style.borderColor = '#D37377';
    document.getElementById('passwordCom').style.borderColor = "#D37377";
  } else {
    alert("Password matched!")
  }
}
