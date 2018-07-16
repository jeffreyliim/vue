function RegisterPassword(props) {
    const msg = props.msg;
    const spanMsg = <span className="help-block">
                                        <strong>{msg}</strong>
                                    </span>;
    return (
        <div>
            <label htmlFor={props.htmlFor} className="col-md-4 control-label">{props.label}</label>
            <div className="col-md-6">
                <div className={props.formGroupClass}>
                    <input type="password" className={props.className} placeholder={props.placeholder} id={props.id}
                           name={props.name} onChange={props.onChange}/>
                    {msg ? spanMsg : ''}
                </div>
            </div>
        </div>

    )
}

export default RegisterPassword;