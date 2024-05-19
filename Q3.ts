
type Employee = {
    name:string,
    hoursWorked:number,
    hourlyRate:number,
    salary:number
}

const employees:Employee[] = [
    {
        name:"Muhammad",
        hoursWorked: 9,
        hourlyRate: 13,
        salary: 0
    },
    {
        name:"Salman",
        hoursWorked: 21,
        hourlyRate: 14,
        salary: 0
    }
];
function calculateSalary(employee:Employee){
    let Salary = employee.hoursWorked*employee.hourlyRate;
    if (employee.hoursWorked >= 20){
        Salary *= 1.1;
    }
    return Salary;
}

employees.forEach(abc =>{
    abc.salary = calculateSalary(abc);
});

  employees.forEach(employee => {
    console.log(`Name: ${employee.name}, Hours Worked: ${employee.hoursWorked}, Hourly Rate: ${employee.hourlyRate}, Salary: ${employee.salary.toFixed(2)}`);
  });