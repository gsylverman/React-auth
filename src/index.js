import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Signup from './components/Signup/Signup';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={Signup} />
            </App>
        </Router>
    </Provider >,
    document.getElementById('root')
);


