window.addEventListener('load', function (evt) {
    console.log('script.js loaded');
    init();
});

function init() {
    loadParkVisits();
    document.parkVisitsForm.lookup.addEventListener('click', function (event) {
        event.preventDefault();
        var parkVId = document.parkVisitsForm.parkVId.value;
        if (!isNaN(parkVId) && parkVId > 0) {
            getPV(parkVId);
        }
    });
    document.newPVForm.submitBtn.addEventListener('click', createPV);
}

function getPV(parkVId) {
    console.log('getPV, parkVId=' + parkVId);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/parks/' + parkVId);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let parkVisit = JSON.parse(xhr.responseText);
                console.log(parkVisit.parkName);
                displayAParkVisit(parkVisit);
            } else {
                console.error(`Park Visit id ${parkVId} not found`);
                displayError(`Park Visit id ${parkVId} not found`)
            }
        }
    };
    xhr.send();
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

function displayAParkVisit(parkVisit) {
    let dataDiv = document.getElementById('parkVisitsDetails');
    dataDiv.textContent = '';
    let headerDisplayOne = document.createElement('h4');
    headerDisplayOne.textContent = ("Here is the Park Visit: ");
    dataDiv.appendChild(headerDisplayOne);
    let pName = document.createElement('h2');
    pName.textContent = parkVisit.parkName;
    dataDiv.appendChild(pName);
    let bQuote = document.createElement('blockquote');
    bQuote.textContent = "Park Visit Log: " + parkVisit.logVisit;
    dataDiv.appendChild(bQuote);
    let ul = document.createElement('ul');
    dataDiv.appendChild(ul);
    let li = document.createElement('li');
    li.textContent = "Main Activity: " + parkVisit.mainActivity;
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = "Date: " + parkVisit.date;
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = "City: " + parkVisit.city;
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = "County: " + parkVisit.county;
    ul.appendChild(li);
    // handle best season integer to string for display
    li = document.createElement('li');
    switch (parkVisit.bestSeason) {
        case 1:
            li.textContent = "Best Season to Visit: Spring";
            break;
        case 2:
            li.textContent = "Best Season to Visit: Summer";
            break;
        case 4:
            li.textContent = "Best Season to Visit: Fall";
            break;
        case 5:
            li.textContent = "Best Season to Visit: Winter";
            break;
        default:
            li.textContent = "Best Season to Visit: " + parkVisit.bestSeason;
            break;
    }
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = "Duration of Visit: " + parkVisit.length + " minutes";
    ul.appendChild(li);
    // image
    let pVImage = document.createElement('img');
    pVImage.src = parkVisit.imageUrl;
    dataDiv.appendChild(pVImage);
    // create a space and thematic change if search by Id was generated
    let brElement = document.createElement('br');
    dataDiv.appendChild(brElement);
    let hrElement = document.createElement('hr');
    dataDiv.appendChild(hrElement);
}

function displayParkVisits(parkVisits) {
    let dataDiv = document.getElementById('parkVisitsTable');
    dataDiv.textContent = '';
    dataDiv.className = 'allPVList';
    let headerDisplayAll = document.createElement('h4');
    headerDisplayAll.textContent = ("Here Are ALL of Your Tracked Park Visits");
    dataDiv.appendChild(headerDisplayAll);
    // TODO: Make a beautiful table
    for (const parkVisit of parkVisits) {
        // let editForm = document.createElement('form');
        // editForm.name = "viewEditDelDetails";
        // dataDiv.appendChild(editForm);
        let editBtn = document.createElement('button');
        editBtn.name = 'editBtn';
        editBtn.className ='btn btn-primary';
        editBtn.textContent = 'View/Edit Details';
        dataDiv.appendChild(editBtn);
        let delBtn = document.createElement('button');
        delBtn.name = 'delBtn';
        delBtn.className ='btn btn-primary';
        delBtn.textContent = 'Delete Park Visit';
        dataDiv.appendChild(delBtn);
        // document.viewEditDelDetails.editBtn.addEventListener('click', function (event) {
        //     event.preventDefault();
        //     displayAParkVisit(parkVisit.id);
        //     div.textContent = '';
        //   });
        //         <a id="myLink" title="Click to do something"
        //  href="#" onclick="MyFunction();return false;">link text</a>
        // let aElem = document.createElement('a');
        // aElem.innerText = parkVisit.parkName;
        // aElem.href = "#";
        // aElem.id = 'viewIdDetails';
        // aElem.value = parkVisit.id;
        // aElem.onclick = details(parkVisit.id);
        // dataDiv.appendChild(aElem);
        let pName = document.createElement('h2');
        pName.textContent = parkVisit.parkName;
        dataDiv.appendChild(pName);
        let bQuote = document.createElement('blockquote');
        bQuote.textContent = "Park Visit Log: " + parkVisit.logVisit;
        dataDiv.appendChild(bQuote);
        let ul = document.createElement('ul');
        dataDiv.appendChild(ul);
        let li = document.createElement('li');
        li.textContent = "Main Activity: " + parkVisit.mainActivity;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = "Date: " + parkVisit.date;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = "City: " + parkVisit.city;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = "County: " + parkVisit.county;
        ul.appendChild(li);
        // handle best season integer to string for display
        li = document.createElement('li');
        switch (parkVisit.bestSeason) {
            case 1:
                li.textContent = "Best Season to Visit: Spring";
                break;
            case 2:
                li.textContent = "Best Season to Visit: Summer";
                break;
            case 4:
                li.textContent = "Best Season to Visit: Fall";
                break;
            case 5:
                li.textContent = "Best Season to Visit: Winter";
                break;
            default:
                li.textContent = "Best Season to Visit: " + parkVisit.bestSeason;
                break;
        }
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = "Duration of Visit: " + parkVisit.length + " minutes";
        ul.appendChild(li);
        // image
        let pVImage = document.createElement('img');
        pVImage.src = parkVisit.imageUrl;
        dataDiv.appendChild(pVImage);
        // document.dataDiv.editBtn.addEventListener('click', getPV(parkVisit.id));

    }
}


function createPV(newPV) {
    newPV.preventDefault();
    console.log('New Park Visit');
    let form = document.newPVForm;
    let parkVisit = {
        parkName: form.parkName.value,
        logVisit: form.logVisit.value,
        firstTimeVisit: form.firstTimeVisit.value,
        date: form.date.value,
        length: form.length.value,
        mainActivity: form.mainActivity.value,
        waterActivity: form.waterActivity.value,
        city: form.city.value,
        county: form.county.value,
        bestSeason: form.bestSeason.value,
        imageUrl: form.imageUrl.value
    };
    postPV(parkVisit);
}

function postPV(parkVisit) {
    console.log('Posting Park Visit');
    console.log(parkVisit);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/parks');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 201 || xhr.status === 200) {
                let newPV = JSON.parse(xhr.responseText);
                displayAParkVisit(newPV);
            } else {
                displayError('Error creating new park visit: ' + xhr.status);
            }
        }
    };
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(parkVisit));
}

function details() {
    console.log('TEST ! made it to details function');
}



function deletePV(parkVId){
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', `api/parks/${id}`);  // must pass parkVId
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 204){
                let parkVisits = JSON.parse(xhr.responseText);
                console.log(parkVisit); // testing visual
                displayParkVisits(parkVisit);
            } else if(xhr.status === 404) {
            } else {
                displayError('Error! No Such ParkVisit')
            }
        }
    }    
    xhr.send();
}


function updatePV(parkVId){
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', `api/parks/${id}`);  // must pass parkVId to update
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 204){
                let parkVisits = JSON.parse(xhr.responseText);
                console.log(parkVisit); // testing visual
                displayParkVisits(parkVisit);
            } else if(xhr.status === 404) {
            } else {
                displayError('Error! No Such ParkVisit')
            }
        }
    }    
    xhr.send();
}

// CRUD Data Aggregation. Will start with displaying number of PV posts and then elaborate from there
function cRUDNumberOfPV(parkVId){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `api/parks/${id}`);  // must pass parkVId to update
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 204){
                let parkVisits = JSON.parse(xhr.responseText);
                console.log(parkVisit); // testing visual
                displayParkVisits(parkVisit);
            } else if(xhr.status === 404) {
            } else {
                displayError('Error! No Such ParkVisit')
            }
        }
    }    
    xhr.send();
}
