import { FC, useState } from "react";
import Tab from "../../ui/Tab/Tab";
import { TbBellRinging2Filled } from "react-icons/tb";
import styles from "./ModalNotifications.module.scss";
import { IModal } from "./IModalNotifications";
const ModalNotifications: FC<IModal> = ({ show }) => {
  const [value, setValue] = useState("");
  const massages: string[] = [];
  return (
    <div className={`${styles.modal} ${show ? styles.active : ""}`}>
      <div className={styles.wrapper}>
        <div>Notifications</div>
        <div className={styles.tabs}>
          <Tab
            name='not'
            text='all'
            value='all'
            onChange={setValue}
            selectedValue={value}
          />
          <Tab
            name='not'
            text='Unread'
            value='unread'
            onChange={setValue}
            selectedValue={value}
          />
        </div>
        <div className={styles.massage}>
          {massages.length ? (
            massages.map(massage => <div>{massage}</div>)
          ) : (
            <div>
              <TbBellRinging2Filled />
              <span>You have no notifications</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalNotifications;
