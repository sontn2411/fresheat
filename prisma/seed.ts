import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const socailsData: Prisma.SocialsCreateInput[] = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/yourpage',
  },
  {
    name: 'Twitter',
    url: 'https://facebook.com/yourpage',
  },
  {
    name: 'Instagram',
    url: 'https://facebook.com/yourpage',
  },
]

const IndexSections: Prisma.SettingCreateInput[] = [
  {
    name: 'BestFood',
    index: 1,
  },
  {
    name: 'TimeOfferFood',
    index: 2,
  },
  {
    name: 'AboutUs',
    index: 3,
  },
  {
    name: 'BestSelling',
    index: 4,
  },
]

export async function main() {
  for (const u of socailsData) {
    await prisma.socials.create({ data: u })
  }
  for (const u of IndexSections) {
    await prisma.setting.create({ data: u })
  }
}

main()
