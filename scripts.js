
document.getElementById("signupform").style.display = "none";

document.getElementById("login").onclick = function(){
    document.getElementById("login").setAttribute("class","nav-link active")
    document.getElementById("reg").setAttribute("class","nav-link")
    document.getElementById("loginform").style.display="block";
    document.getElementById("signupform").style.display ="none"
}
document.getElementById("reg").onclick = function(){
    document.getElementById("login").setAttribute("class","nav-link")
    document.getElementById("reg").setAttribute("class","nav-link active")
        document.getElementById("loginform").style.display="none";
        document.getElementById("signupform").style.display="block"
    }