var user = "";
var password = "";

$("#enviar").click(function(){

user = $("[type='text']").val();
password = $("[type='password']").val();     

console.log(user);
console.log(password);


});