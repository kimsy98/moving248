import classes from './InputBox.module.css';

const InputBox = props => {
    const { label, type, inputMode, name, placeholder, required, value, onChange, readOnly } = props;

    const hasError = props.children && props.children.props.className.includes('error');

    const isValid = !hasError; // Determine validity based on error status

    return (
        <div className={`${classes.input_box}`}>
            <label>{label}</label>
            <input
                className={`${classes.input_field} ${!isValid ? classes.invalid : ''}`}
                type={type}
                inputMode={inputMode}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
            />
            {/* Optionally, you can display the error message here for better placement */}
            {props.children}
        </div>
    );
};

export default InputBox;
