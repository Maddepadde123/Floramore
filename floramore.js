

  //ClickEvent för btnLocalJson
document.getElementById("hämtaData").addEventListener("click", getLocalJson);

async function getLocalJson() {
    //Hämta JSON string från lokal fil
    let jsonString = await fetch("../floramore.json");

    //Konvertera JSON till JS
    let localDataObj = await jsonString.json();
    console.log(localDataObj);

    //Skriva ut data från JS objekt till div-tag
   var tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
   tableBody.innerHTML = "";
   for (var i = 0; i < localDataObj.length; i++) {
    console.log("Inne i loopen");
   var row = tableBody.insertRow(-1);
   var cellNamn = row.insertCell(0);
   var cellBlomma = row.insertCell(1);
   cellNamn.innerHTML = localDataObj[i].blomma;
   cellBlomma.innerHTML = localDataObj[i].blomfärg;
   } 
}
 
  