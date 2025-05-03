'use client'
import TitleSection from '../titleSection'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

interface BestFoodProps {
  data: {
    id: number
    name: string
    image: string
    desc: string
    price: number
  }[]
}

const BestFood = ({ data }: BestFoodProps) => {
  return (
    <div className='bg-color-5 py-[120px]'>
      <div className='flex flex-col justify-center items-center'>
        <TitleSection text='best food' />
        <p className=' text-[40px] font-black'>Popular Food Items</p>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className='w-full max-w-[1084px] pt-4'
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
                <Card className='bg-transparent border-none shadow-none relative'>
                  <CardContent className=' mt-[80px] p-[24px_25px_30px] rounded-[16px] text-center bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,#FFF_63.33%)]'>
                    <div className='w-full h-[140px] absolute top-0 left-0 flex justify-center items-center '>
                      <div className='relative w-34 h-34'>
                        <div className='absolute inset-0 rounded-full border-2 border-dashed border-color-2 animate-spin-slow z-0'></div>
                        <div className='relative w-full h-full rounded-full overflow-hidden z-10'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className='object-contain rounded-full p-1'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='text-center mt-[60px]'>
                      <p className='text-[20px] font-bold'>{item.name}</p>
                      <p className='font-normal text-color-6'>{item.desc}</p>
                      <p className='text-[18px] font-bold text-color-2'>
                        {item.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default BestFood
