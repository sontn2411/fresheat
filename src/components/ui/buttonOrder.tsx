import { ArrowRight } from 'lucide-react'
import { Button } from './button'

interface ButtonOrderProps {
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'xl'
}

const ButtonOrder = ({ size }: ButtonOrderProps) => {
  return (
    <Button
      size={size || 'xl'}
      className=' rounded-none bg-color-2  uppercase font-medium cursor-pointer border-2 border-color-2 hover:bg-color-1'
    >
      <span className=' text-sm font-normal'> Order Now</span>
      <ArrowRight className='!w-5 !h-5' />
    </Button>
  )
}

export default ButtonOrder
