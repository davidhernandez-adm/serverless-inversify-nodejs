
import { Container } from 'inversify';
import { IDynamoDBGateway } from './interfaces/IDynamoDBGateway';
import { DynamoDBGateway } from './gateway/DynamoDBGateway';

const myContainer = new Container();
myContainer.bind<IDynamoDBGateway>('IDynamoDBGateway').to(DynamoDBGateway);

export { myContainer };
