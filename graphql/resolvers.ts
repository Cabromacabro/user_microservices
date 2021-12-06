import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userResolvers = {
    User: {
        profile: async (parent, args, context, info) => {
            return await prisma.user.findUnique({
                where: {
                    userId: parent.id,
                },
            });
        },
    },
    Query:{
        users:async (parent, args, context)=>{
            return await prisma.user.findMany();
        },
    },

};

export {userResolvers};