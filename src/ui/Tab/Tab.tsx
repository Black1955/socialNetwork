import { FC } from "react";
import styles from "./Tab.module.scss";
import { ITub } from "./ITub";
const Tab: FC<ITub> = ({ text, name, value, onChange }) => {
  return (
    <label className={styles.tab}>
      <input
        type='radio'
        className={styles.radio}
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <div className={styles.text}>{text}</div>
      <span className={styles.line}></span>
    </label>
  );
};

export default Tab;
