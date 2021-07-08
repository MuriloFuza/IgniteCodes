import {DynamoDB} from 'aws-sdk'

const options = {
  region: `${process.env.LOCAL_REGION}`,
  endpoint: `${process.env.END_POINT}`,
  accessKeyId: `${process.env.AWS_ACCESS_KEY}`, 
  secretAccessKey: `${process.env.AWS_ACCESS_ACCESS_KEY}`,
}

const isOffline = () => {
  return process.env.IS_OFFLINE;
}

export const document = isOffline() 
? new DynamoDB.DocumentClient(options) 
: new DynamoDB.DocumentClient();