
let arr = [];
document.getElementById('table').classList.add('hidden');

// ************************************************************************************** //

let nameEl = document.getElementById("name");
let professionEl = document.getElementById("profession");
let ageEl = document.getElementById("age");

let errorMsgEl = document.getElementById("error");
let successMsgEl = document.getElementById("success");
let employeeMsg = document.getElementById("two") 

let addBtnEl = document.getElementById("addUserBtn");
let tableBodyEl = document.getElementById("tableBody"); 

// **************************************************************************************** //

addBtnEl.addEventListener("click", addUserFunction);

function addUserFunction() {
  let namevar = nameEl.value.toUpperCase();

  let profession = professionEl.value.slice(0, 1)[0].toUpperCase() + professionEl.value.slice(1);
  console.log(profession);
  let age = ageEl.value;

  if (namevar && profession && age) {
    successMsgEl.classList.remove("hidden"); 
    errorMsgEl.classList.add("hidden");
    employeeMsg.classList.add("hidden");
    document.getElementById("table").classList.remove("hidden"); 
    
    let objEl = {
      Name: namevar,
      Profession: profession,
      Age: age,
    }
    
    arr.push(objEl);
    UpdatedTable();
  } 
  else {
    
    successMsgEl.classList.add("hidden");
    errorMsgEl.classList.remove("hidden"); 
    employeeMsg.classList.remove("hidden");
  }
  
  updateInputFields();
}

let removedUserr;

function deleteUser(index) {
  removedUserr = arr.splice(index, 1);
  UpdatedTable();
  
  if (arr.length === 0) {
    document.getElementById("table").classList.add("hidden");
    successMsgEl.classList.add("hidden");
    employeeMsg.classList.remove("hidden")
  }
}

function UpdatedTable() {

  tableBodyEl.innerHTML = " ";

  arr.map((element, index) => {
    tableBodyEl.innerHTML += `
    <tr>
    <td>Id: ${String(index + 1).padStart(2, '0')}.</td>
    <td>Name: ${element.Name}</td>
    <td>Profession: ${element.Profession}</td>
    <td>Age: ${element.Age}</td>
    <td><button class="deleteButton" onclick="deleteUser(${index})">Delete</button></td>
    </tr>`
  })
}

function updateInputFields() {
  nameEl.value = " ";
  professionEl.value = " ";
  ageEl.value = " ";
}

