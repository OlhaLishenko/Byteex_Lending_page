import BtnCustomize from '../../shared/components/BtnCustomize/BtnCustomize';
import TextTitle from '../../shared/components/TextTitle/TextTitle';
import { useIsDesktop } from '../../shared/hooks/useIsDesktop';
import { images } from '../../shared/variables/images';
import { sectionTitle } from '../../shared/variables/variables';
import * as styles from './About.module.scss';

export const TextAbout = () => {
  return (
    <div className={styles.textAbout}>
      <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat.
      </p>
      <p>
        Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
        placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
        nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
        congue, faucibus libero nec, placerat ligula.
      </p>
      <p>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed eu nisl a metus ultrices sodales. Fusce non ante
        velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget
        lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa
        at nibh.
      </p>
      <p>
        Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo
        aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.
        Cras mattis varius mollis.
      </p>
    </div>
  );
};

export default function About() {
  const isDesktop = useIsDesktop();

  return (
    <div className={styles.about}>
      <TextTitle>{sectionTitle.about}</TextTitle>
      <div className={styles.about__image__container}>
        <img src={images.aboutSectionBg} className={styles.about__image} />
      </div>
      <div className={styles.about__text}>
        <TextAbout />
      </div>
      {isDesktop && (
        <div className={styles.about__btn}>
          <BtnCustomize />
        </div>
      )}
    </div>
  );
}
