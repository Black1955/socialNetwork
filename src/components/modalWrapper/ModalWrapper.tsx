import { AllHTMLAttributes, FC, ReactNode } from "react";
import styles from "./modalWrapper.module.scss";
interface IModal extends AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  visible: boolean;
}
const ModalWrapper: FC<IModal> = ({ children, visible, ...rest }) => {
  return (
    <div
      {...rest}
      className={`${styles.ModalWrapper} ${!visible && styles.visible}`}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
