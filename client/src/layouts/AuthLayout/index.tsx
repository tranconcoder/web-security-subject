// Types
import { PropsWithChildren } from "react";

// Styles
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

// Assets
import authBackground from "../../assets/images/AuthLayout/background.jpg";
import AuthBoxHero from "../../components/AuthLayout/AuthBoxHero";
import AuthBoxContent from "../../components/AuthLayout/AuthBoxContent";

const cx = classnames.bind(styles);

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className={cx("container")}>
            <img
                className={cx("background")}
                src={authBackground}
                alt="background"
            />

            <div className={cx("auth-box")}>
                <AuthBoxHero />

                <AuthBoxContent>{children}</AuthBoxContent>
            </div>
        </div>
    );
}
