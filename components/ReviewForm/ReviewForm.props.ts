import { DetailedHTMLProps, HTMLAttributes} from "react";

export default interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: string;
    isOpened: boolean;
}