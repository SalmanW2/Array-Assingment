var employees = [
    {
        name: "Muhammad",
        hoursWorked: 9,
        hourlyRate: 13,
        salary: 0
    },
    {
        name: "Salman",
        hoursWorked: 21,
        hourlyRate: 14,
        salary: 0
    }
];
function calculateSalary(employee) {
    var Salary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        Salary *= 1.1;
    }
    return Salary;
}
employees.forEach(function (abc) {
    abc.salary = calculateSalary(abc);
});
employees.forEach(function (employee) {
    console.log("Name: ".concat(employee.name, ", Hours Worked: ").concat(employee.hoursWorked, ", Hourly Rate: ").concat(employee.hourlyRate, ", Salary: ").concat(employee.salary.toFixed(2)));
});
