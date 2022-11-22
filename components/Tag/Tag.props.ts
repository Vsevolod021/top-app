import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'small' | 'large';
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';  
    children: ReactNode;
    href?: string;
}