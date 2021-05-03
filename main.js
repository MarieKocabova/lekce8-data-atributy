/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny. */

/*BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/

let obrazky = document.querySelectorAll('img');
let snedenoKalorii = 0;
let snedeneObrazkyDiv = document.querySelector('#snedeno');

obrazky.forEach((ovoce) => {
    ovoce.addEventListener('click', ukazKalorie);
}) 

function ukazKalorie(udalost) {
    
    let obrazek = udalost.target;
    let kalorie = obrazek.dataset.kalorie;

    document.querySelector('#odpoved').innerHTML = "Právě jsi snědl " + kalorie + " kalorií.";

    snedenoKalorii = parseInt(snedenoKalorii) + parseInt(kalorie);

    document.querySelector('#vysledek').innerHTML = "Celkově jsi dnes snědl " + snedenoKalorii + " kalorií.";

    obrazek.removeEventListener('click', ukazKalorie);
    snedeneObrazkyDiv.appendChild(obrazek);

}

