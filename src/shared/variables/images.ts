import usersDesktop from '/img/usersBgDesktop.jpg';
import users from '/img/userBg.png';
import reviewImg from '/img/review-comp.png';
import add from '/img/+.svg';
import close from '/img/-.svg';
import questionBg from '/img/questionImg.png';
import infoBanner1 from '/img/infoBanner_icon1.png';
import infoBanner2 from '/img/infoBanner_icon2.png';
import infoBanner3 from '/img/infoBanner_icon3.png';
import footerImg from '/img/footerImg.png';
import mainBgBig from '/img/bgSliderDesktop.png';
import mainBgSmall from '/img/bgSlider.png';
import bgFooter from '/img/bgSliderFooter.png';
import payment from '/img/payment_icons.png';
import iconClock from '/img/icon_clock.svg';
import footerIconCar from '/img/footer_icon1.png';
import footerIconTick from '/img/footer_icon2.png';
import footerIconCart from '/img/footer_icon3.png';

export const images = {
  userReviewsBg: {
    desktop: usersDesktop,
    mobile: users,
  },
  reviewImageDefault: reviewImg,
  questionBg: questionBg,
  footer: {
    img: footerImg,
    bg: bgFooter,
  },
  mainBg: {
    mobile: mainBgSmall,
    desktop: mainBgBig,
  },
};

export const icons = {
  iconAdd: add,
  iconClose: close,
  infoBanner: {
    icon1: infoBanner1,
    icon2: infoBanner2,
    icon3: infoBanner3,
  },
  iconPayment: payment,
  iconClock: iconClock,
  iconFooterCar: footerIconCar,
  iconFooterTick: footerIconTick,
  iconFooterCart: footerIconCart,
};
