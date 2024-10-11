import styles from "./styles.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface AuthInputProps {
    placeholder: string;
    type: "text" | "password";
}

export default function AuthInput() {
    return <div className={cx("input-container")}>

        </div>
}
