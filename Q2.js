var students = [
    {
        name: "Muhammad Salman",
        grades: [12, 43, 23, 65]
    },
    {
        name: "Danish Rehman",
        grades: [34, 87, 67, 99]
    },
    {
        name: "Kashan Fazal",
        grades: [75, 67, 38]
    }
];
function calculateAverageGrade(grade) {
    var totalNumbers = 0;
    for (var n = 0; n < grade.length; n++) {
        totalNumbers += grade[n];
    }
    return totalNumbers / grade.length;
}
console.log("Student Names:          Average Grade: ");
for (var n = 0; n <= students.length - 1; n++) {
    console.log("".concat(students[n].name, "   |   ").concat(calculateAverageGrade(students[n].grades), " "));
}
;
