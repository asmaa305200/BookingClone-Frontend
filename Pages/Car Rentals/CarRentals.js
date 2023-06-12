// Remove decoration(underline) from all anchor tags in footer
var footerLinks = document.querySelectorAll("#footerLinks>div>div>ul>li>a")
    .forEach(element => {
        element.classList.add("text-decoration-none")
    })

// Fill Languages Modal with data
var countriesMap = new Map()
    .set('gb', 'English (UK)')
    .set('us', 'English (US)')
    .set('de', 'Deutsch')
    .set('nl', 'Nederlands')
    .set('fr', 'Français')
    .set('es', 'Español')
    .set('ar', 'Español (AR)')
    .set('mx', 'Español (MX)')
    .set('es-ct', 'Català')
    .set('it', 'Italiano')
    .set('pt', 'Português (PT)')
    .set('br', 'Português (BR)')
    .set('no', 'Norsk')
    .set('fi', 'Suomi')
    .set('se', 'Svenska')
    .set('dk', 'Dansk')

var languagesModal = document.getElementById("languageModal")

for (var country of countriesMap) {
    var buttonItem = document.createElement("button")
    buttonItem.classList.add("btn", "btn-light", "text-start", "col-lg-3", "my-2")
    languagesModal.appendChild(buttonItem)

    var spanItem = document.createElement("span")
    buttonItem.appendChild(spanItem)

    var iconItem = document.createElement("i")
    iconItem.classList.add("fi", "fs-3", `fi-${country[0]}`)
    spanItem.appendChild(iconItem)

    var languageText = document.createTextNode(country[1])
    spanItem.appendChild(languageText)
}

// Fetch currencies from JSON and load them
window.onload = function () {
    var xhr = new XMLHttpRequest()

    xhr.open("GET", "/Pages/Car Rentals/json/currencies.json")
    xhr.send()

    xhr.onload = () => {
        var responseArr = JSON.parse(xhr.response)
        var currenciesModal = document.getElementById("currencyModal")

        for (var currency of responseArr) {
            var buttonItem = document.createElement("button")
            buttonItem.classList.add("btn", "btn-light", "text-start", "col-lg-3", "my-2")
            currenciesModal.appendChild(buttonItem)

            var paragraphItem = document.createElement("p")
            paragraphItem.innerHTML = `${currency["name"]}<br>${currency["key"]}`
            buttonItem.appendChild(paragraphItem)
        }
    }
}

var oneWay = document.getElementById("onewayRadio")
var radioChange = document.getElementById("returnRadio")
var display = document.getElementById("displayGrop-off")
radioChange.addEventListener("change", function () {
    display.hidden = false
})

oneWay.addEventListener("change", function () {
    display.hidden = true
})

var ageInfo = document.getElementById("ageInfo")
var unCheked = document.getElementById("ageCheck")
function ageCheck() {

    ageInfo.toggleAttribute("hidden");

    unCheked.toggleAttribute("checked")
}
////////////////

var color1 = document.getElementById("colorChange")
function colorChange(ele) {
    ele.style.color = 'red';
}

var ColorChange = document.getElementById("colorChange");
function colorChange(ele) {
    ele.style.color = "#ee7a1a";
}
function colorBack(ele) {
    ele.style.color = "black";
}

var backGround = document.getElementById("backgroundColor").style.backgroundColor = "#ece2e2";






////page2
var inputval = document.getElementById("inputValue")
inputval.value = "London";

