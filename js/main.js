//  ============================================================
// Start js code

 function vailDate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");
    result.setAttribute("class","alert alert-danger text-center p-2")

    if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "Enter Date In Form";
        return false;
    }else if(user.length<5 || user.length>15){
        result.innerHTML = "Enter 5-15 caracter in Username";
        return false;
    }else if(email.indexOf("@",3) == -1 || email.indexOf(".com") == -1 ){
        result.innerHTML = "Enter Valid E-mail";
        return false;
    }else if(pass.length<8){
        result.innerHTML = "Enter Strong Password";
        return false;
    }else if(pass != confirm){
        result.innerHTML = "Matched Password";
        return false;
    }
 }

//  End js code
// ==============================================================