function ageInDays() {
 let birthYear = prompt('what year were you born?');
 let ageInDayss =(2022-birthYear)*365;
  let h1 = document.createElement('h1');
 let textAnswer = document.createTextNode('you are' + ageInDayss + 'days old.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('result').appendChild(h1);
 
}
function reset(){
 document.getElementById('ageInDays').remove();
}

function generateImg(){
 let image = document.createElement('img');
 let div = document.getElementById('flex-img-gen');
image.scr="http://IMG_3195.JPG";
 div.appendChild(image);
}

let today= new Date();
let hourNow=today.getHours();
let greeting;
if (hourNow > 18) {
 greeting='Good evening!';
}
  else if (hourNow > 12){greeting='goodevening!';}
  else if (hourNow > 0){
   greeting= 'Good morning!';
  }
  else {
   greeting = 'Welcome!';
  }

  document.write(Greeting);