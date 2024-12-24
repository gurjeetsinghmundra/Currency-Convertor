document.getElementById("calculate").addEventListener("click",()=>
{
    //alert("Button Clicked"); (for checking)

let fromCurrency = document.getElementById("fromCurrency").value;
    console.log(fromCurrency); //(for checking)
    
let toCurrency = document.getElementById("toCurrency").value;
    console.log(toCurrency);

let amount  =  document.getElementById("amount").value;
    console.log(amount);

fetch("https://api.exchangerate-api.com/v4/latest/"+fromCurrency) //response kaa object
.then(data=>data.json())  //json will return promise object 
//.then(data=>console.log(data["rates"][toCurrency])); //rates me tocurrency hai uska value 
.then(data=>{

    // const h1=document.createElement("h1");
    // h1.appendChild(document.createTextNode("Total is "+(data["rates"][toCurrency]*amount)))
    // document.body.appendChild(h1);

    let ans =data["rates"][toCurrency]*amount;
    document.getElementById("answer").textContent=amount+" "+fromCurrency+" = "+ans+" "+toCurrency;

});

})