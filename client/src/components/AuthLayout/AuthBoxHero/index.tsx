// Styles
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

import boxHero from "../../../assets/images/AuthLayout/box-hero.png";
import { useMatch } from "react-router-dom";

const cx = classnames.bind(styles);

export default function AuthBoxHero() {
    const isLogin = useMatch("/auth/sign-in");

    return (
        <aside className={cx("box-hero")}>
            <img
                className={cx("box-background")}
                src={boxHero}
                alt="box-hero"
            />

            <div className={cx("box-text")}>
                <h2 className={cx("box-title")}>
                    {isLogin ? "Đăng nhập" : "Đăng ký"}
                </h2>

                <span className={cx("box-desc")}>
                    {isLogin
                        ? "Chào mừng bạn trở lại hệ thống.."
                        : "Chào mừng bạn đã đến với hệ thống!"}
                </span>
            </div>
        </aside>
    );
}
