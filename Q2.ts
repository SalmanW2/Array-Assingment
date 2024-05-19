type Student = {
    name:string,
    grades:number[]
}
const students: Student[] = [
    {
        name:"Muhammad Salman",
        grades:[12,43,23,65]
    },
    {
        name:"Danish Rehman",
        grades:[34,87,67,99]
    },
    {
        name:"Kashan Fazal",
        grades:[75,67,38]
    }
];
function calculateAverageGrade(grade:number[]):number{
    let totalNumbers = 0;
    for(let n = 0; n<grade.length; n++){
        totalNumbers +=  grade[n];
    }
    return totalNumbers/grade.length;
}
console.log(`Student Names:          Average Grade: `);
for(let n = 0; n<=students.length-1; n++){
    console.log(`${students[n].name}   |   ${calculateAverageGrade(students[n].grades)} `);
};
