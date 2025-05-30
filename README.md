# Serverless Inversify DynamoDB

A modern serverless application demonstrating **dependency injection** in AWS Lambda functions using TypeScript, Inversify IoC container, and DynamoDB integration.

## 📌 Project Overview

This project showcases enterprise-level patterns in a serverless environment, implementing **Inversion of Control (IoC)** and **Dependency Injection** principles within AWS Lambda functions. The application provides a REST API endpoint that accepts JSON data and persists it to DynamoDB using clean architecture patterns.

**Core Technologies:** Node.js, TypeScript, AWS Lambda, DynamoDB, Inversify, Serverless Framework

**Problem Solved:** Demonstrates how to maintain clean, testable, and maintainable code in serverless applications by applying SOLID principles and dependency injection patterns.

## 📁 Project Structure

```
├── src/
│   ├── gateway/
│   │   └── DynamoDBGateway.ts      # Data access layer implementation
│   ├── handlers/
│   │   └── myLambdaHandler.ts      # Lambda function entry point
│   ├── interfaces/
│   │   └── IDynamoDBGateway.ts     # Gateway contract definition
│   └── inversify.config.ts         # Dependency injection container
├── serverless.ts                   # Serverless Framework configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 14.15.0
- AWS CLI configured with appropriate credentials
- Serverless Framework CLI

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd serverless-inversify-nodejs

# Install dependencies
npm install

# Install Serverless Framework globally (if not already installed)
npm install -g serverless
```

### Environment Setup

The application uses the following environment variables (automatically configured):
- `DYNAMODB_TABLE`: DynamoDB table name (format: `{stage}-{service}-test`)
- `AWS_NODEJS_CONNECTION_REUSE_ENABLED`: Connection optimization

### Deployment

```bash
# Deploy to AWS (dev stage)
serverless deploy

# Deploy to specific stage
serverless deploy --stage prod
```

### Local Development

```bash
# Start local development server
serverless offline

# Invoke function locally
serverless invoke local --function myLambdaTest
```

### Testing the API

```bash
# POST request to the deployed endpoint
curl -X POST https://your-api-gateway-url/dev/inverisify \
  -H "Content-Type: application/json" \
  -d '{"id": "test-123", "name": "Sample Item", "timestamp": "2024-01-01T00:00:00Z"}'
```

## 📦 Technologies Used

### Core Stack
- **TypeScript** - Type-safe JavaScript development
- **Node.js 16.x** - Runtime environment
- **AWS Lambda** - Serverless compute
- **Amazon DynamoDB** - NoSQL database
- **API Gateway** - REST API management

### Architecture & Patterns
- **Inversify** - Dependency injection container
- **Reflect Metadata** - Decorator metadata support
- **Clean Architecture** - Separation of concerns
- **Repository Pattern** - Data access abstraction

### Development Tools
- **Serverless Framework** - Infrastructure as Code
- **ESBuild** - Fast TypeScript compilation
- **AWS SDK v2** - AWS service integration

### Infrastructure
- **Pay-per-request DynamoDB** - Cost-effective scaling
- **IAM Roles** - Least-privilege security
- **CloudFormation** - Automated resource provisioning

## 🧠 Key Challenges & Learnings

### Challenge 1: Dependency Injection in Serverless
**Problem:** Implementing IoC containers in Lambda's stateless environment while maintaining cold start performance.

**Solution:** Configured Inversify container as a singleton with proper decorator metadata support, ensuring dependencies are resolved efficiently during Lambda initialization.

**Learning:** Gained deep understanding of how dependency injection patterns can be adapted for serverless architectures without sacrificing performance.

### Challenge 2: TypeScript Configuration Complexity
**Problem:** Setting up TypeScript with decorators, path mapping, and Lambda-compatible compilation.

**Solution:** Implemented a robust TypeScript configuration with experimental decorators, proper module resolution, and ESBuild integration for optimal bundle size.

**Learning:** Mastered advanced TypeScript configurations for serverless environments, including decorator metadata and path resolution strategies.

### Challenge 3: AWS Integration & IAM Security
**Problem:** Implementing least-privilege security while maintaining functionality across different deployment stages.

**Solution:** Created dynamic IAM policies using Serverless Framework variables, ensuring proper resource access without over-permissioning.

**Learning:** Developed expertise in AWS security best practices and infrastructure automation using CloudFormation templates.

## 🔧 Architecture Highlights

- **SOLID Principles**: Demonstrates Single Responsibility, Dependency Inversion, and Interface Segregation
- **Gateway Pattern**: Abstracts DynamoDB operations behind a clean interface
- **Error Handling**: Comprehensive error catching and logging throughout the application
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Scalable Infrastructure**: Auto-scaling DynamoDB with pay-per-request billing

## 📈 Performance Considerations

- **Bundle Optimization**: ESBuild configuration excludes AWS SDK to reduce package size
- **Connection Reuse**: Enabled AWS SDK connection pooling for better performance
- **Source Maps**: Included for better debugging in production environments

## 🚀 Future Enhancements

- Unit and integration testing with Jest
- API input validation with Joi or Zod
- Monitoring and observability with CloudWatch/X-Ray
- Multi-environment configuration management
- CI/CD pipeline with GitHub Actions

## 📜 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ using modern serverless patterns and enterprise-grade architecture principles.**