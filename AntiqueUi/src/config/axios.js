import axios from "axios";

axios.baseURL = "https://antique-dev-api.azurewebsites.net/api/";

axios.get('https://antique-dev-api.azurewebsites.net/api/')
.then(function(response) {
    // handle response
    console.log(response)
}).catch(function(error) {
    // handle error
    console.log(error)
}).finally(function() {
    // always executes at the last of any API call
});

export default axios;
