import { Formik, FormikConfig } from "formik";
import { ReactNode } from "react";

export interface FormikMiddlewareProps<T = any> extends FormikConfig<T> {
    children: ReactNode;
}

export default function FormikMiddleware({
    children,
    ...formikConfig
}: FormikMiddlewareProps) {
    return <Formik {...formikConfig}>{children}</Formik>;
}
