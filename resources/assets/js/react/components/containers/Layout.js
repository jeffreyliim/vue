import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    credentials: state.login
});

const mapDispatchToProps = dispatch => ({});


class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isLoggedIn = this.props.credentials.isLoggedIn;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark primary-color">

                    <a className="navbar-brand" href="#">Navbar</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#basicExampleNav"
                            aria-controls="basicExampleNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="basicExampleNav">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu dropdown-primary"
                                     aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>

                        </ul>
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            {isLoggedIn ? '' : <li className="nav-item">
                                <Link to="/react/login">
                                    <div className="nav-link waves-effect waves-light">
                                        Login
                                    </div>
                                </Link>
                            </li>}
                            {isLoggedIn ? '' :
                                <li className="nav-item">
                                    <Link to="/react/register">
                                        <div className="nav-link waves-effect waves-light">
                                            Register
                                        </div>
                                    </Link>
                                </li>
                            }
                            {isLoggedIn ?
                                <li className="nav-item">
                                    <a href="/react/logout" className="nav-link waves-effect waves-light">
                                        Logout
                                    </a>
                                </li>
                                : ''}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);