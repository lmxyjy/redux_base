import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './containers/Todolist'
import store from './store/store';
import {Provider} from 'react-redux';

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)


ReactDOM.render(App,document.getElementById("root"));
