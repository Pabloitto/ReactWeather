import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import SearchInputContainer from './containers/search-bar';
import WeatherList from './containers/weather-list';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

class App extends Component{
    render(){
        return (<div className="margin-top-20"> 
            <SearchInputContainer />
            <WeatherList />
        </div>);
    }
}

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('.container'));