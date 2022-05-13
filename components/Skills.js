import TitleBar from './TitleBar';
import styles from './styleModules/skills.module.css';
import Image from 'next/image';
import SingleSkill from './SingleSkill';
const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <TitleBar title="Technical Skills" />

      <div className={styles.skillsParent}>
        <div className={styles.skillsColumn}>
          <SingleSkill skill="html5" />
          <SingleSkill skill="css3" />
          <SingleSkill skill="javascript" />
          <SingleSkill skill="react" />
          <SingleSkill skill="postgresql" />
        </div>
        <div className={styles.skillsColumn}>
          <SingleSkill skill="mocha" />
          <SingleSkill skill="typescript" />
          <SingleSkill skill="solidity" />
          <SingleSkill skill="firebase" />
          <SingleSkill skill="google" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
