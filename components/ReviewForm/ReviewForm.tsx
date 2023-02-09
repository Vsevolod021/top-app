import styles from "./ReviewForm.module.css";
import ReviewFormProps from "./ReviewForm.props";
import cn from "classnames";
import { Button, Input, Rating, Textarea } from "..";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSendResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError("что-то пошло не так");
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className={cn(styles.reviewForm, className)}
                {...props}
            >
                <Input
                    {...register("name", { required: { value: true, message: "Заполните имя" } })}
                    placeholder="Имя"
                    error={errors.name}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invald={errors.name ? true : false}
                />
                <Input
                    {...register("title", { required: { value: true, message: "Заполните заголовок" } })}
                    className={styles.title}
                    placeholder="Заголовок отзыва"
                    error={errors.title}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invald={errors.title ? true : false}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name="rating"
                        rules={{ required: { value: true, message: "Укажите рейтинг" } }}
                        render={({ field }) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register("description", { required: { value: true, message: "Заполните описание" } })}
                    className={styles.description}
                    placeholder="Текст отзыва"
                    error={errors.description}
                    tabIndex={isOpened ? 0 : -1}
                    aria-label='Текст отзыва'
                    aria-invald={errors.description ? true : false}
                />
                <div className={styles.submit}>
                    <Button appearance="primary" tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>Отправить</Button>
                    <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.panel, styles.success)} role='alert'>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>
                    Спасибо! Ваш отзыв будет опубликован после проверки.
                </div>
                <button
                    onClick={() => setIsSuccess(false)}
                    className={styles.close}
                    aria-label='Закрыть оповещение'
                >
                    <CloseIcon />
                </button>
            </div>}
            {error && <div className={cn(styles.panel, styles.error)} role='alert'>
                Что-то пошло не так! Попробуйте обновить страницу.
                <button
                    className={styles.close}
                    onClick={() => setError(undefined)}
                    aria-label='Закрыть оповещение'
                >
                    <CloseIcon />
                </button>
            </div>}
        </form>
    );
};