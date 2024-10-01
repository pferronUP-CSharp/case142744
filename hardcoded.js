// This is an example of what not to do: hardcoding passwords and secrets in your code.

// Hardcoded database credentials
const dbUsername = "admin";
const dbPassword = "password123";

// Hardcoded API key
const apiKey = "abcd1234efgh5678";

// Function to connect to the database (example)
// WARNING: This function demonstrates insecure practices and should not be used in production
function connectToDatabase() {
    console.log(`Connecting to database with username: ${dbUsername} and password: ${dbPassword}`);
    // Database connection logic goes here...
}

// Function to make an API request (example)
// WARNING: This function demonstrates insecure practices and should not be used in production
function makeApiRequest() {
    console.log(`Making API request with key: ${apiKey}`);
    // API request logic goes here...
}

// Example usage
connectToDatabase();
makeApiRequest();

