import { prisma } from "@/Utils/PrismaGlobal";
import { NextApiRequest , NextApiResponse } from "next";

export default async function handle(req:NextApiRequest,res:NextApiResponse)
{
    const { method } = req;
    const { Email, Senha } = req.body;
    
    switch(method)
    {
        case 'POST':
        {
            await prisma.userCadastro.findMany
            ({
                where:
                {
                    Email: `${Email}`,
                    Senha: `${Senha}`,
                },

                select:
                {
                    Name: true,
                    imagem: true
                }
            })

            .then((data)=>
            {
                if(data.length === 0)
                {
                    throw new Error('Credencias Invalidas');
                }

                else
                {
                    res.status(200).send(data);
                }
                
            })
        }
    }
}