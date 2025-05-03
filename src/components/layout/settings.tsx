'use client'
import { setDataSetting } from '@/store/settings'
import { SettingDataType } from '@/types/settings'
import { ReactNode, useEffect } from 'react'

interface SettingsProps {
  children: ReactNode
  Data: SettingDataType
}

const Settings = ({ children, Data }: SettingsProps) => {
  setDataSetting(Data)

  useEffect(() => {
    if (Data) {
      setDataSetting(Data)
    }
  }, [Data])

  return <>{children}</>
}

export default Settings
