import {DynamoDB} from 'aws-sdk'

const options = {
<<<<<<< HEAD
  region: 'localhost',
  endpoint: 'http://localhost:8000',
=======
  region: `${process.env.LOCAL_REGION}`,
  endpoint: `${process.env.END_POINT}`,
>>>>>>> e845f178765f2ea976cdce14b6d68f239df2ec20
  accessKeyId: `${process.env.AWS_ACCESS_KEY}`, 
  secretAccessKey: `${process.env.AWS_ACCESS_ACCESS_KEY}`,
}

const isOffline = () => {
  return process.env.IS_OFFLINE;
}

export const document = isOffline() 
? new DynamoDB.DocumentClient(options) 
: new DynamoDB.DocumentClient();