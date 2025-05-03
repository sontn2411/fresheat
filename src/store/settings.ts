import { SettingDataType } from '@/types/settings'
import { Store } from '@tanstack/react-store'

const useSettingStore = new Store<SettingDataType>({
  Logo: '',
  Time: {
    Store: '',
    Office: {
      MondayToFriday: '',
      Saturday: '',
    },
  },
  Socials: {
    Facebook: '',
    Twitter: '',
    Instagram: '',
  },
})

const setDataSetting = (data: SettingDataType) => {
  useSettingStore.setState((state) => ({
    ...state,
    ...data,
  }))
}

export { setDataSetting }

export default useSettingStore
