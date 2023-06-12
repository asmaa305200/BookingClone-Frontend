// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-tooltip="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Remove decoration(underline) from all anchor tags in footer
var footerLinks = document.querySelectorAll("#footerLinks>div>ul>li>a")
    .forEach(element => {
        element.classList.add("text-decoration-none", "text-white", "fw-light")

        element.addEventListener("mouseenter", function (event) {
            event.target.classList.remove("text-decoration-none")
        })

        element.addEventListener("mouseleave", function (event) {
            event.target.classList.add("text-decoration-none")
        })
    })

// Parse query string to a dictionary
const queryString = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

document.getElementById("from").innerText = queryString.onewayPickup
document.getElementById("to").innerText = queryString.onewayDestination
document.getElementById("passengersNumber").innerText = queryString.onewayNumPassengers
