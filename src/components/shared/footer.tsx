import { ChevronsRight, LocationEdit, MoveRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

type DataBot = {
  item1: {
    logo: string
    desc: string
    Socials: {
      Facebook: string
      Twitter: string
      Instagram: string
    }
  }
  item2: {
    title: string
    links: { id: number; name: string; to: string }[]
  }
  item3: {
    title: string
    links: { id: number; name: string; to: string }[]
  }
  item4: {
    title: string
    time: {
      Store: string
      Office: {
        MondayToFriday: string
        Saturday: string
      }
    }
  }
}

const dataTop = [
  {
    id: 1,
    key: 'Address',
    value: '4648 Rocky Road Philadelphia',
  },
  {
    id: 2,
    key: 'Send Email',
    value: 'info@exmple.com',
  },
  {
    id: 3,
    key: 'call emergency',
    value: '+88 0123 654 99',
  },
]

const dataBot: DataBot = {
  item1: {
    logo: 'https://gramentheme.com/html/fresheat/assets/img/logo/logoWhite.svg',
    desc: 'Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis',
    Socials: {
      Facebook: 'https://facebook.com/yourpage',
      Twitter: 'https://twitter.com/yourpage',
      Instagram: 'https://instagram.com/yourpage',
    },
  },
  item2: {
    title: 'Quick Links',
    links: [
      {
        id: 1,
        name: 'About Us',
        to: '/about-us',
      },
      {
        id: 2,
        name: 'Our Gallery',
        to: '/gallery',
      },
      {
        id: 3,
        name: 'Our Blogs',
        to: '/blogs',
      },
      {
        id: 4,
        name: "FAQ's",
        to: '/faq',
      },
      {
        id: 5,
        name: 'Contact Us',
        to: '/contact',
      },
    ],
  },
  item3: {
    title: 'Our Menu',
    links: [
      {
        id: 1,
        name: 'Burger King',
        to: '/burger-king',
      },
      {
        id: 2,
        name: 'Pizza King',
        to: '/pizza-king',
      },
      {
        id: 3,
        name: 'Fresh Food ',
        to: '/fresh-food',
      },
      {
        id: 4,
        name: 'Vegetable',
        to: '/vegetable',
      },
      {
        id: 5,
        name: 'Desserts',
        to: '/desserts',
      },
    ],
  },
  item4: {
    title: 'Contact Us',
    time: {
      Store: '09:00 AM - 06:00 PM',
      Office: {
        MondayToFriday: '08 AM - 04 PM',
        Saturday: '09 AM - 12 AM',
      },
    },
  },
}

const Footer = () => {
  return (
    <div className='bg-color-1  py-24 '>
      <div className='container mx-auto'>
        <div className='bg-color-3 p-12 rounded-2xl mb-10'>
          <ul className='flex  justify-between items-center'>
            {dataTop.map((item) => {
              return (
                <li
                  key={item.id}
                  className=' flex items-center gap-2 text-white'
                >
                  <span className=' bg-white rounded-full w-10 h-10 flex justify-center items-center '>
                    <LocationEdit className='text-color-3' size={18} />
                  </span>

                  <div>
                    <p className=' text-sm font-medium'>{item.key}</p>
                    <p className='text-xl font-medium'>{item.value}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='text-white flex justify-between'>
          {Object.entries(dataBot).map(([key, value]) => {
            return (
              <li key={key}>
                {key === 'item1' && 'logo' in value && (
                  <div className='flex flex-col gap-8 max-w-xs'>
                    <div className='relative w-40 h-14'>
                      <Image fill src={value.logo} alt='logo' />
                    </div>
                    <p className='text-base'>{value.desc}</p>
                    <div className='flex gap-3'>
                      <a href={value.Socials.Facebook} target='_blank'>
                        Facebook
                      </a>
                      <a href={value.Socials.Twitter} target='_blank'>
                        Twitter
                      </a>
                      <a href={value.Socials.Instagram} target='_blank'>
                        Instagram
                      </a>
                    </div>
                  </div>
                )}

                {(key === 'item2' || key === 'item3') &&
                  'title' in value &&
                  'links' in value && (
                    <div className='flex flex-col'>
                      <p className='text-2xl pb-5 font-bold title-footer'>
                        {value.title}
                      </p>
                      <ul className='flex flex-col gap-5 mt-[30px]'>
                        {value.links.map((link) => (
                          <li key={link.id}>
                            <a
                              href={link.to}
                              className='hover:underline font-medium flex'
                            >
                              <span className='mr-1'>
                                <ChevronsRight />
                              </span>
                              <span>{link.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {key === 'item4' && (
                  <div className='flex flex-col'>
                    <p className='text-2xl pb-5 font-bold title-footer'>
                      {(value as DataBot['item4']).title}
                    </p>
                    <ul className='flex flex-col gap-5 mt-[30px] text-base font-medium'>
                      <li>
                        <span className='text-color-6'>Monday – Friday: </span>
                        <span className='text-color-3'>
                          {' '}
                          {
                            (value as DataBot['item4']).time.Office
                              .MondayToFriday
                          }
                        </span>
                      </li>
                      <li>
                        <span className='text-color-6'>Saturday: </span>
                        <span className='text-color-3'>
                          {' '}
                          {(value as DataBot['item4']).time.Office.Saturday}
                        </span>
                      </li>
                      <li className='bg-white rounded-[8px] px-4 py-2 '>
                        <div className='flex justify-center items-center'>
                          <input
                            className=' text-black outline-none  '
                            placeholder='Your email address'
                          />
                          <Button className='bg-color-3 h-11 hover:cursor-pointer hover:bg-color-3'>
                            <MoveRight />
                          </Button>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Footer
