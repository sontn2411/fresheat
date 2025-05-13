/* eslint-disable @next/next/no-img-element */
import TitleSection from '../titleSection'

const data = [
  {
    Id: 1,
    Name: 'Ralpha Edwards',
    Image:
      'https://i.pinimg.com/736x/5f/9c/91/5f9c91fc2df3edb394de5aa2dd51e408.jpg',
    desc: 'Chef Assistant',
  },

  {
    Id: 2,
    Name: 'Leslie Alexander',
    Image:
      'https://i.pinimg.com/736x/5f/9c/91/5f9c91fc2df3edb394de5aa2dd51e408.jpg',

    desc: 'Chef Lead',
  },
  {
    Id: 3,
    Name: 'Leslie Alexander',
    Image:
      'https://i.pinimg.com/736x/5f/9c/91/5f9c91fc2df3edb394de5aa2dd51e408.jpg',
    desc: 'Chef Assistant',
  },
]

const OurChefe = () => {
  return (
    <div className='bg-color-5 py-[120px]'>
      <div className='flex flex-col justify-center items-center'>
        <TitleSection text='Our chefe' />
        <p className='text-[40px] font-black'>Meet Our Expert Chefe</p>
      </div>
      <div className=' w-full max-w-[1084px] pt-4 mx-auto'>
        <ul className='flex  justify-between gap-20'>
          {data.map((item) => {
            return (
              <li key={item.Id} className=' relative'>
                <div className='relative w-full rounded-xl overflow-hidden'>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className=' object-cover w-full'
                  />
                </div>
                <div className='absolute -bottom-10 left-1/2 w-[80%] -translate-x-1/2'>
                  <div className=' flex flex-col gap-4 bg-white w-full text-center py-4 rounded-tl-4xl rounded-br-4xl shadow-xl/20'>
                    <p className='font-bold text-xl'>{item.Name}</p>
                    <p className='text-color-6 font-medium'>{item.desc}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default OurChefe
