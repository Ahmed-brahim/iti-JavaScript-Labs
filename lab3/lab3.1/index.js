const deepClone = function(value) {
    // If value is null or not an object, return it directly (primitive or function)
    if (value === null || typeof value !== "object") {
        return value;
    }
    // If it's an array, create a new array and deep clone each item
    if (Array.isArray(value)) {
        let copy = [];
        for (let i = 0; i < value.length; i++) {
            copy[i] = deepClone(value[i]);
        }
        return copy;
    }
    // If it's an object, create a new object and deep clone each property
    let copy = {};
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            copy[key] = deepClone(value[key]);
        }
    }
    return copy;
}

let student={
    name: "John Doe",
    age: 20,
    subjects: [
     { subject: "Math", score: 85 },
     { subject: "English", score: 90 },
        { subject: "History", score: 78 },
    ],
    getTotalGrade(){
        let total = 0;
        let totalGrades = 100 * (this.subjects.length);

        for(k in this.subjects){
            total += this.subjects[k].score;
        }
        return (total * 100) / (totalGrades);
    },
    getAverageGrade(){
        let total = 0;
        let count = this.subjects.length;
        for(k in this.subjects){
            total += this.subjects[k].score;
        }
        return total / count;
    }
}

console.log(student.getTotalGrade());
console.log(student.getAverageGrade());

let cloneObject = deepClone(student); 
cloneObject.subjects[0].score = 100; 
console.log(student.subjects[0].score); 
console.log(cloneObject.subjects[0].score); 