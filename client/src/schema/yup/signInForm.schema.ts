import * as yup from "yup";
import { getRequiredMessage } from "../../utils/getValidateMessage.util";

const signInSchema = yup.object({
    username: yup.string().required(getRequiredMessage("tên đăng nhập")),
    password: yup.string().required(getRequiredMessage("mật khẩu")),
});

export default signInSchema;
