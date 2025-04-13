
let imageName, color;
do {
    imageName = prompt("Enter the image name:(cat/dog/bird)").toLowerCase();
} while (imageName != "cat" && imageName != "dog" && imageName != "bird");

do {
    color = prompt("Enter the text color:(red/green/blue)").toLowerCase();
} while (color !== "red" && color !== "green" && color !== "blue");


document.writeln(`<h2 style="color: ${color.toLowerCase()};">This is ${imageName} image</h2>`);

document.writeln(`<img src="./${imageName}.jpeg" style="border: 2px solid ${color.toLowerCase()}; width: 200px; height: 200px;">`);



