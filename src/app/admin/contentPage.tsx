'use server'
import Link from 'next/link'

const dataMenu = [
  {
    Id: 1,
    Name: 'Dashboard',
    To: '/admin',
  },
  {
    Id: 2,
    Name: 'Settings',
    To: '/admin/settings',
  },
]

const ContentPage = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between py-2 px-4  bg-color-1 text-white rounded-xl'>
        <h1>Admin Page</h1>
        <ul className='flex gap-4'>
          {dataMenu.map((item) => {
            return (
              <li key={item.Id}>
                <Link href={item.To}>{item.Name}</Link>
              </li>
            )
          })}
        </ul>
        <div>
          <h2>User</h2>
        </div>
      </div>
    </div>
  )
}

export default ContentPage
