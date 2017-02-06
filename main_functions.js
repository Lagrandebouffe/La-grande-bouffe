// Récupérer données pour la carte des menus

var contenuMenu = document.getElementById("container-menu");
var menuCarte = contenu.carte;
var btnArr = [];

function createMenu(objet) {

    for (var i = 0; i < objet.length; i++) {

        var menuElt = document.createElement("div");
        var imageElt = document.createElement("img");
        var contentElt = document.createElement("div");
        var nomElt = document.createElement("h3");
        var descriptionElt = document.createElement("p");
        var btn = document.createElement("button");
        var priceElt = document.createElement("p");

        menuElt.classList.add("menus", "row");
        imageElt.src = objet[i].image;
        imageElt.classList.add("menuImage", "image-responsive", "col-xs-12", "col-sm-offset-1", "col-sm-4");
        contentElt.classList.add("content", "col-xs-12", "col-sm-offset-1", "col-sm-5", "col-1-offset-1");
        nomElt.textContent = objet[i].name;
        descriptionElt.textContent = objet[i].description;
        btn.textContent = "Commandez";
        btn.classList.add("boutons");
        priceElt.textContent = objet[i].price;
        priceElt.classList.add("price-basket");
        btn.setAttribute("id", i);

        menuElt.appendChild(imageElt);
        contentElt.appendChild(nomElt);
        contentElt.appendChild(descriptionElt);
        contentElt.appendChild(btn);
        contentElt.appendChild(priceElt)
        menuElt.appendChild(contentElt);
        contenuMenu.appendChild(menuElt);

        btnArr.push(document.getElementById(i));
    }
    ajouterPanier();
}

function ajouterPanier() {

    btnArr.forEach(function(element) {
        var quantite = 0;
        element.addEventListener("click", function(e) {
            var i = [btnArr.indexOf(element)];
            alert(menuCarte[i].name + " a bien été ajouté(e) à l'assiette ;)");

            if (quantite === 0) {

                var ligneTableauBasketElt = document.createElement("tr");
                var mediaBasketElt = document.createElement("td");
                var thumbnailBasketElt = document.createElement("img");
                var nameBasketElt = document.createElement("h4");
                var quantiteBasketElt = document.createElement("td");
                var priceBasketElt = document.createElement("td");
                var priceTotalBasketElt = document.createElement("td");
                var removeBasketElt = document.createElement("td");
                var btnRemoveBasketElt = document.createElement("button");

                mediaBasketElt.classList.add("mediaBasket", "col-sm-8", "col-md-6");
                thumbnailBasketElt.src = menuCarte[i].image;
                thumbnailBasketElt.classList.add("media-object", "thumbnails");
                nameBasketElt.textContent = menuCarte[i].name;
                quantiteBasketElt.textContent = quantite +1;
                quantiteBasketElt.classList.add("col-sm-1", "col-md-1", "text-center", "quantite");
                priceBasketElt.textContent = menuCarte[i].price;
                priceBasketElt.classList.add("col-sm-1", "col-md-1", "text-center");
                priceTotalBasketElt.classList.add("col-sm-1", "col-md-1", "text-center");
                removeBasketElt.classList.add("col-sm-1", "col-md-1");
                btnRemoveBasketElt.textContent = "SUPPRIMER";
                btnRemoveBasketElt.classList.add("btn", "btn-danger");

                mediaBasketElt.appendChild(thumbnailBasketElt);
                mediaBasketElt.appendChild(nameBasketElt);
                ligneTableauBasketElt.appendChild(mediaBasketElt);
                ligneTableauBasketElt.appendChild(quantiteBasketElt);
                ligneTableauBasketElt.appendChild(priceBasketElt);
                ligneTableauBasketElt.appendChild(priceTotalBasketElt);
                removeBasketElt.appendChild(btnRemoveBasketElt);
                ligneTableauBasketElt.appendChild(removeBasketElt);

                document.querySelector("tbody").insertBefore(ligneTableauBasketElt, document.getElementById("total-panier"));
                quantite = quantite + 1;
            } else {
                var quantites = document.getElementsByClassName("quantite");
                quantites[i].textContent = quantite += 1;
            }
            // retirerPanier(quantite);
        });
    });
};

function retirerPanier(quantite)  {
    var btnsRemove = document.getElementsByClassName("remove");

    for (var i = 0; i < btnsRemove.length; i++) {

        btnsRemove[i].addEventListener("click", function(e) {

            if (quantite >= 1) {
                quantite = quantite - 1;
            } else {
                var target = e.target;
                target.parentElement.style.display = "none";
            }

        });
        console.log(quantite);
        console.log(btnsRemove[i]);
    };
}

//   // e.target.addEventListener("click", function() {
//   //   //augmente la quantité du même objet dans le panier
//   //   numberBasketElt.textContent++;
//   //
//   //   var priceBasket = priceBasketElt.textContent;
//   //   //enlève l'espace et le $ à la fin
//   //   var priceBasket2 = priceBasket.slice(0, priceBasket.length - 2);
//   //   //conversion en nombre
//   //   var priceBasket3 = Number(priceBasket2);
//   //   console.log(priceBasket3);
//   //
//   //   if (compteurClick === 0) {
//   //   priceBasketElt.textContent = priceBasket3;
//   //   } else {
//   //   priceBasketElt.textContent = priceBasket3 += priceBasket3;
//   //   }
//   // });
//
//   // compteurClick++;
//     });
//   }
// }


createMenu(menuCarte);
