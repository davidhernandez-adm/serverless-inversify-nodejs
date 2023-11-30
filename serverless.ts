import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'serverless-inversify-nodejs',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    stage: 'dev',
    region: "us-east-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      DYNAMODB_TABLE: '${self:provider.stage}-${self:service}-test'
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: 'dynamodb:PutItem',
        Resource: 'arn:aws:dynamodb:${self:provider.region}:*:table/${self:provider.environment.DYNAMODB_TABLE}',
      }
    ],
  },
  functions: {
    myLambdaTest: {
      handler: 'src/handlers/myLambdaHandler.handler',
      events: [
        {
          http: {
            method: 'post',
            path: 'inverisify',
          },
        },
      ],
    }
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk', 'sharp'],
      target: 'node16',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  resources: {
    Resources: {
      TestTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: '${self:provider.environment.DYNAMODB_TABLE}',
          AttributeDefinitions: [
            { AttributeName: 'id', AttributeType: 'S' },
          ],
          KeySchema: [
            { AttributeName: 'id', KeyType: 'HASH' },
            
          ],
          BillingMode: 'PAY_PER_REQUEST',
        },
      },
    },
  },
  
};

module.exports = serverlessConfiguration;
