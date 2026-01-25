const base_URL ="";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg");

for (let select of dropdowns){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "From" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "To" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
    });
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

const updateExchangeRate = async() =>{
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if(amtValue === "" || amtValue < 1){
        amtValue = 1;
        amount.value = "1";
    }
    let URL = `${base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalAmount = rate * amtValue;
    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", ()=>{
    updateExchangeRate();
});