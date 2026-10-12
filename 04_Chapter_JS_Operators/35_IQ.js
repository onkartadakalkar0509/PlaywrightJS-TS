let statusCode = 403;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Forbidden";



console.log(`Status ${statusCode}: ${category}`);