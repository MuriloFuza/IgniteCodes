import chromium  from 'chrome-aws-lambda'
import {document} from '../utils/dynamodbClient'
import path from 'path'
import fs from 'fs'
import Handlebars from 'handlebars'
import dayjs from 'dayjs'
<<<<<<< HEAD
import {S3} from 'aws-sdk'
=======
>>>>>>> e845f178765f2ea976cdce14b6d68f239df2ec20

interface ICreateCertificate {
  id: string;
  name: string;
  grade: string;
}

interface ITemplate {
  id: string;
  name: string;
  grade: string;
  date: string;
  medal: string;
}

const compile = async function( data: ITemplate ){
  const filePath = path.join(process.cwd(), 'src', 'templates', 'certificate.hbs');

  const html = fs.readFileSync(filePath, 'utf-8');

  return Handlebars.compile(html)(data);
}

export const handle = async (event) => {
  const {id, name, grade} = JSON.parse(event.body) as ICreateCertificate;

  const userAlreadyExists = await document.query({
    TableName: 'users_certificates',
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: {
      ":id": id
    }
  }).promise();

  console.log(userAlreadyExists.Items)

  if(!userAlreadyExists.Items[0]){
    await document.put({
      TableName: "users_certificates",
      Item:{
        id,
        name,
        grade
      },
    }).promise();
  }

  //Gerar certificado
  //Compilar usando o handlebars

  const medalPath = path.join(process.cwd(), 'src', 'templates', 'selo.png');
  const medal = fs.readFileSync(medalPath, 'base64');

  const data: ITemplate = {
    date: dayjs().format('DD/MM/YYYY'),
    grade,
    name,
    id,
    medal
  }

  const content  = await compile(data);

  //Transformando em pdf
  const browser = await chromium.puppeteer.launch({
    headless: true,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath
  });

  const page = await browser.newPage();

  await page.setContent(content);

  const pdf = await page.pdf({
    format: 'a4',
    landscape: true,
    path: process.env.IS_OFFLINE ? 'certificate.pdf' : null,
    printBackground: true,
    preferCSSPageSize: true
  });

  await browser.close();

  //salvar no S3

  const s3  = new S3();

  await s3.putObject({
    Bucket: 'ignitecertificatemurilo',
    Key: `${id}.pdf`,
    ACL: 'public-read',
    Body: pdf,
    ContentType: 'application/pdf'
  }).promise();

  //Gerar certificado
  //Compilar usando o handlebars

  const medalPath = path.join(process.cwd(), 'src', 'templates', 'selo.png');
  const medal = fs.readFileSync(medalPath, 'base64');

  const data: ITemplate = {
    date: dayjs().format('DD/MM/YYYY'),
    grade,
    name,
    id,
    medal
  }

  const content  = await compile(data);

  //Transformando em pdf
  const browser = await chromium.puppeteer.launch({
    headless: true,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath
  });



  const page = await browser.newPage();

  await page.setContent(content);


  const pdf = await page.pdf({
    format: 'a4',
    landscape: true,
    path: process.env.IS_OFFLINE ? 'certificate.pdf' : null,
    printBackground: true,
    preferCSSPageSize: true
  });


  console.log("Passou ");
  await browser.close();

  //salvar no S3



  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Certificado criado com sucesso!',
      url: `https://ignitecertificatemurilo.s3.amazonaws.com/${id}.pdf`
    }),
    headers: {
      "Content-Type":"application/json",
    },
  };
};