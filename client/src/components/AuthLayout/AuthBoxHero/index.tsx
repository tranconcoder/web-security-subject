// Styles
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

import boxHero from "../../../assets/images/AuthLayout/box-hero.png";

const cx = classnames.bind(styles);

export default function AuthBoxHero() {
    return (
        <aside className={cx("box-hero")}>
            <img
                className={cx("box-background")}
                src={boxHero}
                alt="box-hero"
            />

            <div className={cx("box-text")}>
                <h2 className={cx("box-title")}>Đăng nhập </h2>
                <span className={cx("box-desc")}>
                    Chào mừng bạn trở lại hệ thống..
                </span>
            </div>
        </aside>
    );
}
