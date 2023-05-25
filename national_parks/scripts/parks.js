"use strict";
const locationList = document.querySelector("#location-list");
const parksTblBody = document.querySelector("#parks-tbl-body");

function loadLocationList() {
  let option = new Option("Select...", "");
  locationList.appendChild(option);

  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    locationList.appendChild(option);
  }
}
loadLocationList();

const parkTypeList = document.getElementById("parktype-list");

function loadParkTypeList() {
  let option = new Option("Select...", "");
  parkTypeList.appendChild(option);

  for (const park of parkTypesArray) {
    let option = document.createElement("option");
    option.value = park;
    option.innerText = park;
    parkTypeList.appendChild(option);
  }
}
loadParkTypeList();

function buildParkRow(tbody, park) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = park.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = park.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = park.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = park.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = park.Phone;
  
  let cell7 = row.insertCell(6);
  cell7.innerText = park.Website;
}

function loadParksTable(location) {
  clearTable();
  const filteredParks = nationalParksArray.filter(
    (parkType) => parkType.State == location
  );
  for (const park of filteredParks) {
    buildParkRow(parksTblBody, park);
  }
}
function loadParksTypeTable(parksType) {
  clearTable();
  if (parksType == "") {
    return;
  }
  const filteredParks = nationalParksArray.filter((park) =>
    park.LocationName.includes(parksType)
  );
  for (const park of filteredParks) {
    buildParkRow(parksTblBody, park);
  }
}
function clearTable() {
  parksTblBody.innerHTML = "";
}

function handleLocationChange() {
  const location = locationList.value;
  loadParksTable(location);
}

function handleParkTypeChange() {
  const parkType = parkTypeList.value;
  loadParksTypeTable(parkType);
}
function checkBtn() {
  let selectPark = document.querySelector(
    "input[name='nationalPark']:checked"
  ).value;
  if (selectPark == 1) {
    loadLocationList();
    locationList.style.display = "block";
    parkTypeList.style.display = "none";
  }
  if (selectPark == 2) {
    loadParkTypeList();
    parkTypeList.style.display = "block";
    locationList.style.display = "none";
  }
}

// function filterListByState(state) {
//   nationalParksArray.filter(function (park) {
//     return park.State == state;
//   });
// }

// function filterListByParkType(parkType) {
//   nationalParksArray.filter(function (park) {
//     return park.LocationName.includes(parkType);
//   });
// }
