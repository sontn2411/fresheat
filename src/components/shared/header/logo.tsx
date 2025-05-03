import { logo } from '@/assets/index'
import Image from 'next/image'

const Logo = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <div className={`${isMobile ? 'py-4' : 'py-8 pl-4 pr-10  '}`}>
      <Image src={logo} alt='Logo' />
    </div>
  )
}

export default Logo
