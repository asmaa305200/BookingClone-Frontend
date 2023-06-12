// Navigate to reservation page after a random period of time
// to simulate loading page from server
window.onload = function () {
    var randomTime = Math.random() * 4000

    setTimeout(function () {
        window.location.replace("/Pages/Airport Taxis/details.html" + window.location.search)
    }, randomTime)
}