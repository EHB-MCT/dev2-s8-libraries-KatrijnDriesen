"use strict";

const app = {
    map: null, // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
    init() {
        const map = L.map('map').setView([50.84547588183104, 4.35710103064211], 11);
        // initialise de kaart
        // voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
        L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            // vergeet openstreetmap attributie niet
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        this.map = map;
        this.loadMarkers();
        // gebruik de functie "loadMarkers" om de markers toe te voegen
    },
    loadMarkers() {
        console.log("piep");
        console.log(this.map);
        L.marker([50.84197119869106, 4.322392160027645]).addTo(this.map);
        // fetch de data van opendata.brussels.be
        // als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart      
    },
    addMarker(lat, lon) {
        // voeg een marker toe op lat, lon
    }
};

app.init();
