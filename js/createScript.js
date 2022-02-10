window.onload = function(){
     var rows = Math.ceil((window.persons.length)/3);

    var container = document.getElementById("root");
    for(i=0; i<rows; i++){
        var columns = createEltWithClass("div", "columns");
        for(j=0; j<3; j++){
            let newCard = createCard(window.persons[(3*i)+j]);
        
            addToparent(columns, newCard);
            addToparent(container, columns);
        }
    }

        // Check for click events on the navbar burger icon
    document.getElementById("burger").addEventListener("click", function() {
        this.classList.toggle("is-active");
        document.getElementById("menu").classList.toggle("is-active");
    });
}

function filterByCountry(country){
    let filtered = window.persons.filter(function(person){
        return person.pays == country;
    });

    var rows = Math.ceil((filtered.length)/3);
    var container = document.getElementById("root");
    container.innerHTML = null;

    for(i=0; i<rows; i++){
        var columns = createEltWithClass("div", "columns");
        for(j=0; j<3; j++){
            let newCard = createCard(filtered[(3*i)+j]);
        
            addToparent(columns, newCard);
            addToparent(container, columns);
        }
    }
}

function filterByTown(town){
    let filtered = window.persons.filter(function(person){
        return person.ville == town;
    });

    var rows = Math.ceil((filtered.length)/3);
    var container = document.getElementById("root");
    container.innerHTML = null;

    for(i=0; i<rows; i++){
        var columns = createEltWithClass("div", "columns");
        for(j=0; j<3; j++){
            let newCard = createCard(filtered[(3*i)+j]);
        
            addToparent(columns, newCard);
            addToparent(container, columns);
        }
    }
}

function filterByPrice(tarif){
    let filtered = window.persons.filter(function(person){
        return person.tarif == tarif;
    });

    var rows = Math.ceil((filtered.length)/3);
    var container = document.getElementById("root");
    container.innerHTML = null;

    for(i=0; i<rows; i++){
        var columns = createEltWithClass("div", "columns");
        for(j=0; j<3; j++){
            let newCard = createCard(filtered[(3*i)+j]);
        
            addToparent(columns, newCard);
            addToparent(container, columns);
        }
    }
}

function filterByTag(tag){
    let filtered = window.persons.filter(function(person){
        
        return person.tags[0] == tag || person.tags[1] == tag || person.tags[2] == tag
    });

    var rows = Math.ceil((filtered.length)/3);
    var container = document.getElementById("root");
    container.innerHTML = null;

    for(i=0; i<rows; i++){
        var columns = createEltWithClass("div", "columns");
        for(j=0; j<3; j++){
            let newCard = createCard(filtered[(3*i)+j]);
        
            addToparent(columns, newCard);
            addToparent(container, columns);
        }
    }
}


//we just create an HTML Element and return it
// Exemple: createElement("p") will return P
function createElement(_name){
    return document.createElement(_name);
}

function addClass(_elt, _className){
    _elt.className = _className;
}

function createEltWithClass(_name, _class){
    var elt = createElement(_name);
    addClass(elt, _class);
    return elt;
}

function addToparent(_parent, _child){
    _parent.appendChild(_child);
}

function createCard(props = {}){
    var colunm = createEltWithClass("div", "column is-one-third is-success");
    var card = createEltWithClass("div", "card");

    //Card header
    var cardImage = createEltWithClass("div", "card-image");
    var figure = createEltWithClass("figure", "image is-4by3");

    figure.innerHTML = '<img src="'+props.profileImage+'" alt="Placeholder image">';
    addToparent(cardImage, figure);
    addToparent(card, cardImage);

    //Card content
    var cardContent = createEltWithClass("div", "card-content");
    var cardContentMedia = createEltWithClass("div", "media");
    var content = createEltWithClass("div", "content");

    var mediaContent = createEltWithClass("div", "media-content");
    var nom = createEltWithClass("p", "title is-5");
    nom.innerHTML = props.prenom+" "+props.nom;
    var tarif = createEltWithClass("p", "title is-6");
    tarif.innerHTML = "Tarif: "+props.tarif+"&#x20AC;/jour";
    var residence = createEltWithClass("p", "title is-7");
    residence.innerHTML = "Ville/Pays: "+props.ville+", "+props.pays;

    addToparent(mediaContent, nom);
    addToparent(mediaContent, tarif);
    addToparent(mediaContent, residence);
    addToparent(cardContentMedia, mediaContent);

    content.innerHTML = props.desc+"<br/>";

    addToparent(cardContent, cardContentMedia);
    addToparent(cardContent, content);
    addToparent(card, cardContent);

    //Card footer
     var footer = createEltWithClass("footer", "card-footer");
     var cardFooterItem1 = createEltWithClass("p", "card-footer-item");
     cardFooterItem1.innerHTML = "#"+props.tags[0];

     var cardFooterItem2 = createEltWithClass("p", "card-footer-item");
     cardFooterItem2.innerHTML = "#"+props.tags[1];

     var cardFooterItem3 = createEltWithClass("p", "card-footer-item");
     cardFooterItem3.innerHTML = "#"+props.tags[2];

     addToparent(footer, cardFooterItem1);
     addToparent(footer, cardFooterItem2);
     addToparent(footer, cardFooterItem3);

     addToparent(card, footer);

     addToparent(colunm, card);

     return colunm;
}