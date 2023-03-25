const ortsFaktor = 9.81;//in ms^-2 
const streckeBisStation = 13_272; //Strecke von München bis zur Station
const mue = 3.986 * Math.pow(10, 14); // mü in m^3 s^-2
const radiusErde = 6_371_000;// in m

//Funktionen geben die benötigte Kraft, Zeit und Energie für den Wurf zurück

/*const waagerechterWurf = (startHoehe, projektilMasse) => {
//freier Fall
const genaueStarteGschwindigkeit = streckeBisStation / (Math.sqrt((2 * startHoehe) / ortsFaktor));//Mechanische, benötigte Geschwindigkeit
const kinetischeEnergie = 0.5 * genaueStarteGschwindigkeit * genaueStarteGschwindigkeit * projektilMasse;//Daraus folgende Energie

return {"Energie": kinetischeEnergie, "Geschwindigkeit": genaueStarteGschwindigkeit};
}*/

const schraegerWurf = (wurfWinkel, projektilMasse) => {//wurfwinkel in °, projektilMasse in kg
    const winkelInRadiant = wurfWinkel * Math.PI/180;

    const startGeschwindigkeit = Math.sqrt( 2 * (mue / radiusErde) * ((Math.sin(winkelInRadiant) / (1 + Math.sin(winkelInRadiant))))  );//benötigte Startgeschwindigkeit, umdas Ziel zu erreichen

    const gebrauchteEnergie = 0.5 * startGeschwindigkeit * startGeschwindigkeit * projektilMasse;

    return {"Energie": gebrauchteEnergie, "Geschwindigkeit": startGeschwindigkeit};
}

module.exports = { schraegerWurf };