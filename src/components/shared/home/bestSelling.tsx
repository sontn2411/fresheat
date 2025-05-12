'use client'

import TitleSection from '../titleSection'
import BestSellingItem from './bestSellingItem'

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
          {data.map((item, index) => (
            <BestSellingItem key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestSelling
