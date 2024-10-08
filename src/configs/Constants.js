import Images from '../theme/Images';
import en from '../translations/en.json';

export const verificationEmail = 'brajaoma*****@gmail.com';

export const onboarding_screens = () => [
  {
    id: 1,
    backgroundImage: Images.welcomeScreen.welcome1,
    title: en.welcomeScreens.welcomeTitle1,
    description: en.welcomeScreens.welcomeDesc1,
  },
  {
    id: 2,
    backgroundImage: Images.welcomeScreen.welcome2,
    title: en.welcomeScreens.welcomeTitle2,
    description: en.welcomeScreens.welcomeDesc2,
  },
  {
    id: 3,
    backgroundImage: Images.welcomeScreen.welcome3,
    title: en.welcomeScreens.welcomeTitle3,
    description: en.welcomeScreens.welcomeDesc3,
  },
];

export const bannerData = () => [
  {
    id: 1,
    type: 'Microphones',
    price: '$108.20',
    beforeDiscount: '$199.99',
    title: 'RØDE PodMic',
    description: 'Dynamic microphone, Speaker microphone',
    image: Images.dummy.bannerImage,
  },

  {
    id: 2,
    type: 'Microphones',
    price: '$108.20',
    beforeDiscount: '$199.99',
    title: 'RØDE PodMic',
    description: 'Dynamic microphone, Speaker microphone',
    image: Images.dummy.bannerImage,
  },

  {
    id: 3,
    type: 'Microphones',
    price: '$108.20',
    beforeDiscount: '$199.99',
    title: 'RØDE PodMic',
    description: 'Dynamic microphone, Speaker microphone',
    image: Images.dummy.bannerImage,
  },
];

export const featuredShops = () => [
  {
    id: 1,
    title: 'Starbucks',
    image: Images.dummy.starbucks,
  },

  {
    id: 2,
    title: 'McDonald',
    image: Images.dummy.mcdonalds,
  },

  {
    id: 3,
    title: 'Hermes',
    image: Images.dummy.hermes,
  },

  {
    id: 4,
    title: 'Burger King',
    image: Images.dummy.burgerKing,
  },

];

export const promoRewards = () => [
  {
    id: 1,
    image: Images.dummy.starbucksBanner,
    icon: Images.dummy.starbucks,
    title: 'Get Free 1 Cup Coffee E-Voucher ',
    points: '4,500 points',
    name: 'Starbucks',
  },

  {
    id: 2,
    image: Images.dummy.starbucksBanner,
    icon: Images.dummy.starbucks,
    title: 'Get Free 1 Cup Coffee E-Voucher ',
    points: '4,500 points',
    name: 'Starbucks',
  },

  {
    id: 3,
    image: Images.dummy.starbucksBanner,
    icon: Images.dummy.starbucks,
    title: 'Get Free 1 Cup Coffee E-Voucher ',
    points: '4,500 points',
    name: 'Starbucks',
  },

  {
    id: 4,
    image: Images.dummy.starbucksBanner,
    icon: Images.dummy.starbucks,
    title: 'Get Free 1 Cup Coffee E-Voucher ',
    points: '4,500 points',
    name: 'Starbucks',
  },
];

export const categoriesTags = () => [
  {
    id: 1,
    title: 'Electronics',
  },

  {
    id: 2,
    title: 'Clothing',
  },

  {
    id: 3,
    title: 'Groceries',
  },
  {
    id: 4,
    title: 'Travel',
  },

  {
    id: 5,
    title: 'Health & Beauty',
  },
];
