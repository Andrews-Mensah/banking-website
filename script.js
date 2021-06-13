let money = 0;

let depositAction = () => {
    let enteredAmount = parseFloat(document.getElementById("depositMade").value)
    money += enteredAmount;
    console.log(money)
    document.getElementById("depMade").innerHTML = money;
}