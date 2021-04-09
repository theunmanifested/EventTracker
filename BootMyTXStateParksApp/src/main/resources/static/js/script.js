window.addEventListener('load', function(evt) {
    console.log('script.js loaded');
    init();
});

function init() {
    loadParkVisits();
}

function loadParkVisits() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/parks');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let parkVisits = JSON.parse(xhr.responseText);
                displayParkVisits(parkVisits);
            }
            else {
                displayError('Error retrieving park visits: ' + xhr.status);
                displayError();
            }
        }
    };
    xhr.send();
}

function displayError(msg) {
    let div = document.getElementById('errors');
    let h1 = document.createElement('h3');
    h1.textContent = msg;
    div.appendChild(h1);
}

function displayParkVisits(parkVisits) {
    console.log(parkVisits);
    let div = document.getElementById('parkVisitsTable');
    // TODO: Make a beautiful table
    // TODO: Add click event for the trs to get parkVisit by Id,
    // and display details and image etc in parksVisitDisplay
    for (const parkVisit of parkVisits) {
        let li = document.createElement('li');
        li.textContent = parkVisit.parkName;
        div.appendChild(li);
    }
}