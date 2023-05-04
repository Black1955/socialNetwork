import { FC } from "react";
import styles from "./Tab.module.scss";
import { ITub } from "./ITub";
const Tab: FC<ITub> = ({ text, name, value, onChange, selectedValue }) => {
  return (
    <label className={styles.tab}>
      <input
        checked={selectedValue === value}
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
