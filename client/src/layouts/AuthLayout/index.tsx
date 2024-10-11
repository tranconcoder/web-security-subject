
// Styles
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

// Assets
import authBackground from "../../assets/images/AuthLayout/background.jpg";
import AuthBoxHero from "../../components/AuthLayout/AuthBoxHero";
import AuthBoxContent from "../../components/AuthLayout/AuthBoxContent";
import { Outlet } from "react-router-dom";

const cx = classnames.bind(styles);

export default function AuthLayout() {
    return (
        <div className={cx("container")}>
            <img
                className={cx("background")}
                src={authBackground}
                alt="background"
            />

            <div className={cx("auth-box")}>
                <AuthBoxHero />

                <AuthBoxContent>
                    <Outlet />
                </AuthBoxContent>
            </div>
        </div>
    );
}
