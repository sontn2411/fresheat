'use client'
import useMediaQueryStore from '@/store/mediaQuery'
import Logo from './logo'
import RightHeader from './rightHeader'
import { useStore } from '@tanstack/react-store'
import useWindowScroll from '@/hook/useWindowScroll'

const Header = () => {
  const { isLaptop } = useStore(useMediaQueryStore)
  const { y } = useWindowScroll()

  return y > 0 || isLaptop ? (
    <div className='fixed w-full z-10 bg-white  fade-in-down'>
      <div className='container mx-auto relative '>
        <div className='flex justify-between items-center'>
          <Logo isMobile />
          <RightHeader isMobile />
        </div>
      </div>
    </div>
  ) : (
    <div className='relative w-full'>
      <div className='absolute top-0 left-0 w-full h-full  flex'>
        <div className='bg-white h-full w-1/2'></div>
        <div className='h-full w-1/2 flex flex-col'>
          {!isLaptop && (
            <>
              <div className='bg-color-2 h-12'></div>
              <div className='bg-color-1 flex-grow'></div>
            </>
          )}
        </div>
      </div>
      <div className='container mx-auto relative z-20'>
        <div className='flex'>
          <Logo />
          <RightHeader />
        </div>
      </div>
    </div>
  )
}

export default Header
