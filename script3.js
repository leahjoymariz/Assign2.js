function addStudent(){
    let userName = prompt("Enter student name");
    let fsdi101 =  Number(prompt(" Enter the fsdi 101 grade"));
    let fsdi102 = prompt("Enter the fsdi 102 grade");
    let gpa = (fsdi101+fsdi102)/2;//calculation
    document.getElementById("text").innerHTML+=`
    <h5>Welcome ${userName}</h5>
    <p>Name: ${userName}</p>
    <p>GPA: ${gpa}</p>`;
}

function productName(){
    let productName = prompt("Product Name");
    let perItem = "20";
    let amount = Number (prompt("quantity"));
    let cost = (amount*perItem);
    let tax = (cost*0.4);
    let totalCost = (tax+cost);
    document.getElementById("text").innerHTML=`
    <h5>Buy ${productName} </h5>
    <p>Product: ${productName}</p>
    <p>Quantity: ${amount}</p>
    <p>perItem: ${perItem}</p>
    <p>Before tax: ${cost}</p>
    <p>Tax total: ${tax}</p>
    <p>Total cost: ${totalCost}</p>
    `
}
