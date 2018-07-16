function createMarkup() {
    return {__html: `<p>Yay! New user signed up!</p>`};
}
function createMarkup2(){
    return {__html: `<hr>
        <p className="mb-0">Thanks for registering. Please login into your account</p>
    </hr>`}
}

function Message() {
    return (
        <div>
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <div dangerouslySetInnerHTML={createMarkup()} />
                <div dangerouslySetInnerHTML={createMarkup2()} />
            </div>
        </div>
)
}

export default Message;