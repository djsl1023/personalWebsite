import styles from './styleModules/titleBar.module.css';

const TitleBar = (props) => {
  return <div className={styles.titleBarContainer}>{props.title}</div>;
};

export default TitleBar;
