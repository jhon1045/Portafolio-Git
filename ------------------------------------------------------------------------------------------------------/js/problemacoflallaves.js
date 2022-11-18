const conte = document.querySelector(".flex_container");

function crearllave(nombre,modelo,presio){
    img = "<img src='css/llaves.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h2>`;
    presio = `<p>Precio: <b>$${presio}</b></p>`;
    return [nombre,modelo,presio];
}

let documentfragment = document.createDocumentFragment();

for ( i = 0; i <= 20; i++){
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llaves = crearllave(`llaves ${i}`,`modelo ${modeloRandom}`,`$${precioRandom}`);
    const div = document.createElement("Div")
    div.classList.add(`item-${i}`,`flex_item`);
    div.innerHTML = llaves[0] + llaves[1] + llaves[2 + llaves[3]];
    documentfragment.appendChild(div);
}

conte.appendChild(documentfragment);