var count = 0;
function myfns(){
count++;
console.log(count);
if (count>3){
document.getElementById("btn").disabled = true;
window.open("5.html");

}


}