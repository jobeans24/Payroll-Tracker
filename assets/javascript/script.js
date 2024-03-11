let addEmployeesBtn = document.getElementById('#add-employee-btn');


let collectEmployeeData = function() {
    // Get the employee data from the form
    const firstName = document.querySelector('#employee-first-name').value;
    const lastName = document.querySelector('#employee-last-name').value;
    const salary = document.querySelector('#employee-salary').value;
  
    // Create a new employee object
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
  
    // Add the new employee to the employees array
    employeesArray.push(newEmployee);
  
}
  
    
let displayAverageSalary = function(employeesArray) {
    // Calculate the average salary
    let totalSalary = 0;
    for (let i = 0; i < employeesArray.length; i++) {
      totalSalary += employeesArray[i].salary;
    }
  
    const averageSalary = totalSalary / employeesArray.length;
  
    // Get the average salary element
    const averageSalaryEl = document.querySelector('#average-salary');
  
    // Display the average salary
    averageSalaryEl.textContent = averageSalary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });
  }
 



const getRandomEmployee = function(employeesArray) {
    // Get a random index from the employees array
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
    // Get the random employee
    const randomEmployee = employeesArray[randomIndex];
  
    console.log(randomEmployee);
  }
   



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
    const employees = collectEmployeeData();
  
    console.table(employees);
  
    displayAverageSalary(employees);
  
    console.log('==============================');
  
    getRandomEmployee(employees);
  
    employees.sort(function(a,b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });
  
    displayEmployees(employees);
  }
  
  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', collectEmployeeData);
