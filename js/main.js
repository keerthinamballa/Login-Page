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
  var username = document.getElementsByClassName('username').value;
  var password = document.getElementsByClassName('password').value;
  if(username==usename && password == password){
    alert('You are successfully logged in');

  }
  else {
    alert("Login was unsuccessful, please check your username and password");
    return false;
  }
}


inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
})
