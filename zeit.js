const ortsFaktor = 9.81;//in ms^-2 
const streckeBisStation = 13_272; //Strecke von München bis zur Station
const radiusErde = 6_371_000;// in m

const flugZeit = (wurfWinkel) => {//in Sekunden
    const winkelInRadiant = wurfWinkel * Math.PI/180;
    const gebrauchteZeit =  2 * Math.sqrt(radiusErde / ortsFaktor) * (Math.pow((1+ Math.sin(winkelInRadiant)) / 2, (3/2)) * Math.asin(Math.sqrt((2 * Math.sin(winkelInRadiant)) / (1 + Math.sin(winkelInRadiant)))) + 0.5 * Math.cos(winkelInRadiant) * Math.sqrt(Math.sin(winkelInRadiant)))

    return gebrauchteZeit;
}

module.exports = { flugZeit };
