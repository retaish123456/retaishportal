 // const container = document.querySelector(".container"),
//       pwShowHide = document.querySelectorAll(".showHidePw"),
//       pwFields = document.querySelectorAll(".password"),
//       signUp = document.querySelector(".signup-link"),
//       login = document.querySelector(".login-link");

//     //   js code to show/hide password and change icon
//     pwShowHide.forEach(eyeIcon =>{
//         eyeIcon.addEventListener("click", ()=>{
//             pwFields.forEach(pwField =>{
//                 if(pwField.type ==="password"){
//                     pwField.type = "text";

//                     pwShowHide.forEach(icon =>{
//                         icon.classList.replace("uil-eye-slash", "uil-eye");
//                     })
//                 }else{
//                     pwField.type = "password";

//                     pwShowHide.forEach(icon =>{
//                         icon.classList.replace("uil-eye", "uil-eye-slash");
//                     })
//                 }
//             }) 
//         })
//     })

//     // js code to appear signup and login form
//     signUp.addEventListener("click", ( )=>{
//         container.classList.add("active");
//     });
//     login.addEventListener("click", ( )=>{
//         container.classList.remove("active");
//     });
function login(){
 var username=document.getElementById('username').value;
 var password= document.getElementById('password').value;
   if (username=="retaish"&& password==123){
    window.alert('you have sucessfully login ' )
    location.assign('menubar.html');}

    if (username=="retaish"&& password==1234){
        window.alert('you have sucessfully login')
location.assign('adminprofile.html')
    }


    else{
        alert("please field information ");
    }
    
     
 }




