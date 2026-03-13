function validateForm(){

let name = document.getElementById("fullname").value;
let email = document.getElementById("email").value;
let telephone = document.getElementById("telephone").value;

let interests = document.querySelectorAll(".interest:checked");

if (name === "" || email === "" || telephone === ""){
alert("Please fill all required fields");
return false;
}

if(interests.length === 0){
alert("Please enter your name");
return false;
}

alert("Application submitted successfully!");
return true;

}
