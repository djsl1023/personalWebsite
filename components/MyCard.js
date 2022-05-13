import styles from './styleModules/myCard.module.css';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import Link from 'next/link';

const MyCard = () => {
  return (
    <Link href="/info">
      <a>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.name}>
              Daniel Lee <br /> Software Engineer
            </div>
            <div>
              <hr className={styles.separator} />
            </div>
            <div className={styles.links}>
              <span>
                <AiOutlineLinkedin color="#f6e27a" fontSize="1.5em" />{' '}
                /danieljs-lee
              </span>
              <br />
              <br />
              <span>
                <AiOutlineGithub color="#f6e27a" fontSize="1.5em" /> /djsl1023
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MyCard;
