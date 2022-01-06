const inputs = document.querySelectorAll('.input');

function focusFunc(){
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

function blurFunc(){
  let parent = this.parentNode.parentNode;
  if(this.value == ""){
    parent.classList.remove('focus');
  }
}

function validate(){
  var username=document.loginForm.username.value;
  var password = document.loginForm.password.value;
  if(username==null || username==""){
    alert("Username is a required field");
    return false;
  }else if(password.length<6){
    alert("Password must contain atleast 6 characters");
    return false;
  }else{
    alert("You had successfully logged in!!!");
    return true;
  }
    
}


inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
})
