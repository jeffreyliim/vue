import Register from '../containers/Register';
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'; //remember to include withRouter in order to use this.props.history.push
import {connect} from 'react-redux';
import * as loginActions from '../actions/loginActions';


const mapStateToProps = state => ({
    credentials: state.login
});

const mapDispatchToProps = dispatch => ({
    sendsLoginStatus: (status) => dispatch(loginActions.loginStatus(status))
});

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this is the check whether log in or not when the component renders
        axios.get('/user').then(response => {
            this.props.sendsLoginStatus(true);
        }).catch(error => {
            this.props.sendsLoginStatus(false);
        })
    }

    render() {
        const loggedIn = this.props.credentials.isLoggedIn;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/react/register" render={() =>
                        loggedIn ? <Redirect to="/react/dashboard"/> : <Register/>
                    }/>
                    <Route path="/react/login" render={() =>
                        loggedIn ? <Redirect to="/react/dashboard"/> : <Login/>
                    }/>
                    <Route path="/react/dashboard" render={() =>
                        loggedIn ? <Dashboard/> : <Redirect to="/react/login"/>
                    }/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
