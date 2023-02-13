function initiate() {
  let saveButton = document.getElementById("save");
  saveButton.addEventListener("click", saveItem);
}

function saveItem() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let desi = document.getElementById("desi").value;
  let salary = document.getElementById("salary").value;
  let location = document.getElementById("location").value;
  let email = document.getElementById("email").value;
  let doj = document.getElementById("doj").value;
  let contnum = document.getElementById("contnum").value;

  let data = [
    { name: name },
    { age: age },
    { gender: gender },
    { desi: desi },
    { salary: salary },
    { location: location },
    { email: email },
    { doj: doj },
    { contnum: contnum },
  ];
  let test = JSON.stringify(data);
  sessionStorage.setItem(name, test);
  localStorage.setItem(name, test);
}

function retrieveItem(event) {
  event.preventDefault();
  let data = document.getElementById("retrieve_data");
  let name = document.getElementById("name").value;
  let entry = sessionStorage.getItem(name);
  data.innerHTML = "<div>" + entry + "</div>";
}

addEventListener("load", initiate);
