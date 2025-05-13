'use client'
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
  Footer: {
    Top: [],
    Bot: {
      Item1: {
        Logo: '',
        Desc: '',
        Socials: {
          Facebook: '',
          Twitter: '',
          Instagram: '',
        },
      },
      Item2: {
        Title: '',
        Links: [],
      },
      Item3: {
        Title: '',
        Links: [],
      },
      Item4: {
        Title: '',
        Time: {
          Store: '',
          Office: {
            MondayToFriday: '',
            Saturday: '',
          },
        },
      },
    },
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
