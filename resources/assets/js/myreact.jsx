function Welcome(prop) {
    return (
        <div>
            <h1>Hello world {prop.name}</h1>
            <h2>Hello {prop.MyDate}</h2>
        </div>
    )
}

function Button_success(props) {
    return <button type="button" onClick={clicked} className={props.className}> Click me</button>
}

function clicked() {
    return console.log('clicked');
}

class Comment2Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: '123'}
    }
    componentDidMount(){
        this.setState({date:'345'})
    }

    render() {
        return (
            <div>
                <Welcome name="sara" MyDate={this.state.date}></Welcome>
                <Button_success className="btn btn-success">Click Me</Button_success>
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <Comment2Box/>
    </div>
    , document.getElementById('root'));
