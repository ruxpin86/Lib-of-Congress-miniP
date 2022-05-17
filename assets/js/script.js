// grab text from the user
// take in format selection data
// link to the LOC API
// execute a fetch request on the click of the 'click me' button

var searchBar = document.getElementById("search-input")
var formatInput = document.getElementById("format-input")
var requestUrl = document.getElementById("")
var searchBtn = document.getElementById("btn")
var results;

//call the loc API 
function getApi(event) {
    event.preventDefault() //keep page from refreshing
    console.log(formatInput)
    console.log(searchBar)
    var fetchString = "https://www.loc.gov/" + formatInput.value + "/?q=" + searchBar.value + "&fo=json"
    fetch(fetchString)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            results = data.results.map(function (obj) {
                return {
                    url: obj.url,
                    // can add more arrays to this object
                }
            })
            localStorage.setItem("results", JSON.stringify(results))
            location.assign(fetchString)
        })
}
searchBtn.addEventListener("click", getApi)

