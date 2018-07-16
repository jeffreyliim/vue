import Button_success from './Button_success';
import Welcome from './Welcome';
import Message from './Message';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: '', name: '', isShow: false};
        this.click = this.clicked.bind(this);

    }

    clicked() {
        this.setState(prevState => ({
                isShow: !prevState.isShow
            })
        );
    }

    getCheckAdminStatus() {
        axios.get('/checkAdmin').then(response => {
            this.setState({date: response.data});
        }).catch(error => {
            console.log(error);
        });

        this.setState({name: 'michelle'});
    }

    componentDidMount() {
        this.getCheckAdminStatus();
    }

    render() {
        //to show/not show message on if rendering based on boolean (true,false)
        const message = this.state.isShow ? <Message/> : '';
        return (
            <div>
                <Welcome name={this.state.name} MyDate={this.state.date}></Welcome>
                <Button_success onClick={this.click} className="btn btn-info">Click Me</Button_success>
                {message}
            </div>
        )
    }
}
export default Comments;