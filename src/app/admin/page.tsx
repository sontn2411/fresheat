
import ContentPage from './contentPage'
import { getHomeData, getSettingSection } from '@/lib/query'

const AdminPage = async () => {
  const data = await getHomeData()
  const settingSection = await getSettingSection()

  return (
    <div>
      <ContentPage dataHome={data} settingSection={settingSection} />
    </div>
  )
}

export default AdminPage
