// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employeesArray = []


  let keepAddingEmployees = true
  while (keepAddingEmployees == true) {
    let firstName = prompt("What is the first name?")
    console.log(firstName);

    let lastName = prompt("What is the last name")
    console.log(lastName);

    let salary = prompt("What is the salary")
    console.log(salary);
    if (isNaN(salary)) {
      return salary = 0
    }
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    }
    employeesArray.push(employee);

    let addAnotherEmployees = confirm("Would you like to add another employee?")
    console.log(addAnotherEmployees);

    if (addAnotherEmployees === false) {
      keepAddingEmployees = false
    }

  }
  return employeesArray;

  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const numberOfEmployees = employeesArray.length

  let totalSalary = 0;
  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
});
  let averageSalary = totalSalary / numberOfEmployees
  console.log(`The average salary for all Employees is $${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`The random employee name is ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
