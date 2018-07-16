function RegisterSubmit(props) {
    return (
        <div className="col-md-6 col-md-offset-4">
            <div className="form-group">
                <button type="submit" className={props.className}>Submit</button>
            </div>
        </div>
    )
}

export default RegisterSubmit;
