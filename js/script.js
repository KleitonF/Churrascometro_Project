function showResults(mT, bT, wT){
    mural = document.getElementById("mural")
    mural.innerHTML = "<p class='result'> Carne: "+mT+" Kg<br>Cerveja: "+bT+" L<br>Bebidas(suco/água): "+wT+" L<br></p>"

    //Função calculator iniciará quando o user clicar no btCalc.
    let btCalc = document.getElementById("btCalc")
    btCalc.onclick = calculator
}

function calculator(){
    //Coletando inputs sobre a quantidade de participantes e a duração do churrasco.
    let adults = document.getElementById("adults");
    let childs = document.getElementById("childs");
    let duration = document.getElementById("duration");
        
    //Capturando os values dos inputs (informações colocadas pelo user).
    adults = adults.value;
    childs = childs.value;
    duration = duration.value;
        
    //Transformando os values de string para int.
    adults = parseInt(adults);
    childs = parseInt(childs);
    duration = parseInt(duration);
    
    //Criando os perfis dos participantes e suas propriedades de consumo para +6h ou -6h.
    let adult_1 = {meat: 0.4, water: 1, beer: 1.2, meat6: 0.65, water6: 1.5, beer6: 2};
    let child_1 = {meat: 0.2, water: 0.5, meat6: 0.35, water6: 0.8};

    //Se o churrasco durar -6h multiplicaremos os valores abaixo.
    if(duration < 6){
        let meatT = (adult_1.meat * adults) + (child_1.meat * childs);
        let beerT = (adult_1.beer * adults);
        let waterT = (adult_1.water * adults) + (child_1.water * childs);

        return showResults(meatT, beerT, waterT)
    }

    //Se o churrasco durar +6h multiplicaremos os valores abaixo.
    else{
        let meatT = (adult_1.meat6 * adults) + (child_1.meat6 * childs);
        let beerT = (adult_1.beer6 * adults);
        let waterT = (adult_1.water6 * adults) + (child_1.water6 * childs);

        return showResults(meatT, beerT, waterT)
    }
}

//Função calculator iniciará quando o user clicar no btCalc.
let btCalc = document.getElementById("btCalc")
btCalc.onclick = calculator