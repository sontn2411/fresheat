import { getHomeData } from '@/apis/query'
import AboutUs from '@/components/shared/home/aboutUs'
import Banner from '@/components/shared/home/banner'
import BestFood from '@/components/shared/home/bestFood'
import BestSelling from '@/components/shared/home/bestSelling'
import TimeOfferFood from '@/components/shared/home/timeOfferFood'

export default async function Home() {
  const data = await getHomeData()

  const {
    Banner: dataBanner,
    BgBanner,
    BestFood: dataBestFood,
    TimeOfferFood: dataTimeOfferFood,
    SectionAboutUs: dataAboutUs,
    BestSelling: dataBestSelling,
  } = data

  return (
    <>
      {dataBanner && <Banner data={dataBanner} BgBanner={BgBanner} />}
      {dataBestFood && <BestFood data={dataBestFood} />}
      {dataTimeOfferFood && <TimeOfferFood data={dataTimeOfferFood} />}
      {dataAboutUs && <AboutUs data={dataAboutUs} />}
      {dataBestSelling && <BestSelling data={dataBestSelling} />}
    </>
  )
}
