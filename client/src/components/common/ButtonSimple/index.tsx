// Types
import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    PropsWithChildren,
} from "react";
import type { IconType } from "react-icons";

// Styles
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

// Props type
interface ButtonSimpleCustomProps extends PropsWithChildren {
    redirect?: string;
    Icon?: IconType;
}

export type ButtonSimpleProps = ButtonSimpleCustomProps &
    (ButtonHTMLAttributes<HTMLButtonElement> &
        AnchorHTMLAttributes<HTMLAnchorElement>);

// Component
export default function ButtonSimple({
    redirect,
    children,
    Icon,
    ...props
}: ButtonSimpleProps) {
    const Button = redirect ? "a" : "button";

    return (
            <Button {...props} className={cx("button-container").addClass(props.className)}>
            {Icon && <Icon />}

            <p>{children}</p>
        </Button>
    );
}
