function getSelectedOption() {
    var selectElement = document.getElementById("options");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    alert("Selected option: " + selectedOption);
}


//map
var map = L.map('Map-holder').setView([35.5261582, -78.7397719], 13);   
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 

var marker = L.marker([35.5261582, -78.7397719]).addTo(map);

var circle = L.circle([35.5261582, -78.7397719], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

marker.bindPopup("<b>Hello World! </b><br>I am a popup.").openPopup();



// get cords



// Turned the previoous getLocation into an async function
async function getLocation(){
    let currentPos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
} 


document.querySelector('.findLocation').addEventListener('click',getLocation)


// foursquare?
//