if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

var dbAsJson = window.localStorage.getItem("mydb");
//console.log(dbAsJson);
var db = JSON.parse(dbAsJson);
//console.log(db);

function Redirect(x) {
    window.location = "product" + x + ".html";
}

const enArray = [];

function addCartItem(ettId, namn, pris, bild, gendeer, farg, storlek, tema) {

    enArray.push({
        id: ettId,
        name: namn,
        price: pris,
        image: bild,
        gender: gendeer,
        color: farg,
        size: storlek,
        theme: tema,
    });


}

function ready() {
    text = "";
    for (i = 0; i < db.products.length; i++) {
        //console.log(db.products[i])
        text +=
            "<div class='text'>" + "<img class='medium-img' src=" + db.products[i].image + ">" + "</img>" + "<div class='prod-text'>" +
            "<div class='name'>" + 'Produkt: ' +
            db.products[i].name + "</div>" +
            "<div class='price'>" + 'Pris: ' +
            db.products[i].price + "</div>" +
            "<div class='gender'>" + 'Gender: ' +
            db.products[i].gender + "</div>" +
            "<div class='color'>" + 'Färg: ' +
            db.products[i].color + "</div>" +
            "<div class='size'>" + 'Storlek: ' +
            db.products[i].size + "</div>" +
            "<div class='theme'>" + 'Tema: ' +
            db.products[i].theme + "</div>" +
            "<br>" +
            '</div>' + "</div>" + "<div class='buttons'>" +
            "<button onclick='Redirect(" +
            db.products[i].id +
            ")'>Details</button>" +
            "<button onclick='addCartItem(" +
            db.products[i].id +
            "," +
            JSON.stringify(db.products[i].name) +
            "," +
            db.products[i].price +
            "," +
            JSON.stringify(db.products[i].image) +
            "," +
            JSON.stringify(db.products[i].gender) +
            "," +
            JSON.stringify(db.products[i].color) +
            "," +
            JSON.stringify(db.products[i].size) +
            "," +
            JSON.stringify(db.products[i].theme) +
            ")'>Add  to cart</button>" +
            //"<button onclick='enArray.push(" + db.products[i].theme + "," + db.products[i].theme + ")'>Add  to cart</button>"
            //"<br><br><br><br><br><br>" +
            "<button onclick='console.log(enArray)'>Console</button>" + "</div>";;
        /*

            text +=
           +
              "<button onclick='Redirect(" +
              db.products[i].id +
              ")'>Details</button>" +
              "<button onclick='addCartItem(" +
              db.products[i].id +
              "," +
              JSON.stringify(db.products[i].name) +
              "," +
              db.products[i].price +
              "," +
              JSON.stringify(db.products[i].image) +
              "," +
              JSON.stringify(db.products[i].gender) +
              "," +
              JSON.stringify(db.products[i].color) +
              "," +
              JSON.stringify(db.products[i].size) +
              "," +
              JSON.stringify(db.products[i].theme) +
              ")'>Add  to cart</button>" +
              //"<button onclick='enArray.push(" + db.products[i].theme + "," + db.products[i].theme + ")'>Add  to cart</button>"
              "<br><br><br><br><br><br>" +
              "<button onclick='console.log(enArray)'>Console</button>";*/
    }
    document.getElementById("stuff").innerHTML = text;
}