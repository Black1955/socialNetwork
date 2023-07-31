import { useState } from "react";
import { FC } from "react";
import { IInputMessages } from "./IInputMessages";
import styles from "./InputMessages.module.scss";
import { BsFillEmojiSmileFill, BsFillSendFill } from "react-icons/bs";

const InputMessages: FC<IInputMessages> = ({ ...rest }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.preInput}>
          <BsFillEmojiSmileFill style={{ marginRight: "7px" }} />
          <span>|</span>
        </div>

        <input
          {...rest}
          className={styles.input}
          type='text'
          onChange={e => setValue(e.target.value)}
        />

        <div className={styles.nextInput}>
          {value ? (
            <button className={styles.button}>
              <BsFillSendFill />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InputMessages;
