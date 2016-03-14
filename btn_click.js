//create 5 buttons with label Button 1...5 and assign click event on each of the button , when clicked, alert the button name

for(var i=1;i<=5;i++)
{var btn = document.createElement("BUTTON");
var t = document.createTextNode("Button"+i);       // Create a text node
btn.appendChild(t);   
btn.onclick= (function(k){
    return function (){
    alert(k)
    };
}(i));
document.body.appendChild(btn);}