
export const handle = async (event) => {
  console.log("acessou")
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Certificado criado com sucesso!'
    }),
    headers: {
      "Content-Type":"application/json",
    },
  };
};