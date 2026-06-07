import { IconContent } from '../types/IconContent';
import { Features } from '../types/Features';
import { OrderContent } from '../types/OrderContent';
import { icons, images } from './images';
import { Review } from '../types/Review';
import { InfoBannerContent } from '../types/InfoBannerContent';
import { FooterTextContent } from '../types/FooterTextContent';
import { SliderImage } from '../types/SliderImage';

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
    paymentText: 'Ships in 1-2 Days',
  },
  reviewBlockText: {
    mobile: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.`,
    desktop: `Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.`,
  },
};

export const features: Features[] = [
  {
    icon: icons.listIcons.iconSun,
    title: 'Beautiful, comfortable loungewear for day or night.',
  },
  {
    icon: icons.listIcons.iconCart,
    title: 'No wasteful extras, like tags or plastic packaging.',
  },
  {
    icon: icons.listIcons.iconWave,
    title: `Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.`,
  },
];

export const logos = [
  { src: images.artboardImgs.artboard1, alt: 'image1' },
  { src: images.artboardImgs.artboard2, alt: 'image2' },
  { src: images.artboardImgs.artboard3, alt: 'image3' },
  { src: images.artboardImgs.artboard4, alt: 'image4' },
  { src: images.artboardImgs.artboard5, alt: 'image5' },
];

export const benefinsContent: IconContent[] = [
  {
    icon: icons.listIcons.iconCloud,
    title: 'Ethically sourced.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
    tincidunt pellentesque.In eget ipsum et felis finibus consequat.`,
  },
  {
    icon: icons.listIcons.iconSun,
    title: 'Responsibly made.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
    tincidunt pellentesque. In eget ipsum et felis finibus consequat.`,
  },
  {
    icon: icons.listIcons.iconNature,
    title: 'Made for living in.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien
    facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.`,
  },
  {
    icon: icons.listIcons.iconWave,
    title: 'Unimaginably comfortable.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien
    facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. `,
  },
];

export const orderContent: OrderContent[] = [
  {
    icon: icons.iconOrderList.orderIcon1,
    title: 'You save.',
    text: 'Browse our comfort sets and save 15% when you bundle.',
    color: '#f0eeef',
  },
  {
    icon: icons.iconOrderList.orderIcon2,
    title: 'We ship.',
    text: 'We ship your items within 1-2 days of receiving your order.',
    color: '#f9f0e6',
  },
  {
    icon: icons.iconOrderList.orderIcon3,
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
  heroSection: 'Don’t apologize for being comfortable.',
  about: 'Be your best self.',
  benefits: 'Loungewear you can be proud of.',
  orderBlock: 'Comfort made easy',
  userReview: 'What are our fans saying?',
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

export const footerListContent: FooterTextContent[] = [
  {
    id: 1,
    icon: icons.iconFooterCar,
    text: 'FREE Shipping on Orders over $200',
  },
  {
    id: 2,
    icon: icons.iconFooterTick,
    text: 'Over 500+ 5 Star Reviews Online',
  },
  {
    id: 3,
    icon: icons.iconFooterCart,
    text: 'Made ethically and responsibly.',
  },
];

export const productSliderContent: SliderImage[] = [
  { src: images.productSlider.product1, title: 'White Robe' },
  { src: images.productSlider.product2, title: 'Sleepwear white' },
  { src: images.productSlider.product3, title: 'Sleepwear white pink' },
  { src: images.productSlider.product4, title: 'Sleepwear dark' },
  { src: images.productSlider.product5, title: 'Sleepwear purple' },
  { src: images.productSlider.product6, title: 'Sleepwear yellow' },
];
