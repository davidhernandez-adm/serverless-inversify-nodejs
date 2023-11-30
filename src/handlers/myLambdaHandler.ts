import { APIGatewayProxyHandler } from 'aws-lambda';
import 'reflect-metadata';
import { myContainer } from '../inversify.config';
import { IDynamoDBGateway } from 'src/interfaces/IDynamoDBGateway';

export const handler: APIGatewayProxyHandler = async (event) => {
  const dynamoDBGateway = myContainer.get<IDynamoDBGateway>('IDynamoDBGateway');

  try {
    const data = JSON.parse(event.body);
    await dynamoDBGateway.putItem(data, `${process.env.DYNAMODB_TABLE}`);
    return { statusCode: 200, body: JSON.stringify({ message: 'Item inserted' }) };
  } catch (error) {
    console.error('Error:', error);
    return { statusCode: 500, body: JSON.stringify({ message: 'Error inserting item' }) };
  }
};
