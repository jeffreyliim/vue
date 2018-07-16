import {connect} from 'react-redux';
import * as loginActions from '../actions/loginActions';
import {LoginUsername} from '../Login/LoginUsername'
import {LoginPassword} from '../Login/LoginPassword'
import {LoginSubmit} from '../Login/LoginSubmit'
import Layout from '../containers/Layout';
import {withRouter} from "react-router-dom"; //this is needed to this.props.history.push to another url

const mapStateToProps = state => ({
    credentials: state.login
});

const mapDispatchToProps = dispatch => ({
    verifyCredentials: (data) => {
        dispatch(loginActions.verifyUsername(data.username));
        dispatch(loginActions.verifyPassword(data.password))
    },
    sendsLoginStatus: (status) => dispatch(loginActions.loginStatus(status))
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.onChangeInputs = this.onChangeInputs.bind(this);
    }

    loginSubmit(e) {
        e.preventDefault();
        this.props.verifyCredentials({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        });

        let data = {
            email: document.getElementById('username').value,
            password: document.getElementById('password').value
        };

        if (this.props.credentials.username.success == true && this.props.credentials.password.success == true) {
            axios.post('/login', data).then(response => {
                console.log('login success');
                this.props.sendsLoginStatus(true);
                this.props.history.push('/react/dashboard');
            }).catch(err => {
                console.log(err.response.data);
                this.props.history.push('/react/dashboard');
            })
        }

    }

    onChangeInputs() {
        this.props.verifyCredentials({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        });
    }


    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Layout/>
                <div className="col-md-6 offset-md-3">

                    <section class="form-light">

                        <div class="card">

                            <div class="card-body mx-4">

                                <div class="text-center">
                                    <h3 class="pink-text mb-5"><strong>Sign up</strong></h3>
                                </div>

                                <form method="post" onSubmit={this.loginSubmit}>
                                    <LoginUsername className="form-control" name="username" id="username"
                                                   placeholder="Username"
                                                   msg={this.props.credentials.username.msg}
                                                   onChange={this.onChangeInputs}
                                                   formGroupClass={'md-form ' + this.props.credentials.username.inputClass}
                                                   htmlFor="username" label="Email-Address"/>

                                    <LoginPassword className="form-control" name="password" id="password"
                                                   placeholder="Password"
                                                   msg={this.props.credentials.password.msg}
                                                   formGroupClass={'md-form ' + this.props.credentials.password.inputClass}
                                                   onChange={this.onChangeInputs} htmlFor="password"
                                                   label="Password"/>


                                    <div class="row d-flex align-items-center mb-4">

                                        <div class="col-md-3 col-md-6 text-center">
                                            <LoginSubmit className="btn btn-pink btn-block btn-rounded z-depth-1"/>
                                        </div>

                                        <div class="col-md-6">
                                            <p class="font-small grey-text d-flex justify-content-end">Have an account?
                                                <a href="#" class="blue-text ml-1"> Log in</a></p>
                                        </div>

                                    </div>
                                </form>
                            </div>

                            <div class="footer pt-3 mdb-color lighten-3">

                                <div class="row d-flex justify-content-center">
                                    <p class="font-small white-text mb-2 pt-3">or Sign up with:</p>
                                </div>

                                <div class="row mt-2 mb-3 d-flex justify-content-center">
                                    <a class="fa-lg p-2 m-2 fb-ic"><i class="fa fa-facebook white-text fa-lg"> </i></a>
                                    <a class="fa-lg p-2 m-2 tw-ic"><i class="fa fa-twitter white-text fa-lg"> </i></a>
                                    <a class="fa-lg p-2 m-2 gplus-ic"><i
                                        class="fa fa-google-plus white-text fa-lg"> </i></a>
                                </div>

                            </div>

                        </div>

                    </section>
                </div>
            </div >
        )
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));