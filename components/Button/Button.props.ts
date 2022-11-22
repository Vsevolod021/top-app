import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export default interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'ghost';
    children: ReactNode;
    arrow?: 'right' | 'down' | 'none';
}