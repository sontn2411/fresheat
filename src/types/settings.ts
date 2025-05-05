interface Time {
  Store: string
  Office: {
    MondayToFriday: string
    Saturday: string
  }
}

export interface SettingDataType {
  Time: Time
  Logo: string
  Socials: {
    Facebook: string
    Twitter: string
    Instagram: string
  }
}

export interface SettingSectionType {
  data: SettingSectionItem[]
}

export interface SettingSectionItem {
  id: number
  name: string
  index: number
}
