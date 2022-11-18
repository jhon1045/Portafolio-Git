let obalo = document.getElementById('portal');

for (let i =0; i < 360; i++){
  let chispa = document.createElement('div');
  chispa.className = 'chispa';
  chispa.style.rotate = i * 2+ 'deg';
  let chispaT = Math.random() * (120 - 100) + 100;
  chispa.style.transform = 'translate('+chispaT+'px)';
   
   obalo.appendChild(chispa);

  
}