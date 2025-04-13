let content = prompt("Enter The Message to display");
document.writeln("<h1>Heading</h1><hr>");
for (let i = 1; i < 7; i++) 
    {
    document.writeln("<h" + i + ">"+`h${i} => `+ content + "</h" + i + ">");
}