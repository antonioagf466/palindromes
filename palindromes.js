const input = document.getElementById("input");
const result = document.getElementById("isit");

function reverse(str){
    return str.split("").reverse().join("");
}
function capture(str){
    return str.replace(/[^a-zA-Z0-9]/g, "");
}

function check(){
    const value = input.value.toLowerCase();
    const cap = capture(value);
    const rev = reverse(cap);

    if(cap === rev){
        result.textContent = "Palindrome!"; 
        result.style.color = "green"; 
    }
    else{
        result.textContent = "Not a palindrome!"; 
        result.style.color = "red"; 

    result.style.visibility = "visible"; 
    input.value = ""; 
}
}