import styles from "./styles.module.scss";
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function SignIn() {
    return <div className={cx("container")}>Sign in component</div>;
}
