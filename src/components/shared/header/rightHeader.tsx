'use client'

import IconUI from '@/components/ui/iconUi'

import useSettingStore from '@/store/settings'
import { useStore } from '@tanstack/react-store'
import { Clock } from 'lucide-react'
import ActionMenu from './actionMenu'
import useMediaQueryStore from '@/store/mediaQuery'

const RightHeader = ({ isMobile }: { isMobile?: boolean }) => {
  const { isLaptop, isDesktop } = useStore(useMediaQueryStore)
  const { Time, Socials } = useStore(useSettingStore)

  return isMobile ? (
    <>
      <div>Menu</div>
      <div>
        <ActionMenu />
      </div>
    </>
  ) : (
    <div
      className='flex flex-col w-full text-white   '
      style={{
        clipPath: isDesktop
          ? 'none'
          : 'polygon(3% 0, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      {!isLaptop && (
        <div className='bg-color-2  px-14 '>
          <div className='flex justify-between items-center h-12'>
            <div className='flex gap-2 items-center'>
              <Clock size={16} strokeWidth={3} />
              <span>{Time.Store}</span>
            </div>
            <div className='flex '>
              <span>Follow Us :</span>
              <ul className='flex gap-2 ml-2 items-center'>
                {Object.entries(Socials).map(([key, value]) => (
                  <li key={key} className='inline-block'>
                    <a href={value} target='_blank' rel='noopener noreferrer'>
                      <IconUI icon={key} className='w-[18px] h-[18px]' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className={` h-full px-14 ${isLaptop ? '' : 'bg-color-1'}`}>
        <div className='flex justify-between items-center h-full'>
          <div>Menu </div>

          <div>
            <ActionMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightHeader
