import {RegisterName, RegisterUserName, RegisterPassword, RegisterSubmit} from '../Register/Form';
import {connect} from 'react-redux';
import * as registerActions from '../actions/registerActions';
import Message from '../Message';
import Layout from '../containers/Layout';
import {withRouter} from "react-router-dom"; //this is needed to this.props.history.push to another url

const mapStateToProps = (state) => ({
    credentials: state.register
});

const mapDispatchToProps = (dispatch) => ({
    verifyCredentials: (data) => {
        dispatch(registerActions.verifyUsername(data.username));
        dispatch(registerActions.verifyPassword(data.password));
        dispatch(registerActions.verifyPasswordConfirmation(data.password, data.password_confirmation));
        dispatch(registerActions.verifyName(data.name))
    },
    resetInputs: () => dispatch(registerActions.resetInputs())
});

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.verifyInputs = this.verifyInputs.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.state = {
            registerSuccess: false
        };
    }

    verifyInputs() {
        this.props.verifyCredentials(
            {
                name: document.getElementById('name').value,
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                password_confirmation: document.getElementById('password_confirmation').value,
            }
        );
    }

    onRegister(e) {
        e.preventDefault();

        // still needs to check and verify inputs once again
        this.props.verifyCredentials(
            {
                name: document.getElementById('name').value,
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                password_confirmation: document.getElementById('password_confirmation').value,
            }
        );
        //if valiation passes
        if (this.props.credentials.name.success == true &&
            this.props.credentials.username.success == true &&
            this.props.credentials.password.success == true &&
            this.props.credentials.password_confirmation.success == true) {

            //does register on api call
            let input = {
                email: this.props.credentials.username.data,
                password: this.props.credentials.password.data,
                password_confirmation: this.props.credentials.password_confirmation.data,
                name: this.props.credentials.name.data,
            };


            axios.post('/register', input).then(response => {
                this.props.resetInputs();
                this.setState({registerSuccess: true});
                document.getElementById('regForm').reset();
            }).catch(error => {
                console.log(error);
            });

        }
    }


    render() {
        return (
            <div>
                <Layout/>
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">Register</div>
                        <div className="panel-body">
                            <form id="regForm" onSubmit={this.onRegister}>
                                <RegisterName className="form-control" placeholder="Name" name="name" id="name"
                                              onChange={this.verifyInputs}
                                              formGroupClass={this.props.credentials.name.inputClass}
                                              msg={this.props.credentials.name.msg} htmlFor="name" label="Name"/>
                                <RegisterUserName className="form-control" placeholder="Username" name="username"
                                                  id="username"
                                                  onChange={this.verifyInputs}
                                                  formGroupClass={this.props.credentials.username.inputClass}
                                                  msg={this.props.credentials.username.msg} htmlFor="username"
                                                  label="Email-Address"/>
                                <RegisterPassword className="form-control" placeholder="Password" name="password"
                                                  id="password"
                                                  onChange={this.verifyInputs}
                                                  formGroupClass={this.props.credentials.password.inputClass}
                                                  msg={this.props.credentials.password.msg} htmlFor="password"
                                                  label="Password"/>
                                <RegisterPassword className="form-control" placeholder="Password Confirmation"
                                                  id="password_confirmation"
                                                  name="password_confirmation"
                                                  onChange={this.verifyInputs}
                                                  formGroupClass={this.props.credentials.password_confirmation.inputClass}
                                                  msg={this.props.credentials.password_confirmation.msg}
                                                  htmlFor="password_confirmation" label="Password Confirmation"/>
                                <RegisterSubmit className="btn btn-success"/>
                                {this.state.registerSuccess ? <Message/> : ''}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Register));