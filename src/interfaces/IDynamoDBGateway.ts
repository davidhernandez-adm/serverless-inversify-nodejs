import { PutItemOutput } from "aws-sdk/clients/dynamodb";

export interface IDynamoDBGateway {
  putItem<T>(data: T, tableName: string): Promise<PutItemOutput>;
}
