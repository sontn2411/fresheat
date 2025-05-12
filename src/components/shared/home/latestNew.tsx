'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import TitleSection from '../titleSection'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { MoveUpRight, Tag, User } from 'lucide-react'

const data = [
  {
    Id: 1,
    Name: 'Tackling the Changes of Food Industry',
    Date: '15/10/2024',
    Category: 'Chicken',
    Image:
      'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    ByUser: 'Admin',
  },
  {
    Id: 2,
    Name: 'Tackling the Changes of Food Industry',
    Date: '15/10/2024',
    Category: 'Chicken',
    Image:
      'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    ByUser: 'Admin',
  },
  {
    Id: 3,
    Name: 'Tackling the Changes of Food Industry',
    Date: '15/10/2024',
    Category: 'Chicken',
    Image:
      'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    ByUser: 'Admin',
  },
  {
    Id: 4,
    Name: 'Tackling the Changes of Food Industry',
    Date: '15/10/2024',
    Category: 'Chicken',
    Image:
      'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    ByUser: 'Admin',
  },
  {
    Id: 5,
    Name: 'Tackling the Changes of Food Industry',
    Date: '15/10/2024',
    Category: 'Chicken',
    Image:
      'https://gramentheme.com/html/fresheat/assets/img/blog/blogThumb1_2.jpg',
    ByUser: 'Admin',
  },
]

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const LatestNew = () => {
  return (
    <div className=' bg-color-5 py-[120px]'>
      <div className='flex flex-col justify-center items-center'>
        <TitleSection text='LATEST NEWS' />
        <p className=' text-[40px] font-black'>Our Latest Foods News</p>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className='w-full max-w-[1084px] pt-4'
        >
          <CarouselContent>
            {data.map((item) => {
              const [day, month] = item.Date.split('/')

              const monthText = monthNames[parseInt(month, 10) - 1]

              return (
                <CarouselItem
                  className='md:basis-1/2 lg:basis-1/3'
                  key={item.Id}
                >
                  <Card className='overflow-hidden py-0 rounded-none'>
                    <CardContent className='p-0'>
                      <div className='relative w-full h-64'>
                        <Image
                          src={item.Image}
                          alt={item.Name}
                          fill
                          className='object-cover'
                        />
                      </div>
                      <div className='p-4 flex flex-col gap-4'>
                        <div className='flex items-center  justify-between'>
                          <div className='flex flex-col items-center gap-1  bg-color-2 text-white py-2 px-5'>
                            <span className='font-bold text-2xl'>{day}</span>
                            <span className='text-xs'>{monthText}</span>
                          </div>
                          <div className='flex gap-2 '>
                            <span>
                              <User className='text-color-2' />
                            </span>
                            <span className='text-sm font-medium text-color-6'>
                              By {item.ByUser}
                            </span>
                          </div>
                          <div className='flex gap-2'>
                            <span>
                              <Tag className='text-color-2' />
                            </span>
                            <span className='text-sm font-medium text-color-6'>
                              {item.Category}
                            </span>
                          </div>
                        </div>
                        <h1 className='mt-2 font-bold text-[22px]'>
                          {item.Name}
                        </h1>
                        <Link
                          href='#'
                          className='group font-medium text-color-6 flex items-center gap-2 text-base hover:text-color-2'
                        >
                          <span>Read More</span>
                          <span className='transition-transform duration-300 ease-in-out group-hover:rotate-45'>
                            <MoveUpRight size={18} strokeWidth={3} />
                          </span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default LatestNew
