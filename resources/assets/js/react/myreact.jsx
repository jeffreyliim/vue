import store from './components/Store';
import {Provider} from 'react-redux';
import App from './components/containers/App';

/*
* To use react-redux globally in ur app, first you have to set the Provider that gives your
* Store a global access. Before that, rmb to create a store in ur Store.jsx file and define ur
* reducers and middleware. Also use redux-logger to see the execution of ur actions in ur console from its
* previous state to its next state (only in dev environment). Also use redux-thunk as it allows the dispatch function to
* pass through from ur actions defined in mapDispatchToProps into ur actions in ur actions file.
*
* Secondly, within the App component is used a dashboard component, if dashboard component requires
* access to the Store, it needs to connect to the Dashboard component like so : export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
*
* Thirdly, define all ur actions in ur dashboardActions file in mapDispatchToProps so you can access and execute ur
* actions like so: this.props.getPosts();
*
* Fourthly, define all mapStateToProps found in ur Reducer.jsx File in the combineReducers function so u can access
* ur data like so this.props.posts
*
*
* */
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider >
    , document.getElementById('root'));
