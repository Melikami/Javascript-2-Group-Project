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

//koppla en variable till ett element
var ul = document.getElementById("products-list");
//funktion för skriva ut sökresultat
function render_lists(result) {
    var li = "";
    for (index in result) {
        li += //"</br>" + "<div class='test'>" + JSON.stringify(result[index]) + "</div>";
            "<div class='prod'>" + "<img class='small-img' src=" + db.products[index].image + ">" + "</img>" + +"<div class='prod-text'>" +
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
            result[index].theme + "</div>" +
            //"<br>" +
            '</div>' + "</div>";
    }
    ul.innerHTML = li;
}

//kopplar variabel till sökfältselementet
var input = document.getElementById('search-product');
//funktion för att matcha en sökord mot databasen och skriva ut resultatet
function filterProd(event) {
    //event.preventDefault()

    //variabel som kopplats till inskrivet värde. Trim = tar bort mellanslag
    var searchVal = input.value.toLowerCase().trim();

    //tom array
    var results = [];
    //for loop som tittar igenom databasen. Varje if statement matchar inskrivet värde mot ett produktattribut
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
    //alla produkter ska vara utskrivna som default. Sökningen begränsar.
    if (searchVal.length == 0) {
        results = db.products;
    }
    //säkerställer att det inte är några dubbletter i ett sökresultat
    results = [...new Set(results)];

    console.log(results)
        //skriver ut resultat på sidan
    render_lists(results);
}
//anropar filterprod varje gång jag skriver något i sökfältet
input.addEventListener('keyup', filterProd);

//visar alla produkter innan jag börjar söka. 
render_lists(db.products);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}