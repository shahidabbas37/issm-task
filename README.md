**ISSM Label Checkout API**
Overview
The ISSM Label Checkout API is a service designed to calculate the total price of a shopping cart based on a predefined product catalogue. The catalogue includes various labels, some of which have discount rules applied when specific quantities are purchased. This API is built with TypeScript and Express, and it includes robust error handling, input validation, and unit tests.


**Features**
Dynamic Pricing: Calculates the total price of a cart based on the product catalogue.
Discount Rules: Applies discounts for specific products when certain quantities are met.
Input Validation: Ensures the input is valid (e.g., product IDs must be in an array format).
Error Handling: Provides meaningful error messages for invalid inputs or server errors.
Unit Tests: Includes comprehensive tests to ensure the API behaves as expected.


**Setup**
1. Clone the Repository
Clone the repository to your local machine:
git clone <repo-url>
cd <repo-directory>

2. Install Dependencies
Install all required dependencies using npm:
npm install

4. Run Tests
Run the unit tests to ensure everything is working as expected:
npm test

4. Start the Application
Start the application in development mode with file-watching and automatic restarts:
npm start

6. Build the Application
Compile the TypeScript code into JavaScript for production:
npm run build

**API Documentation**
You can find the Postman Collection and OpenAPI (YAML) file in the root directory of the project. These files provide detailed API documentation and allow you to test the API endpoints directly in Postman.

**Postman Collection:** issm.ai.postman_collection.json

 

**Development Tools**
**TypeScript**: For type-safe JavaScript development.
**Express**: For building the REST API.
**Jest**: For unit testing.
**ts-node-dev**: For development with file-watching and automatic restarts.
**Postman**: For API testing and documentation.

**Contributing**
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
