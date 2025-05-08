import { logo } from '@/assets/index'
import Image from 'next/image'

const Logo = ({ isMobile, src }: { isMobile?: boolean; src?: string }) => {
  return (
    <div className={`${isMobile ? 'py-4' : 'py-8 pl-4 pr-10  '}`}>
      <Image src={src || logo} alt='Logo' />
    </div>
  )
}

export default Logo
