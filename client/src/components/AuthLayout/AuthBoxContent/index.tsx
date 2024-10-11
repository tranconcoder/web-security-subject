// Types
import { PropsWithChildren } from "react";

// Styles
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

// Components
import { NavLink } from "react-router-dom";

const cx = classnames.bind(styles);

export default function AuthBoxContent({ children }: PropsWithChildren) {
    return (
        <div className={cx("box-content")}>
            <div className={cx("direction-ctn")}>
                <NavLink
                    to="/auth/sign-in"
                    className={({ isActive: active }) =>
                        cx("direction-login", { active })
                    }
                >
                    Đăng nhập
                </NavLink>

                <NavLink
                    to="/auth/sign-up"
                    className={({ isActive: active }) =>
                        cx("direction-register", { active })
                    }
                >
                    Đăng ký
                </NavLink>

                <div className={cx("slider")}></div>
            </div>

            <form className={cx("form")}>{children}</form>
        </div>
    );
}
