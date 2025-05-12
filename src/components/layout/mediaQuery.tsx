'use client'

import useMediaQuery from '@/hook/useMediaQuery'
import { setMediaqueryStore } from '@/store/mediaQuery'
import { ReactNode, useEffect, useState } from 'react'
import LoadingGlobal from '../shared/loadingGlobal'

const MediaQueryContext = ({ children }: { children: ReactNode }) => {
  const isDesktop = useMediaQuery('(max-width: 1600px)')
  const isLaptop = useMediaQuery('(max-width: 1200px)')
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDesktop !== null && isLaptop !== null) {
        setMediaqueryStore({ isDesktop, isLaptop })
        setIsExiting(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [isDesktop, isLaptop])

  // if (isLoading)
  //   return (
  // <div className='fixed inset-0 z-[1000]'>
  //   <LoadingGlobal isExiting={isExiting} />
  // </div>
  //   )

  return (
    <>
      {children}
      {isLoading && (
        <div className='fixed inset-0 z-[1000]'>
          <LoadingGlobal isExiting={isExiting} />
        </div>
      )}
    </>
  )
}

export default MediaQueryContext
