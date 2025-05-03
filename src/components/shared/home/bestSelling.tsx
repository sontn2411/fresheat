'use client'

import { Card, CardContent } from '@/components/ui/card'
import TitleSection from '../titleSection'
import Image from 'next/image'
import { Eye, Heart, ShoppingBasket } from 'lucide-react'

interface BestSellingProps {
  data: {
    id: number
    name: string
    price: number
    desc: string
    image: string
  }[]
}

const BestSelling = ({ data }: BestSellingProps) => {
  return (
    <div className='bg-color-5 py-[120px]'>
      <div className='flex flex-col justify-center items-center'>
        <TitleSection text='popular dishes' />
        <p className='text-[40px] font-black'>Best selling dishes</p>
        <div className='flex w-full justify-center gap-4 pt-6'>
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                className="group relative max-w-[270px] w-full h-[350px] bg-white hover:cursor-pointer hover:bg-[url('https://gramentheme.com/html/fresheat/assets/img/bg/dishesThumbBG.png')] bg-cover bg-center transition-all duration-300"
              >
                <CardContent className='group-hover:text-white transition-colors duration-300 flex flex-col justify-center gap-4  items-center h-full'>
                  <div className='relative w-34 h-34 rounded-full overflow-hidden border-2 border-color-1 pt-4'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className='object-cover'
                    />
                  </div>

                  <div className='text-center w-full'>
                    <p className='text-[20px] font-bold'>{item.name}</p>
                    <p className=' group-hover:text-white font-normal text-color-6'>
                      {item.desc}
                    </p>
                    <p className='group-hover:text-white text-[18px] font-bold text-color-2'>
                      {item.price}
                    </p>
                  </div>
                </CardContent>
                <div className=' absolute top-2 right-2 flex flex-col gap-2'>
                  <button className='bg-white rounded-full flex justify-center items-center p-1 '>
                    <Heart className=' ' size={18} />
                  </button>
                  <div className='flex flex-col gap-2 opacity-0 translate-y-20 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                    <button className='bg-white rounded-full flex justify-center items-center p-1 '>
                      <ShoppingBasket className='' size={18} />
                    </button>
                    <button className='bg-white rounded-full flex justify-center items-center p-1 '>
                      <Eye className='' size={18} />
                    </button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BestSelling
