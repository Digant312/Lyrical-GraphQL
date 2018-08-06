import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import SongList from './SongList';
import SongCreate from './SongCreate';

class App extends Component {
    render(){
        return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={SongList} />
                <Route exact path="/song" component={SongCreate} />
            </Switch>
        </div>
        );
    }
}

export default withRouter(App);