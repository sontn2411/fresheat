const LoadingGlobal = ({ isExiting }: { isExiting: boolean }) => {
  return (
    <div className={`relative ${isExiting ? 'loaded' : ''}`}>
      <div className='  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] flex flex-col justify-center items-center animationPreloader'>
        <div className='spinner'></div>
      </div>
      <div className='bgLoader'>
        <div className='flex h-screen '>
          <div className='w-1/4  loaderSection '>
            <div className='bg'></div>
          </div>
          <div className='w-1/4  loaderSection '>
            <div className='bg'></div>
          </div>
          <div className='w-1/4  loaderSection '>
            <div className='bg'></div>
          </div>
          <div className='w-1/4  loaderSection '>
            <div className='bg'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingGlobal
