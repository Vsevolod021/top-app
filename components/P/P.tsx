import PProps from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size, children, className, ...props }: PProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.small]: size == 'small',
                [styles.middle]: size == 'middle',
                [styles.large]: size == 'large',
            })}
            {...props}
        >
            {children}
        </p>
    );
}