export const LoginPassword = (props) => {
    const msg = props.msg;
    const spanMsg = <span className="help-block">
                                        <strong>{msg}</strong>
                                    </span>;
    return (
        <div>
            {/*<label htmlFor={props.htmlFor} className="col-md-4 control-label">{props.label}</label>*/}
            <div className="col-md-6">
                <div className={props.formGroupClass}>
                    <input type="password" className={props.className} name={props.name} id={props.id}
                           placeholder={props.placeholder} onChange={props.onChange}/>
                    {msg ? spanMsg : ''}
                </div>
            </div>
        </div>
    )

};