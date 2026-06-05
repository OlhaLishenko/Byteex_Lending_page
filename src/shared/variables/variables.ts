import { Benefits } from '../types/Benefits';
import { Features } from '../types/Features';

export const headerTitleDesktop =
  // eslint-disable-next-line max-len
  'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)   |   FREE SHIPPING on orders > $200   |   easy 45 day return window.';
export const headerTitleMobile = 'FREE SHIPPING on orders > $200';
export const aboutComponentText = `Hi! My name’s [Insert Name], and I founded [Insert] in ____.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
          sapien facilisis tincidunt pellentesque. In eget ipsum et felis
          finibus consequat. Fusce non nibh luctus, dignissim risus quis,
          bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis
          varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque
          est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales. Fusce
          non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien
          eget lobortis fringilla, eros ipsum tristique tellus, ac convallis
          urna massa at nibh. Duis non fermentum augue. Vivamus laoreet aliquam
          risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat
          aliquam nec in sapien. Cras mattis varius mollis.`;

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

export const benefinsContent: Benefits[] = [
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

export const reviewText = 'One of 500+ 5 Star Reviews Online';
