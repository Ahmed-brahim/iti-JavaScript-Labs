function getMonthName(date) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return months[date.getMonth()];
}
const date = new Date('2023-10-05');
console.log(getMonthName(date));

/********************************************* */
function calculateCircleArea(radius) {
    if (radius <= 0) {
        return "Radius must be greater than zero.";
    }
    return Math.PI * Math.pow(radius, 2);
}
let radius;
do {
    radius = Number(prompt("Enter a positive radius:"));
} while (isNaN(radius) || radius <= 0);
window.alert(`The area of the circle is: ${calculateCircleArea(radius)}`);