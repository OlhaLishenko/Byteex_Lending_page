import { IconContent } from '../types/IconContent';
import { Features } from '../types/Features';
import { OrderContent } from '../types/OrderContent';
import { icons, images } from './images';
import { Review } from '../types/Review';
import { InfoBannerContent } from '../types/InfoBannerContent';

export const sectionText = {
  headerTitle: {
    mobile: 'FREE SHIPPING on orders > $200',
    desktop: `CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)   |   FREE SHIPPING on orders > $200   |   easy 45 day return window.`,
  },
  reviewText: 'One of 500+ 5 Star Reviews Online',
  userReviewsText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.`,
  footerText: {
    mobile: `Click below to browse our collection!`,
    desktop: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.`,
  },
};

export const features: Features[] = [
  {
    icon: '/img/icon_sun.png',
    title: 'Beautiful, comfortable loungewear for day or night.',
  },
  {
    icon: '/img/icon_cart.png',
    title: 'No wasteful extras, like tags or plastic packaging.',
  },
  {
    icon: '/img/icon_wave.png',
    title:
      // eslint-disable-next-line max-len
      'Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.',
  },
];

export const logos = [
  { src: '/img/Artboard1.png', alt: 'image1' },
  { src: '/img/Artboard2.png', alt: 'image2' },
  { src: '/img/Artboard3.png', alt: 'image3' },
  { src: '/img/Artboard4.png', alt: 'image4' },
  { src: '/img/Artboard5.png', alt: 'image5' },
];

export const benefinsContent: IconContent[] = [
  {
    icon: '/img/icon_cloud.png',
    title: 'Ethically sourced.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
    tincidunt pellentesque.In eget ipsum et felis finibus consequat.`,
  },
  {
    icon: '/img/icon_sun.png',
    title: 'Responsibly made.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
    tincidunt pellentesque. In eget ipsum et felis finibus consequat.`,
  },
  {
    icon: '/img/icon_nature.png',
    title: 'Made for living in.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien
    facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.`,
  },
  {
    icon: '/img/icon_wave.png',
    title: 'Unimaginably comfortable.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien
    facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. `,
  },
];

export const orderContent: OrderContent[] = [
  {
    icon: 'img/order_icon1.png',
    title: 'You save.',
    text: 'Browse our comfort sets and save 15% when you bundle.',
    color: '#f0eeef',
  },
  {
    icon: 'img/order_icon2.png',
    title: 'We ship.',
    text: 'We ship your items within 1-2 days of receiving your order.',
    color: '#f9f0e6',
  },
  {
    icon: 'img/order_icon3.png',
    title: 'You enjoy!',
    text: 'Wear hernest around the house, out on the town, or in bed.',
    color: '#f0eeef',
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    icon: images.reviewImageDefault,
    name: 'Jane, S.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.`,
  },
  {
    id: 2,
    icon: images.reviewImageDefault,
    name: 'Mile, R.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.`,
  },
  {
    id: 3,
    icon: images.reviewImageDefault,
    name: 'Jone, Y.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet.`,
  },
  {
    id: 4,
    icon: images.reviewImageDefault,
    name: 'Ann, L.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.`,
  },
];

export const sectionTitle = {
  questionBlock: 'frequently asked questions.',
  infoBanner: 'Our total green impact',
  footer: 'Find something you love.',
};

export const questionBlockContent = [
  {
    id: 1,
    title: 'lorem ipsum dolor sit amet',
    text: `Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. `,
  },
  {
    id: 2,
    title: 'lorem ipsum dolor sit amet',
    text: `Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. `,
  },
  {
    id: 3,
    title: 'lorem ipsum dolor sit amet',
    text: `Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. `,
  },
  {
    id: 4,
    title: 'lorem ipsum dolor sit amet',
    text: `Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. `,
  },
  {
    id: 5,
    title: 'lorem ipsum dolor sit amet',
    text: `Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. `,
  },
  {
    id: 6,
    title: 'lorem ipsum dolor sit amet',
    text: `Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. `,
  },
];

export const infoBannerContent: InfoBannerContent[] = [
  {
    icon: icons.infoBanner.icon1,
    title: '3,927 kg',
    text: 'of CO2 saved',
  },
  {
    icon: icons.infoBanner.icon2,
    title: '2,546,167 days',
    text: 'of drinking water saved',
  },
  {
    icon: icons.infoBanner.icon3,
    title: '7,321 kWh',
    text: 'of energy saved',
  },
];
