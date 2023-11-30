import { IDynamoDBGateway } from '../interfaces/IDynamoDBGateway';
import { injectable } from 'inversify';
import { DynamoDB } from 'aws-sdk';
import { PutItemOutput } from 'aws-sdk/clients/dynamodb';

@injectable()
export class DynamoDBGateway implements IDynamoDBGateway {
  private dynamoDb = new DynamoDB.DocumentClient();

  async putItem<T>(data: T, tableName: string): Promise<PutItemOutput> {
    const params = {
        TableName: tableName,
        Item: data,
      };
  
      try {
        console.log('Item inserted successfully:', data);
        return await this.dynamoDb.put(params).promise();
      } catch (error) {
        console.error('Error inserting item:', error);
        throw error;
      }
  }
}
