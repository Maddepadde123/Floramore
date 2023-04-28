

/*fetch('floramore.json')
			.then(response => response.json())
			.then(data => {
				const jsonData = document.getElementById('json-data');
				jsonData.innerHTML = JSON.stringify(data);
			})
			.catch(error => console.error(error));


document.addEventListener("DOMContentLoaded", function(){
    EventHandlers.initialize();
    DocumentEdit.logMessage()

})

var EventHandlers = (function(){
    function initialize(){
        var klickaforattsoka = document.getElementById("sokSlakt")
        klickaforattsoka.addEventListener("click",onKlickaforattsoka )
    }

      function onKlickaforattsoka() {
        alert("Du klickade på sök-knappen")
      }

    return {
        initialize
    }
})()


const saveButton = document.getElementById('fyllIFavoritblomma');
saveButton.addEventListener('click', saveData);

const dataTableBody = document.querySelector('#databasTabell tbody');

function saveData() {
  const namnInput = document.getElementById('namn');
  const artInput = document.getElementById('arter');
  const fargInput = document.getElementById('farger');

} 





//Denna funktion tar in de användaren skriver i input-fält och skildrar detta i tabellen
function addRow() {
  // Hämta inputfälten
  var input1 = document.getElementById("favoritBlomma").value;
  var input2 = document.getElementById("favoritFärg").value;

  // Hämta tabellen och tbody-elementet
  var table = document.getElementById("myTable");
  var tbody = table.getElementsByTagName("tbody")[0];

  // Skapa en ny rad och celler
  var row = document.createElement("tr");
  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");

  // Lägg till inputvärdena till cellerna
  cell1.innerHTML = input1;
  cell2.innerHTML = input2;

  // Lägg till cellerna till raden
  row.appendChild(cell1);
  row.appendChild(cell2);

  // Lägg till raden till tbody-elementet
  tbody.appendChild(row);
}




// Skapa en tom array för att lagra användarens data
var userData = [];

// Hämta inputfälten
var blomInput = document.getElementById("blomInput");
var fargInput = document.getElementById("fargInput");

// Skapa en eventlyssnare som sparar användarens data i userData-variabeln
function saveData() {
  // Skapa en ny JSON-objekt med användarens data
  var user = { blomma: blomInput.value, farg: fargInput.value };

  // Lägg till JSON-objektet till userData-arrayen
  userData.push(user);

  // Konvertera userData-arrayen till en JSON-sträng
  var userDataJson = JSON.stringify(userData);

  // Spara JSON-strängen i en JSON-fil eller skicka den till en server
  // Exempel: använda "fetch" API för att skicka JSON-data till en server
  fetch("https://example.com/saveUserData", {
    method: "POST",
    body: userDataJson,
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    console.log("Användardata sparad!");
  })
  .catch(error => {
    console.error("Det uppstod ett fel: ", error);
  });
}

*/


var request = new XMLHttpRequest();
request.open("GET", "floramore.json", true);
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    // Använd data-objektet här
  }
};
request.send();





function saveData() {
  // Hämta datan från input-fältet
  var inputData = document.getElementById("input-data").value;

  // Lägg till datan till en array i local storage
  var dataArray = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];
  dataArray.push(inputData);
  localStorage.setItem("data", JSON.stringify(dataArray));

  // Töm input-fältet
  document.getElementById("input-data").value = "";
}

function loadData() {
  // Hämta datan från local storage
  var dataArray = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];

  // Skapa en HTML-tabell med datan
  var tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";
  for (var i = 0; i < dataArray.length; i++) {
    var row = tableBody.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = dataArray[i];
  }
  
}







// Hämta användarens input från input-fältet
var input = document.getElementById("blomart-input").value;

// Läs innehållet i JSON-filen och konvertera till ett JavaScript-objekt
var data = JSON.parse('{"blomsläkten":[{"namn":"Ros","arter":[{"namn":"Rosa canina","färg":"Röd"},{"namn":"Rosa rugosa","färg":"Lila"}]}]}');

// Sök efter den blomart som matchar användarens input
var blomart = null;
for (var i = 0; i < data.blomsläkten.length; i++) {
  var arter = data.blomsläkten[i].arter;
  for (var j = 0; j < arter.length; j++) {
    if (arter[j].namn === input) {
      blomart = arter[j];
      break;
    }
  }
  if (blomart) {
    break;
  }
}

// Om blomarten hittades, visa information om den
if (blomart) {
  var output = "Blomarten " + input + " tillhör " + data.blomsläkten[i].namn + " och har färgen " + blomart.färg;
  document.getElementById("output-text").innerHTML = output;
} else {
  // Annars, visa ett felmeddelande
  document.getElementById("output-text").innerHTML = "Ingen blomart med namnet " + input + " hittades.";
}


 