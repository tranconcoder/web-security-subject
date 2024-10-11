import styles from "./styles.module.scss";
import classnames from "classnames/bind";
import { PropsWithChildren, useState } from "react";
import { Link, useMatch } from "react-router-dom";

const cx = classnames.bind(styles);

export default function AuthBoxContent({ children }: PropsWithChildren) {
    const isLogin = useMatch("/auth/sign-in");

    return (
        <div className={cx("box-content")}>
            <div className={cx("direction-ctn")}>
                <Link
                    className={cx("direction-login", { active: isLogin })}
                    to="/auth/sign-in"
                    replace
                >
                    Đăng nhập
                </Link>

                <Link
                    className={cx("direction-register", { active: !isLogin })}
                    to="/auth/sign-up"
                    replace
                >
                    Đăng ký
                </Link>

                <div className={cx("slider")}></div>
            </div>

            <form className={cx("form")}>{children}</form>
        </div>
    );
}
