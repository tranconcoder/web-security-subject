// styles
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

// components
import SignIn from "../../components/SignIn";
import AuthLayout from "../../layouts/AuthLayout";

const cx = classnames.bind(styles);

export default function SignInPage() {
    return (
        <AuthLayout>

            <SignIn />
        </AuthLayout>
    );
}
