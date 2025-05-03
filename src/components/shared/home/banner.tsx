'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import IconUI from '@/components/ui/iconUi'
import Autoplay from 'embla-carousel-autoplay'

interface BannerProps {
  data: {
    id: number
    name: string
    imageUrl: string
  }[]
  BgBanner: string
}

const Banner = ({ data, BgBanner }: BannerProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const updateIndex = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    updateIndex()
    api.on('select', updateIndex)
  }, [api, currentIndex])

  const handleNext = () => {
    if (api) api.scrollNext()
  }

  const handlePrev = () => {
    if (api) api.scrollPrev()
  }

  return (
    <Carousel
      setApi={setApi}
      className='h-[calc(100vh-114px)] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${BgBanner})` }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent className='h-full'>
        {data.map((item, index) => (
          <CarouselItem
            key={item.id}
            className='flex justify-between items-center'
          >
            <div className='w-full px-10'>
              <div className='flex flex-col'>
                {currentIndex === index && (
                  <>
                    <motion.p
                      initial={{ x: '100vw' }}
                      animate={{ x: 0 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                      className='font-bold uppercase text-xl text-color-3'
                    >
                      Welcome Fresheat
                    </motion.p>
                    <motion.h2
                      initial={{ x: '100vw' }}
                      animate={{ x: 0 }}
                      transition={{
                        duration: 1.2,
                        ease: 'easeOut',
                        delay: 0.5,
                      }}
                      className='text-white text-8xl font-bold uppercase'
                    >
                      {item.name}
                    </motion.h2>
                  </>
                )}
              </div>
            </div>

            <div className='relative w-full h-full flex overflow-hidden'>
              {currentIndex === index && (
                <motion.div
                  initial={{ x: '100vw' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100vw' }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                  className='relative w-[80%] h-full'
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className='object-contain'
                  />
                </motion.div>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=' absolute bottom-10 left-20 flex items-center gap-2 text-white z-20'>
        <button onClick={handlePrev} className=' cursor-pointer'>
          <IconUI icon='arrow' className='w-10 h-10 rotate-135' />
        </button>
        <div className='flex gap-1 items-end'>
          {data.map((item, index) => {
            return (
              <span
                onClick={() => {
                  if (api) api.scrollTo(index)
                }}
                className={`font-bold text-color-4 cursor-pointer ${
                  index === currentIndex ? 'text-white text-xl' : ''
                }`}
                key={item.id}
              >
                {index + 1}
              </span>
            )
          })}
        </div>
        <button onClick={handleNext}>
          <IconUI icon='arrow' className='w-10 h-10 rotate-45 cursor-pointer' />
        </button>
      </div>
    </Carousel>
  )
}

export default Banner
