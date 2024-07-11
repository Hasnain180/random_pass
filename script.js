

let passwordbox = document.getElementById("password");
let length = 10

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "123456789"
let symbols = "!@#$%^&*()_[]{}"

let allchars = uppercase + lowercase + numbers +symbols;

function createpassword(){
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordbox.value = password
}

function copypass(){
    passwordbox.select();
    document.execCommand("copy");
    alert("password copied")
}