/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/
let btn=document.querySelector("#confirm");
btn.addEventListener("click",myfunction);
function myfunction(event){
    event.preventDefault();

    setTimeout(function(){
        alert("your order is accepted")
    },0);
    setTimeout(function(){
        alert("your order is packed")
    },3000)

    setTimeout(function(){
        alert("your order is transist")
    },6000)

    setTimeout(function(){
        alert("your order is out for delivery")
    },9000)

    setTimeout(function(){
        alert("your order is delivered")
    },12000)
}
