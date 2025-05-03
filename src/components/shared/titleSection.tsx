import IconUI from '../ui/iconUi'

const TitleSection = ({ text }: { text: string }) => {
  return (
    <div className=' flex gap-2'>
      <IconUI icon='cookies' />
      <p className=' uppercase text-color-3 font-bold '>{text}</p>
      <IconUI icon='cookies' />
    </div>
  )
}

export default TitleSection
