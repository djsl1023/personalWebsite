import Image from 'next/image';
import styles from './styleModules/singleSkill.module.css';
const SingleSkill = (props) => {
  return (
    <div className={styles.singleSkillContainer}>
      <Image
        src={`/images/skillsImages/${props.skill}.svg`}
        height={100}
        width={100}
        alt={`${props.skill}`}
      />
      =================
    </div>
  );
};

export default SingleSkill;
