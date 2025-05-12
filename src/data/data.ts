const settingData = {
  Logo: '/assets/logo.svg',
  Time: {
    Store: '09:00 AM - 06:00 PM',
    Office: {
      MondayToFriday: '08 AM - 04 PM',
      Saturday: '09 AM - 12 AM',
    },
  },
  Socials: {
    Facebook: 'https://facebook.com/yourpage',
    Twitter: 'https://twitter.com/yourpage',
    Instagram: 'https://instagram.com/yourpage',
  },

  Footer: {
    Top: [
      {
        Id: 1,
        Key: 'Address',
        Value: '4648 Rocky Road Philadelphia',
      },
      {
        Id: 2,
        Key: 'Send Email',
        Value: 'info@exmple.com',
      },
      {
        Id: 3,
        Key: 'call emergency',
        Value: '+88 0123 654 99',
      },
    ],
    Bot: {
      Item1: {
        Logo: 'https://gramentheme.com/html/fresheat/assets/img/logo/logoWhite.svg',
        Desc: 'Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis',
        Socials: {
          Facebook: 'https://facebook.com/yourpage',
          Twitter: 'https://twitter.com/yourpage',
          Instagram: 'https://instagram.com/yourpage',
        },
      },
      Item2: {
        Title: 'Quick Links',
        Links: [
          {
            Id: 1,
            Name: 'About Us',
            To: '/about-us',
          },
          {
            Id: 2,
            Name: 'Our Gallery',
            To: '/gallery',
          },
          {
            Id: 3,
            Name: 'Our Blogs',
            To: '/blogs',
          },
          {
            Id: 4,
            Name: "FAQ's",
            To: '/faq',
          },
          {
            Id: 5,
            Name: 'Contact Us',
            To: '/contact',
          },
        ],
      },
      Item3: {
        Title: 'Our Menu',
        Links: [
          {
            Id: 1,
            Name: 'Burger King',
            To: '/burger-king',
          },
          {
            Id: 2,
            Name: 'Pizza King',
            To: '/pizza-king',
          },
          {
            Id: 3,
            Name: 'Fresh Food ',
            To: '/fresh-food',
          },
          {
            Id: 4,
            Name: 'Vegetable',
            To: '/vegetable',
          },
          {
            Id: 5,
            Name: 'Desserts',
            To: '/desserts',
          },
        ],
      },
      Item4: {
        Title: 'Contact Us',
        Time: {
          Store: '09:00 AM - 06:00 PM',
          Office: {
            MondayToFriday: '08 AM - 04 PM',
            Saturday: '09 AM - 12 AM',
          },
        },
      },
    },
  },
}

export { settingData }
