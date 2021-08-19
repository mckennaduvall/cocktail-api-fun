//1. create user input field that can be read 
//2. read API
//3. connect API call to user input
//4. print data onto HTML page

//d3 select the elements
//get reference to the button on the page with id set to 'button'
var button = d3.select("#button");

//get referecne to the input element on the page  with id set to 'cocktailInput'
var input = d3.select("#cocktailInput");

//attach an event 
button.on("click", runEnter);
input.on("click", runEnter);

//this function is triggered when the button is clicked
function runEnter() {
    d3.event.preventDefault();
    var inputValue = input.property("value");

base_url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

var url = base_url + inputValue

//make a fetch requests
fetch(url)

    .then(response=>{
        return response.json();
    }).then(json=> {
        console.log(json)

        console.log(Object.values(json));

        drinksArray = Object.values(json);

        drink = drinksArray[0]

        console.log(drink[0].strDrink)

    });

};




