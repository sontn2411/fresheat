'use server'
import { getHomeData, getSettingSection } from '@/lib/query'
import ContentPage from './ContentPage'

const HomeSetting = async () => {
  const settingSection = await getSettingSection()
  const data = await getHomeData()
  return <ContentPage dataHome={data} settingSection={settingSection} />
}

export default HomeSetting
