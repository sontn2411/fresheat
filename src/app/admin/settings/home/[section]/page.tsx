import ContentPage from './ContentPage'

const SectionSetting = async ({
  params,
}: {
  params: Promise<{ section: string }>
}) => {
  const { section } = await params

  return (
    <div>
      {/* <Link href={ROUTES.SETTINGS.HOME.ROOT} className='flex gap-2'>
        <ArrowLeft />
        <span>{sectionName.replace(/([a-z])([A-Z])/g, '$1 $2')}</span>
      </Link> */}

      <ContentPage section={section} />
    </div>
  )
}

export default SectionSetting
