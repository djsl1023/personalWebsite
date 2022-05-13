import TitleBar from './TitleBar';
import styles from './styleModules/aboutMe.module.css';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className={styles.aboutContainer}>
      <TitleBar title="About Me" />
      <div className={styles.aboutDetails}>
        <div>
          <Image
            src="/images/profilePic.png"
            height={400}
            width={400}
            alt="Daniel Lee"
          />
        </div>
        <div className={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
