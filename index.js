let secureButton = document.getElementById("registration-form");

let firstNameEl = document.getElementById("first-name");

let lastNameEl = document.getElementById("last-name");

let emailEl = document.getElementById("email");

let phoneEl = document.getElementById("phone-number");

secureButton.onsubmit = function (event) {
  event.preventDefault();

  let userDetails = {
    firstName: firstNameEl.value,
    lastName: lastNameEl.value,
    email: emailEl.value,
    phoneNumber: phoneEl.value,
  };

  let url = "";
  let options = {
    method: "POST",
    headers: {
      "Application-Type": "Application/json",
      Accpect: "Application/json",
      Authorization: "Bearer ",
    },
    body: JSON.stringify(userDetails),
  };
};

firstNameEl.onchange = function (event) {
  firstNameEl.value = event.target.value;
};

lastNameEl.onchange = function (event) {
  lastNameEl.value = event.target.value;
};

emailEl.onchange = function (event) {
  emailEl.value = event.target.value;
};

phoneEl.onchange = function (event) {
  phoneEl.value = event.target.value;
};
