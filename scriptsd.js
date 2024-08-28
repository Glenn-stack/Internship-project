// Function to handle tab switching
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the "active" class
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Get the form element
const registerWorkerForm = document.getElementById('register-worker-form');
const registerConsumptionForm = document.getElementById('register-consumption-form');

// Get the workers table element
const workersTable = document.getElementById('workersTable');

// Get the worker name dropdown element
const workerNameDropdown = document.getElementById('workerName');

// Add event listener to the form submission
registerWorkerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form inputs
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const workerId = document.getElementById('workerId').value;
  const dateOfBirth = document.getElementById('dateOfBirth').value;
  const placeOfBirth = document.getElementById('placeOfBirth').value;
  const gender = document.getElementById('gender').value;
  const department = document.getElementById('department').value;
  const status = document.getElementById('status').value;

  // Create a new row in the table
  const newRow = workersTable.insertRow(-1);

  // Add the data to the new row
  newRow.insertCell(0).textContent = workerId;
  newRow.insertCell(1).textContent = firstName;
  newRow.insertCell(2).textContent = lastName;
  newRow.insertCell(3).textContent = dateOfBirth;
  newRow.insertCell(4).textContent = placeOfBirth;
  newRow.insertCell(5).textContent = gender;
  newRow.insertCell(6).textContent = department;
  newRow.insertCell(7).textContent = status;

  // Add the worker's name to the dropdown
  const option = document.createElement('option');
  option.text = `${firstName} ${lastName}`;
  workerNameDropdown.add(option);

  // Reset the form
  registerWorkerForm.reset();

  // Show a success message
  alert('Worker\'s information successfully registered!');
});

// Get the debt table element
const debtTable = document.getElementById('debtTable');

// Add an event listener to the form submission
registerConsumptionForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const workerName = document.getElementById('workerName').value;
  const foodQuantity = parseInt(document.getElementById('foodQuantity').value);
  const drinksQuantity = parseInt(document.getElementById('drinksQuantity').value);
  const beerQuantity = parseInt(document.getElementById('beerQuantity').value);
  const consumptionDate = document.getElementById('consumptionDate').value;

  // Calculate the debt
  const foodDebt = foodQuantity * 200;
  const drinksDebt = drinksQuantity * 500;
  const beerDebt = beerQuantity * 600;
  const totalDebt = foodDebt + drinksDebt + beerDebt;

  // Create a new row for the debt table
  const newRow = debtTable.insertRow();
  const nameCell = newRow.insertCell(0);
  const typeCell = newRow.insertCell(1);
  const debtCell = newRow.insertCell(2);
  const dateCell = newRow.insertCell(3);

  // Populate the new row
  nameCell.textContent = workerName;
  typeCell.textContent = `Food: ${foodQuantity}, Drinks: ${drinksQuantity}, Beer: ${beerQuantity}`;
  debtCell.textContent = totalDebt;
  dateCell.textContent = consumptionDate;

  // Clear the form fields
  document.getElementById('workerName').value = '';
  document.getElementById('foodQuantity').value = '';
  document.getElementById('drinksQuantity').value = '';
  document.getElementById('beerQuantity').value = '';
  document.getElementById('consumptionDate').value = '';
});