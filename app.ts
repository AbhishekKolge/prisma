import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const prisma = new PrismaClient({log: ['query']});

const main = async () => {
  // await prisma.user.deleteMany()

  //create (with or without reference models)
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Gayatri',
  //     email: 'gayatri@gmail.com',
  //     age: 23,
  //     userPreference: {
  //       create: {
  //       emailUpdates: true
  //       }
  //     }
      
  //   }
  // })

  // create many (we can't use select and can't create with child reference models)
  // const users = await prisma.user.createMany({
  //   data: [{
  //     name: 'Gavravi',
  //     email: 'gavravi@gmail.com',
  //     age: 23,
  //   },{
  //     name: 'Abhishek',
  //     email: 'abhishek@gmail.com',
  //     age: 26,

  //   }]
  // })

  //find unique. we can only search based on fields which have unique constraint
  // const user = await prisma.user.findUnique({
  //   where: {
  //     age_name: {
  //       age: 23,
  //       name: 'Gayatri'
  //      }
  //   }
  // })

  //find first. it is same as find unique except we can search based on any field
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: 'Abhishek'
  //   }
  // })

  //find many
  // const users = await prisma.user.findMany()

  //find with reference model
  // const user = await prisma.user.findFirst({
  //   include: {
  //     userPreference: true
  //   }
  // })

  //find with specific fields
  // const user = await prisma.user.findFirst({
  //   select: {
  //     name: true,
  //     userPreference: {
  //       select: {
  //         emailUpdates: true
  //       }
  //     }
  //   }
  // })

  // (note: we can't use select and include at the same time)

  //distinct (distinct will return only first value if passed field is same)
  // const user = await prisma.user.findMany({
  //  distinct: ['name','age']
  // })

  //take (how many we want to return)
  //skip
  //order by
  // const user = await prisma.user.findMany({
  //   take: 2,
  //   skip: 1,
  //   orderBy: {
  //     age: 'asc'
  //   }
  // })

  //equal optional. we can just pass value.
  //not
  //in. it will return all the matched values present in array
  //not in
  //lt, lte, gt, gte
  // contains. to check if text is contained inside another text
  //startsWith
  //endsWith
  // const user = await prisma.user.findMany({
    // where: {
      // name: {equals: 'Abhishek'}
      // name: {not: 'Abhishek'}
      // name: {in: ['Abhishek', 'Gayatri']}
      // name: {notIn: ['Abhishek', 'Gayatri']}
      // age: {
        // lt: 25
      // }
      // email: {
      //   contains: '@gmail.com'
      //   startsWith: 'Abhi'
      //   endsWith: '.com'
      // }
    // }
  // })

  //AND
  //OR
  //NOT
  // const user = await prisma.user.findMany({
  //   where: {
      // name: 'Abhishek',
      // email: 'abhishek@gmail.com'
      // AND: [{name: 'Abhishek'}, {email: 'abhishek@gmail.com'}]
      //but we should use AND when we want to query same field multiple times
      // AND: [{email: 'gavravi@gmail.com'}, {email: 'abhishek@gmail.com'}]
      // OR: [{email: 'abhishek@gmail.com'},{email: 'gavravi@gmail.com'}]
      // NOT: {name: 'Abhishek'}
      // NOT: [{name: 'Abhishek'}, {email: 'gavravi@gmail.com'}]
  //   }
  // })

  //relationship queries
  // const user = await prisma.user.findMany({
  //   where: {

      // userPreference: {
      //   emailUpdates: true
      // }

   
      // writtenPosts: {
        //every written post has current date as created at
        // every: {
        //   createdAt: new Date()
        // }

        //some written post has title as test
        // some: {
        //   title: 'test'
        // }

        //no written post has title as test
        // none: {
        //   title: 'test'
        // }
      // }
  //   }
  // })

  //update. it only updates the first which is found. can use include and select
  // const user = await prisma.user.update({
  //   data: {
  //     name: 'Sonu'
  //   },
  //   where: {
  //     email: 'gavravi@gmail.com'
  //   }
  // })

  //update many. it updates everything. can't use include and select
  // const users = await prisma.user.updateMany({
  //   data: {
  //     role: 'ADMIN'
  //   },
  //   where: {
  //     email: {endsWith: '@gmail.com'}
  //   }
  // })

  //when using update and updateMany we can also use increment, decrement, multiply, divide
  // const user = await prisma.user.update({
  //   data: {
  //     age: {
  //       increment: 10
  //       decrement: 10
  //       multiply: 10
  //       divide: 10
  //     }
  //   },
  //   where: {
  //     email: 'abhishek@gmail.com'
  //   }
  // })
  
  //create, connect, disconnect different relationships while updating and creating
  // const user = await prisma.user.update({
  //   data: {
  //     userPreference: {
        //create new
        // create: {
        //   emailUpdates: true
        // }

        //connect to already created
        // connect: {
        //   id: 'c3005a5f-14cb-4f40-8014-cd35e2c6caf0'
        // }

        //disconnect existing
        // disconnect: true
  //     }
  //   },
  //   where: {
  //       email: 'abhishek@gmail.com'
  //   },
  //   include: {
  //     userPreference: true
  //   }
  // })

  //delete
  // const user = await prisma.user.delete({
  //   where: {
  //     email: 'abhishek@gmail.com'
  //   }
  // })

  //delete many
  // const users = await prisma.user.deleteMany()


  // console.log({users});
};

main().catch((error) => console.log(error));
