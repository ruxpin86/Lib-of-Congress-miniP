var results = document.getElementById("search-results")
    // console.log(results)

    //function responsible for grabbing URL params
    (function () {
        var searchParams = document.location.search
        // console.log(searchParams)
        // '?q=denver&fo=json'
        //need to format this object 
        var data = searchParams[1].split("=").pop()
        console.log(data)


    })()
//need to write function that displays results data to user
// function displayResults() {

// }

// grabUrl()