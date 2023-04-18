import { prisma } from "@/Utils/PrismaGlobal";
import { NextApiRequest , NextApiResponse } from "next";

export default async function handle(req:NextApiRequest,res:NextApiResponse)
{
    const { method } = req;

    switch(method)
    {
        case 'GET':
        {

            const info = await prisma.products.findMany
            ({
                select:
                {
                    Titulo: true,
                    Imagem: true,
                    Information: true,
                }
            });

            res.status(200).send(info);
            res.end();
            break;
        }
    }
}