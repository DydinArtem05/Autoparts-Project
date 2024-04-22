import styles from './FormControls.module.css';

export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error
    return (
        <span className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input {...input} {...props} />
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </span>
    )
}