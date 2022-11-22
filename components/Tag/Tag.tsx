import TagProps from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'large', children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.small]: size == 'small',
                [styles.large]: size == 'large',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.gray]: color == 'gray',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary',
            })}
            {...props}
        >{
                href
                    ? <a href={href} target="_blank">{children}</a>
                    : <>{children}</>
            }

        </div>
    );
}