// Types
import type { InputHTMLAttributes } from "react";

// Styles
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

// Assets
import { MdErrorOutline } from "react-icons/md";
import { VscError } from "react-icons/vsc";

// Formik
import { useField } from "formik";

const cx = classnames.bind(styles);

interface AuthInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder: string;
    type: "text" | "password";
}

export default function AuthInputField({
    placeholder,
    ...props
}: AuthInputFieldProps) {
    const [field, meta, helpers] = useField(props);
    const isError = meta.error && meta.touched;

    return (
        <div className={cx("input-container", { error: isError })}>
            <input {...field} {...props} placeholder=" " />

            <span className={cx("placeholder")}>{placeholder}</span>

            {isError && (
                <span className={cx("error-message")}>
                    <MdErrorOutline />
                    {meta.error}
                </span>
            )}
        </div>
    );
}
