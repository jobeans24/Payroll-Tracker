// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = [];
let length = 0;
// Collect employee data
const collectEmployees = function() {
    let addEmployee = true; // Create a variable to control the loop
    while (addEmployee) { // Loop through the prompts until the user chooses to stop
      const firstName = prompt("Enter the employee's first name:"); // Prompt the user for the employee's first name
      const lastName = prompt("Enter the employee's last name:"); // Prompt the user for the employee's last name
      const salary = parseFloat(prompt("Enter the employee's salary:")); // Prompt the user for the employee's salary
      const employee = { // Create an object to store the employee data
        firstName: firstName, 
        lastName: lastName, 
        salary: salary 
      };
        employeesArray.push(employee); // Add the employee object to the array
      addEmployee = confirm("Would you like to add another employee?"); // Ask the user if they want to add another employee
    }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
 
    let totalSalary = 0; // Create a variable to store the total salary
    for (let i = 0; i < employeesArray.length; i++) { // Loop through the employees
        totalSalary += employeesArray[i].salary; // Add each employee's salary to the total
    }

    const averageSalary = totalSalary / employeesArray.length; // Calculate the average salary
    console.log("Average Salary: " + averageSalary.toLocaleString("en-US", { // Log the average salary
      style: "currency", // Format the average salary as currency
      currency: "USD" // Use the USD currency
    }));
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
 
    const randomIndex = Math.floor(Math.random() * employeesArray.length); // Generate a random index
    const randomEmployee = employeesArray[randomIndex]; // Use the random index to select a random employee
    console.log("Random Employee: " + randomEmployee.firstName + " " + randomEmployee.lastName); // Log the random employee's name
}



// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();


console.table(employees);



console.log('==============================');

displayAverageSalary(employeesArray);   

getRandomEmployee(employeesArray);

employeesArray = employeesArray.concat(employees);
console.log(employeesArray);

  displayEmployees(employeesArray);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);