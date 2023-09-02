function valid(){
    var password = document.getElementById("pass").value;
    var rp = document.getElementById("rp").value;
    console.log("test");
   
    if(password != rp){
        document.getElementById("pera").innerHTML = " you are giving wrong pass word!!";
        document.getElementById("rp").style.border = "2px solid red"
        event.preventDefault();

    }
}