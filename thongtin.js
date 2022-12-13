let email = document.getElementById("email");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
// let btnLogin = document.querySelector(".btn-login");

btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
    diachi: diachi.valuae
  };
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value) {
    alert("Vui lòng điền đầy đủ thông tin");
  } else{
  
  
  
    alert("Mua Hàng Thành Công")
    window.location.href = "homepage.html";

  }
    
    // localStorage.setItem(username.value, json);
    // alert("");
  }
);