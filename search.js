var dbAsJson = window.localStorage.getItem("mydb");
console.log(dbAsJson);
var db = JSON.parse(dbAsJson);
console.log(db);

/*
const myJSON =

    '{"products":[' +
    '{"id":"1","name":"T-shirt","price":"20","image":"img/shirt1.jpg","gender":"Man","color":"Black","size":"10","theme":"Winter" },' +
    '{"id":"2","name":"T-shirt","price":"25","image":"img/shirt2.jpg","gender":"Man","color":"Black","size":"10","theme":"Winter" },' +
    '{"id":"3","name":"T-shirt","price":"30","image":"img/shirt3.jpg","gender":"Man","color":"White","size":"10","theme":"Summer" },' +
    '{"id":"4","name":"T-shirt","price":"15","image":"img/shirt4.jpg","gender":"Man","color":"White","size":"10","theme":"Summer" },' +
    '{"id":"5","name":"T-shirt","price":"20","image":"img/shirt5.jpg","gender":"Man","color":"Beige","size":"10","theme":"Fall" },' +
    '{"id":"6","name":"T-shirt","price":"25","image":"img/shirt6.jpg","gender":"Man","color":"Black","size":"10","theme":"Summer" },' +
    '{"id":"7","name":"T-shirt","price":"30","image":"img/shirt7.jpg","gender":"Man","color":"White","size":"10","theme":"Summer" },' +
    '{"id":"8","name":"T-shirt","price":"15","image":"img/shirt8.jpg","gender":"Man","color":"Grey","size":"10","theme":"Spring" },' +
    '{"id":"9","name":"T-shirt","price":"25","image":"img/shirt9.jpg","gender":"Man","color":"Black","size":"10","theme":"Winter" },' +
    '{"id":"10","name":"T-shirt","price":"20","image":"img/shirt10.jpg","gender":"Man","color":"Black","size":"10","theme":"Winter" },' +
    '{"id":"11","name":"T-shirt","price":"30","image":"img/shirt11.jpg","gender":"Man","color":"White","size":"10","theme":"Summer" },' +
    '{"id":"12","name":"T-Shirt","price":"25","image":"img/shirt12.jpg","gender":"Man","color":"Black","size":"10","theme":"Fall" }]}';
*/
//json-data
//const db = JSON.parse(myJSON);
function Redirect2(x) {
    console.log("TEST: " + x);
    window.location = "product" + x + ".html";
    console.log(window.location);
}

//koppla en variable till ett element
var ul = document.getElementById("products-list");
//funktion f??r skriva ut s??kresultat
function render_lists(result) {
    var li = "";
    for (index in result) {
        li += //"</br>" + "<div class='test'>" + JSON.stringify(result[index]) + "</div>";
            "<div class='prod'>" + "<img class='small-img' src=" + db.products[index].image + ">" + "</img>" + "<div class='prod-text'>" +
            "<div class='name'>" +
            result[index].name + "</div>" +
            "<div class='price'>" +
            result[index].price + "</div>" +
            "<div class='gender'>" +
            result[index].gender + "</div>" +
            "<div class='color'>" +
            result[index].color + "</div>" +
            // "<div class='size'>" +
            // result[index].size + "</div>" +
            "<div class='theme'>" +
            result[index].theme + "</div>" + '</div>' +
            "<br>" + "<button onmousedown='Redirect(" +
            result[index].id +
            ");'>Details</button>" + "</div>";

    }
    ul.innerHTML = li;
}

//kopplar variabel till s??kf??ltselementet
var input = document.getElementById('search-product');
//funktion f??r att matcha en s??kord mot databasen och skriva ut resultatet
function filterProd(event) {
    //event.preventDefault()

    //variabel som kopplats till inskrivet v??rde. Trim = tar bort mellanslag
    var searchVal = input.value.toLowerCase().trim();

    //tom array
    var results = [];
    //for loop som tittar igenom databasen. Varje if statement matchar inskrivet v??rde mot ett produktattribut
    for (var i = 0; i < db.products.length; i++) {
        if (db.products[i].name.toLowerCase().trim().includes(searchVal)) {
            results.push(db.products[i]);
        }
        if (db.products[i].color.toLowerCase().trim().includes(searchVal)) {
            results.push(db.products[i]);
        }
        if (db.products[i].theme.toLowerCase().trim().includes(searchVal)) {
            results.push(db.products[i]);
        }
    }
    //alla produkter ska vara utskrivna som default. S??kningen begr??nsar.
    if (searchVal.length == 0) {
        results = db.products;
    }
    //s??kerst??ller att det inte ??r n??gra dubbletter i ett s??kresultat
    results = [...new Set(results)];

    console.log(results)
        //skriver ut resultat p?? sidan
    render_lists(results);
}
//anropar filterprod varje g??ng jag skriver n??got i s??kf??ltet
input.addEventListener('keyup', filterProd);

//visar alla produkter innan jag b??rjar s??ka. 
render_lists(db.products);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}