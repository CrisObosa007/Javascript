function payPerson() {
    
    var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var selectedPerson = Math.floor(Math.random() * nameList.length);
    console.log(nameList[selectedPerson]);
}

payPerson();