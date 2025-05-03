'use server'

import { ReactNode } from 'react'
import Header from '../shared/header/header'
import { getSettings } from '@/apis/query'
import Settings from './settings'
import MediaQueryContext from './mediaQuery'

const Layout = async ({ children }: { children: ReactNode }) => {
  const data = await getSettings()

  return (
    <MediaQueryContext>
      <Settings Data={data}>
        <Header />
        {children}
      </Settings>
    </MediaQueryContext>
  )
}

export default Layout
