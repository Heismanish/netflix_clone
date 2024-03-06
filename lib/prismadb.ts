import {PrismaClient} from '@prisma/client';

// to make sure that on every hot reload (that nextjs does) a new prisma client is not created.
const client = global.prismadb||new PrismaClient()
if(process.env.NODE_ENV==="production") global.prismadb =client 

export default client