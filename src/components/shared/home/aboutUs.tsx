'use client'
import ButtonOrder from '@/components/ui/buttonOrder'
import TitleSection from '../titleSection'

interface AboutUsProps {
  data: {
    title: string
    desc: string
  }
}

const AboutUs = ({ data }: AboutUsProps) => {
  return (
    <div className='bg-white py-[120px]'>
      <div className='flex flex-col justify-center items-center'>
        <TitleSection text='About us' />
        <div className='flex flex-col justify-center items-center text-center gap-4 w-full max-w-[575px] pt-4'>
          <p className='text-[40px] font-black leading-[50px] '>{data.title}</p>
          <p className='text-color-4'>{data.desc}</p>
          <div className='pt-6'>
            <ButtonOrder />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
