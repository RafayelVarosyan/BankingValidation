const Input = (props) => {
    return  <input inputMode={props.inputmode} maxLength={props.maxlength} ref={props.refs} pattern={props.pattern} type={props.type} className={props.className} placeholder={props.placeholder} />
}

export default Input;