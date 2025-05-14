'use client'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useStore } from '@tanstack/react-store'
import useLoadingStore from '@/store/loading'
import LoadingGlobal from '@/components/shared/loadingGlobal'

const dataMenu = [
  {
    Id: 1,
    Name: 'Dashboard',
    To: '/admin',
    Sub: null,
  },
  {
    Id: 2,
    Name: 'Settings',
    To: '/admin/settings/home',
    Sub: [
      {
        Id: 1,
        Name: 'Home',
        To: '/admin/settings/home',
      },
    ],
  },
  {
    Id: 3,
    Name: 'Images',
    To: '/admin/images',
  },
]

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const [isSubMenu, setIsSubMenu] = useState<number | null>(null)
  const { isLoader } = useStore(useLoadingStore)

  return (
    <div className='bg-color-8 min-h-screen'>
      {isLoader && (
        <div className=' fixed inset-0 bg-color-1 z-50'>
          <LoadingGlobal isExiting={false} />
        </div>
      )}
      <div className='p-4'>
        <div className='flex justify-between items-center py-2 px-4  bg-color-1 text-white rounded-lg  min-h-20'>
          <h1>Admin Page</h1>
          <ul className='flex items-center gap-4'>
            {dataMenu.map((item, index) => {
              return (
                <li
                  className={`px-4 py-1 font-medium rounded-lg relative ${
                    item.To === pathname ? 'bg-[#2d384b]  ' : 'text-color-4'
                  } hover:bg-[#2d384b] hover:text-white `}
                  key={item.Id}
                  onMouseEnter={() => setIsSubMenu(index)}
                  onMouseLeave={() => setIsSubMenu(null)}
                >
                  <Link href={item.To}>{item.Name}</Link>

                  {isSubMenu === index && item.Sub && (
                    <div className=' absolute left-0  inset-full min-h-10 bg-white text-black w-full rounded-lg'>
                      <ul className='p-2 flex items-center'>
                        {item.Sub.map((sub) => {
                          return (
                            <li key={sub.Id} className='hover:cursor-pointer'>
                              <Link href={sub.To}>{sub.Name}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
          <div>
            <h2>User</h2>
          </div>
        </div>
        <div className='pt-6'>{children}</div>
      </div>
    </div>
  )
}

export default LayoutAdmin
