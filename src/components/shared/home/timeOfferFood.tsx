'use client'

import ButtonOrder from '@/components/ui/buttonOrder'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'

interface TimeOfferFoodProps {
  data: {
    background: string
    data: {
      id: number
      name: string
      image: string
      desc: string
    }[]
  }
}

const TimeOfferFood = ({ data }: TimeOfferFoodProps) => {
  const { background, data: dataList } = data

  return (
    <div className='w-full bg-color-5 px-6 pb-[120px]'>
      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {dataList.map((item) => (
            <CarouselItem key={item.id} className='md:basis-1/2 lg:basis-1/3'>
              <Card
                className='bg-cover bg-bottom bg-no-repeat  '
                style={{ backgroundImage: `url(${background})` }}
              >
                <CardContent className='flex items-center justify-between  aspect-[3/1]  text-white p-8'>
                  <div className='flex flex-col gap-2'>
                    <p className=' uppercase text-color-2 text-xs font-black'>
                      {item.desc ? item.desc : 'Welcome fresheat'}
                    </p>
                    <p className=' text-2xl uppercase font-black'>
                      {item.name}
                    </p>
                    <p className='text-xs text-color-3 font-black'>
                      Limits Time Offer
                    </p>
                    <div className='pt-4'>
                      <ButtonOrder />
                    </div>
                  </div>
                  <div className='relative w-[30%] h-full'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className='object-contain'
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default TimeOfferFood
