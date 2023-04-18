import { prisma } from "@/Utils/PrismaGlobal";
import { NextApiRequest , NextApiResponse } from "next";

export default async function handle(req:NextApiRequest ,res:NextApiResponse)
{
    const {method} = req;
    const {Titulo , Imagem , Information } = req.body;

    switch(method)
    {
        case "POST":
        {
            await prisma.products.create
            ({
                data:
                {
                    Titulo: `${Titulo}`,
                    Imagem: `${Imagem}`,
                    Information: `${Information}`,
                }
            });

            res.end();
            break;
        }
    }
}