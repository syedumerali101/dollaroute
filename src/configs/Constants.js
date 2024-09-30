import Images from '../theme/Images';
import en from '../translations/en.json';

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
