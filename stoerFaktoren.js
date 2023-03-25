const reibung = () => {

}

const seitenWind = (windGeschwindigkeit, zeitInTroposphaere) => {
    let abweichungZiel = 0;
    for(let i = 0; i < Math.round(zeitInTroposphaere);i++){
        abweichungZiel += windGeschwindigkeit;
    }

    return {
        "windGeschwindigkeit": windGeschwindigkeit,
        "abweichung": abweichungZiel
    }
}

const beschleunigungsWind = () => {
    
}

module.exports = { seitenWind };
