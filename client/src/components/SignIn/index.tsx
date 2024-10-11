// Styles
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

// Components
import AuthInputField from "../AuthInputField";
import AuthFormikMiddleware from "../AuthFormikMiddleware";
import signInSchema from "../../schema/yup/signInForm.schema";

const cx = classnames.bind(styles);

export default function SignIn() {
    const initialValues = { username: "" };

    const handleSubmit = () => {};

    return (
        <div className={cx("container")}>
            <AuthFormikMiddleware
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={signInSchema}
            >
            <>

                <AuthInputField
                    name="username"
                    type="text"
                    placeholder="Tên đăng nhập..."
                />

                <AuthInputField
                    name="password"
                    type="password"
                    placeholder="Mật khẩu..."
                />
            </>
            </AuthFormikMiddleware>
        </div>
    );
}
