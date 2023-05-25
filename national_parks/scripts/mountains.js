"use strict";
const mountainsDDL = document.querySelector("#mountains-ddl");
const mountainTblBody = document.querySelector("#mountain-tbl-body");

function buildMountainRow(tbody, mountain) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerHTML = `<img src="images/${mountain.img}">`;

  let cell2 = row.insertCell(1);
  cell2.innerText = mountain.name;

  let cell3 = row.insertCell(2);
  cell3.innerText = mountain.elevation;

  let cell4 = row.insertCell(3);
  cell4.innerText = mountain.effort;

  let cell5 = row.insertCell(4);
  cell5.innerText = mountain.desc;
}

function mountainsList() {
  let count = 0;

  let option = new Option("Select a Mountain...", "");
  mountainsDDL.appendChild(option);

  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.value = count;
    option.innerText = mountain.name;
    mountainsDDL.appendChild(option);
    count++;
  }
}
mountainsList();

function loadMountainTable(name) {
  clearTable();
  const Mountain = mountainsArray.find(
    (mountain, index) => name == index
  );
  //   for (const mountain of filteredMountains) {
  buildMountainRow(mountainTblBody, Mountain);
  //   }
}

function clearTable() {
  mountainTblBody.innerHTML = "";
}