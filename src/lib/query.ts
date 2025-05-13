import { settingData } from '@/data/data'
import prisma from './prisma'

const getSettingSection = async () => {
  const data = await prisma.setting.findMany()

  return data.sort((a, b) => a.index - b.index)
}

const getHomeData = async () => {
  const data = {
    Banner: [
      {
        id: 1,
        name: 'SPICY FRIED CHICKEN',
        imageUrl:
          'https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_1.png',
      },
      {
        id: 2,
        name: 'chicago deep pizza king',
        imageUrl:
          'https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_2.png',
      },
      {
        id: 3,
        name: 'chicago deep burger king',
        imageUrl:
          'https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_3.png',
      },
    ],
    BgBanner:
      'https://gramentheme.com/html/fresheat/assets/img/bg/bannerBG1_1.jpg',

    BestFood: [
      {
        id: 1,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        image:
          'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png',
        price: 100.99,
      },
      {
        id: 2,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        image:
          'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png',
        price: 100.99,
      },
      {
        id: 3,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        image:
          'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png',
        price: 100.99,
      },
      {
        id: 4,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        image:
          'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png',
        price: 100.99,
      },
      {
        id: 5,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        image:
          'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png',
        price: 100.99,
      },
    ],

    TimeOfferFood: {
      background:
        'https://gramentheme.com/html/fresheat/assets/img/bg/offerBG1_1.jpg',
      data: [
        {
          id: 1,
          name: 'Spicy Fried Chicken',
          image:
            'https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_1.png',
          desc: 'On this week',
        },

        {
          id: 2,
          name: 'Spicy Fried Chicken',
          image:
            'https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_2.png',
          desc: '',
        },
        {
          id: 3,
          name: 'Spicy Fried Chicken',
          image:
            'https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_3.png',
          desc: 'On this week',
        },
      ],
    },
    SectionAboutUs: {
      title: 'Variety of flavours from american cuisine',
      desc: 'It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that',
    },
    BestSelling: [
      {
        id: 1,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        price: 100.99,
        image:
          'https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_5.png',
      },
      {
        id: 2,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        price: 100.99,
        image:
          'https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_5.png',
      },
      {
        id: 3,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        price: 100.99,
        image:
          'https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_5.png',
      },
      {
        id: 4,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        price: 100.99,
        image:
          'https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_5.png',
      },
      {
        id: 5,
        name: 'Chicken Fried Rice',
        desc: 'The Registration Fee',
        price: 100.99,
        image:
          'https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_5.png',
      },
    ],
  }

  return data
}

const getSetting = async () => {
  const data = settingData

  return data
}

export { getSettingSection, getHomeData, getSetting }
