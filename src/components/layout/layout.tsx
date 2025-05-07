'use server'

import { ReactNode } from 'react'
import Header from '../shared/header/header'

import Settings from './settings'
import MediaQueryContext from './mediaQuery'
import { getSetting } from '@/lib/query'

const Layout = async ({ children }: { children: ReactNode }) => {
  const data = await getSetting()

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
