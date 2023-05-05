document.addEventListener("DOMContentLoaded", () => {
  const userFrom = document.getElementById("formBlomma");

  userFrom.addEventListener("submit", async (event) => {
      event.preventDefault();

      let blomma = document.getElementById("blomma");
      let blomfärg = document.getElementById("blomfärg");

      let newUser = {
          Blomma: blomma.value,
          Blomfärg: blomfärg.value
      };

      let response = await fetch("floramore.json");
      let data = await response.json();
      data.push(newUser);
      
      await fetch('index', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
  })
});

async function getDataFromJSON() {
  let jsonPath = await fetch ("floramore.json");

  let jsonObject = await jsonPath.json();
  let output = "<table><tr><th>Favoritblomma</th><th>Favorit Färg</th>";
  
  for (var i=0; i<jsonObject.length; i++) {

      var counter = jsonObject[i];
      output += `<tr>`;
      output += `<td>${counter.Blomma}</td>`;
      output += `<td>${counter.Blomfärg}</td>`;
      output += `</tr>`;
  }
  output += "</tabel>"

  document.getElementById("output").innerHTML = output;
};