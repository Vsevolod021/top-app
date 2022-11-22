import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'small' | 'middle' | 'large';
    children: ReactNode;
}