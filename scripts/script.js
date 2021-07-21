const jsonData =
  '[{"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true}, {"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false}, {"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false}, {"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true}, {"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}]';

let parsedData = JSON.parse(jsonData);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// create table
const table = document.getElementById("table");

// create rows
parsedData.forEach(function (obj) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  let fullName = `${capitalizeFirstLetter(obj.lname)}, ${capitalizeFirstLetter(
    obj.fname
  )}`;
  td.innerText = fullName;
  tr.appendChild(td);
  table.appendChild(tr);
});

document.body.appendChild(table);
