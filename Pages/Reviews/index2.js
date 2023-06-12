var counter = 10000;

var set_increaseing = setInterval(function () {
    counter = counter + 1900;
    if (counter > 250000) {
        clearInterval(set_increaseing)
    }
    else {
        document.getElementById("increase_number").innerHTML = counter;
    }
}, 30)

// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-tooltip="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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

// Fill currencies map with data
var currenciesMap = new Map()
    .set("€£$", "Property currency")
    .set("ARS", "Argentine peso")
    .set("AUD", "Australian dollar")
    .set("AZN", "Azerbaijan, New Manats")
    .set("BHD", "Bahrain dinar")
    .set("BRL", "Brazilian real")
    .set("BGN", "Bulgarian lev")
    .set("CAD", "Canadian dollar")
    .set("XOF", "CFA Franc BCEAO")
    .set("CLP", "Chilean peso")
    .set("CNY", "Chinese yuan")
    .set("COP", "Colombian peso")
    .set("CZK", "Czech koruna")
    .set("DKK", "Danish krone")
    .set("EGP", "Egyptian pound")
    .set("EUR", "Euro")
    .set("USD", "U.S. dollar")
    .set("AED", "U.A.E. dirham")
    .set("UAH", "Ukraine Hryvnia")

var currenciesModal = document.getElementById("currencyModal")

for (var currency of currenciesMap) {
    var buttonItem = document.createElement("button")
    buttonItem.classList.add("btn", "btn-light", "text-start", "col-lg-3", "my-2")
    currenciesModal.appendChild(buttonItem)

    var paragraphItem = document.createElement("p")
    paragraphItem.innerHTML = `${currency[1]}<br>${currency[0]}`
    buttonItem.appendChild(paragraphItem)
}
