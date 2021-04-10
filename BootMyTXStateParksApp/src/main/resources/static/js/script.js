window.addEventListener('load', function (evt) {
    console.log('script.js loaded');
    init();
});

function init() {
    loadParkVisits();
    // document.parkVisitsForm.lookup.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     var parkVId = document.parkVisitsForm.parkVId.value;
    //     if (!isNaN(parkVId) && parkVId > 0) {
    //       getFilm(parkVId);
    //     }
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
    let dataDiv = document.getElementById('parkVisitsTable');    
    dataDiv.textContent = '';
    // TODO: Make a beautiful table
    for (const parkVisit of parkVisits) {
        
        let pName = document.createElement('h2');
        pName.textContent = parkVisit.parkName;
        dataDiv.appendChild(pName);
        // let logHeader = document.createElement('h6');
        // logHeader.textContent = ("Park Visit Log / Details");
        // dataDiv.appendChild(logHeader);
        let bQuote = document.createElement('blockquote');
        bQuote.textContent = "Park Visit Log: "+ parkVisit.logVisit;
        dataDiv.appendChild(bQuote);
        let ul = document.createElement('ul');
        dataDiv.appendChild(ul);
        let li = document.createElement('li');
        li.textContent = parkVisit.mainActivity;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = parkVisits.date;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = parkVisits.city;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = parkVisits.county;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = parkVisits.bestSeason;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = parkVisits.length + " minutes";
        ul.appendChild(li);
    }
    // TODO: Add click event for the trs to get parkVisit by Id,
    // and display details and image etc in parksVisitDisplay    


}

