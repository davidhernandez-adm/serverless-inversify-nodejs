# Serverless Inversify Node.js

## Description

Serverless Inversify DynamoDB: A Node.js and TypeScript project leveraging Serverless Framework and Inversify for dependency injection. Features a Lambda function with a DynamoDB putItem gateway, demonstrating inversion of control in a serverless environment.

## Features

- **Serverless Architecture**: Utilizes AWS Lambda for serverless computing, ensuring scalability and cost-effectiveness.
- **Dependency Injection**: Implements Inversify for dependency injection, promoting loose coupling and separation of concerns.
- **AWS DynamoDB Integration**: Features an integration with AWS DynamoDB, demonstrating how to interact with a NoSQL database in a serverless application.
- **TypeScript Support**: Built with TypeScript, offering strong typing and modern JavaScript features for better development experience.

## Installation

Before starting, ensure you have Node.js, npm, and the Serverless Framework installed. Additionally, configure your AWS CLI with appropriate credentials.

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/davidhernandezeverdax/serverless-inversify-nodejs.git


2. **Clone the Repository**:
   ```bash
   cd serverless-inversify-nodejs

3. **Install dependencies**:
   ```bash
   npm install

## Deployment
Deploy the service using the Serverless Framework. Ensure your AWS credentials are set up correctly.

   ```bash
   serverless deploy
   ```

## Usage
- Invoking the Lambda Function
- Endpoint: POST /inverisify
   - Payload: Send a JSON payload with the data you wish to put into the DynamoDB table.
   - The Lambda function will process the request and interact with DynamoDB as configured.   
