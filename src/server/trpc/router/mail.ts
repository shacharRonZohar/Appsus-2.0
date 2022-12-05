import { z } from 'zod'

import { router, publicProcedure, protectedProcedure } from '../trpc'

export const mailRouter = router({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const user = ctx.session?.user
    if (!user) {
      throw new Error('Not logged in')
    }
    // return ctx
    // try {
    //   ctx.prisma.account.findMany()
    // console.log(ctx.prisma.mail.findMany())
    const mails = await ctx.prisma.mail.findMany({
      where: {
        OR: [
          { from: user.email ?? '' },
          {
            to: {
              has: user.email,
            },
          },
        ],
      },
    })
    if (!mails || !mails.length) makeDemoData(ctx)
    return mails
    // } catch (e) {}
    // console.log(ctx.prisma)
  }),
  get: protectedProcedure.input(z.string()).query(({ ctx, input: id }) => {
    return ctx.prisma.mail.findUnique({
      where: {
        id,
      },
    })
  }),
})

const makeDemoData = async ctx => {
  // Make demo data of 10 mails, 5 sent by user, 5 sent to user
  const demoMails = []
  for (let i = 0; i < 10; i++) {
    demoMails.push({
      from: i < 5 ? 'all@gmail.com' : 'test@gmail.com',
      to: i < 5 ? 'test@gmail.com' : 'all@gmail.com',
      subject: `Demo mail ${i}`,
      body: `This is a demo mail ${i}`,
    })
  }
  // Make demo data of 10 mails, 5 sent by rzshachar@gmail.com and sent to test, 5 sent to rzshachar@gmail.com by test@gmail.com
  // const demoMails = []
  for (let i = 0; i < 10; i++) {
    demoMails.push({
      from: i < 5 ? 'rzshachar@gmail.com' : 'test@gmail.com',
      to: i < 5 ? 'test@gmail.com' : 'rzshachar@gmail.com',
      subject: `Demo mail ${i}`,
      body: `This is a shachar demo mail ${i}`,
    })
  }
  // make one mail by rzshachar@gmail.com, sent to test
  // demoMails.push({
  //   from: 'rzshachar@gmail.com',
  //   to: 'test@gmail.com',
  //   subject: `Demo mail personal`,
  //   body: `This is a demo mail ${demoMails.length}`,
  // })
  await ctx.prisma.mail.createMany({
    data: demoMails,
  })
}

