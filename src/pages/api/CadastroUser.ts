import { prisma } from "@/Utils/PrismaGlobal";
import { NextApiRequest , NextApiResponse } from "next";

export default async function handle(req:NextApiRequest,res:NextApiResponse)
{
    const {method} = req;
    const {Nome , Email , Senha} = req.body;

    switch(method)
    {
        case 'POST':
        {
            const info =  await prisma.userCadastro.findMany
            ({
                where:
                {
                    Email: `${Email}`
                },

                select:
                {
                    Name: true
                }
            })

            if(info.length == 1)
            {
                throw new Error("Email Existente")
            }

            else
            {
                await prisma.userCadastro.create
                ({
                    data:
                    {
                        Name: `${Nome}`,
                        Email: `${Email}`,
                        Senha: `${Senha}`,
                        imagem: `https://img.icons8.com/color/256/user-male-circle.png`
                    }
                })
            }
            
            res.end();
            break;
        }
    }
}