import styles from "./InputSearch.module.scss";
import { useState } from "react";
import { FC } from "react";
import { IInputSearch } from "./IInputSearch";
import * as React from "react";
import { BsSearch } from "react-icons/bs";

const InputSearch: FC<IInputSearch> = ({ placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.inputBlock}>
      <button className={styles.button}>
        <BsSearch style={{ color: "orange" }} className={styles.searchIcon} />
      </button>
      <input
        type='text'
        className={styles.input}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputSearch;
