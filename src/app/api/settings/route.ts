import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const data = {
    Logo: '/assets/logo.svg',
    Time: {
      Store: '09:00 AM - 06:00 PM',
      Office: {
        MondayToFriday: '08 AM - 04 PM',
        Saturday: '09 AM - 12 AM',
      },
    },
    Socials: {
      Facebook: 'https://facebook.com/yourpage',
      Twitter: 'https://twitter.com/yourpage',
      Instagram: 'https://instagram.com/yourpage',
    },
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const POST = async (req: NextRequest) => {
  const { data } = await req.json()

  try {
    await prisma.setting.deleteMany()

    for (const setting of data) {
      await prisma.setting.create({
        data: {
          id: setting.id,
          name: setting.name,
          index: setting.index,
        },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Create failed:', error)
    return NextResponse.json({ success: false, error })
  }
}
