import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Eye, Heart, ShoppingBasket } from 'lucide-react'
import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'

interface BestSellingItemProps {
  id: number
  index: number
  image: string
  name: string
  desc: string
  price: number
}

const BestSellingItem = ({
  index,
  image,
  name,
  desc,
  price,
}: BestSellingItemProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.5 }}
      ref={ref}
    >
      <Card className="group relative max-w-[270px] w-full h-[350px] bg-white hover:cursor-pointer hover:bg-[url('https://gramentheme.com/html/fresheat/assets/img/bg/dishesThumbBG.png')] bg-cover bg-center transition-all duration-300">
        <CardContent className='group-hover:text-white transition-colors duration-300 flex flex-col justify-center gap-4  -center h-full'>
          <div className='relative w-34 h-34 rounded-full overflow-hidden border-2 border-color-1 pt-4'>
            <Image src={image} alt={name} fill className='object-cover' />
          </div>

          <div className='text-center w-full'>
            <p className='text-[20px] font-bold'>{name}</p>
            <p className=' group-hover:text-white font-normal text-color-6'>
              {desc}
            </p>
            <p className='group-hover:text-white text-[18px] font-bold text-color-2'>
              {price}
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
    </motion.div>
  )
}

export default BestSellingItem
