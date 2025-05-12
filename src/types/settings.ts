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
  Footer: Footer
}

export interface SettingSectionType {
  data: SettingSectionItem[]
}

export interface SettingSectionItem {
  id: number
  name: string
  index: number
}

export interface Footer {
  Top: DataTopItem[]
  Bot: DataBot
}

interface DataTopItem {
  Id: number
  Key: string
  Value: string
}

export interface DataBot {
  Item1: {
    Logo: string
    Desc: string
    Socials: {
      Facebook: string
      Twitter: string
      Instagram: string
    }
  }
  Item2: {
    Title: string
    Links: { Id: number; Name: string; To: string }[]
  }
  Item3: {
    Title: string
    Links: { Id: number; Name: string; To: string }[]
  }
  Item4: {
    Title: string
    Time: {
      Store: string
      Office: {
        MondayToFriday: string
        Saturday: string
      }
    }
  }
}
