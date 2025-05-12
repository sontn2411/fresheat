import Layout from '@/components/layout/layout'
import AboutUs from '@/components/shared/home/aboutUs'
import Banner from '@/components/shared/home/banner'
import BestFood from '@/components/shared/home/bestFood'
import BestSelling from '@/components/shared/home/bestSelling'
import FoodMenu from '@/components/shared/home/foodmenu'
import TimeOfferFood from '@/components/shared/home/timeOfferFood'
import { getHomeData, getSettingSection } from '@/lib/query'
import React from 'react'

export default async function Home() {
  const data = await getHomeData()
  const sectionIndex = await getSettingSection()

  const {
    Banner: dataBanner,
    BgBanner,
    BestFood: dataBestFood,
    TimeOfferFood: dataTimeOfferFood,
    SectionAboutUs: dataAboutUs,
    BestSelling: dataBestSelling,
  } = data

  return (
    <Layout>
      {dataBanner && <Banner data={dataBanner} BgBanner={BgBanner} />}
      {sectionIndex.map((item) => (
        <React.Fragment key={item.id}>
          {item.name == 'BestFood' && <BestFood data={dataBestFood} />}
          {item.name == 'TimeOfferFood' && (
            <TimeOfferFood data={dataTimeOfferFood} />
          )}
          {item.name == 'AboutUs' && <AboutUs data={dataAboutUs} />}
          {item.name == 'BestSelling' && <BestSelling data={dataBestSelling} />}
          {item.name == 'FoodMenu' && <FoodMenu />}
        </React.Fragment>
      ))}
    </Layout>
  )
}
