import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './routes/Loginpage';
import StateExamp from './routes/StateExamp';
import Props from './routes/Props';
import PropExtends from './routes/PropExtends';
import Scrollview from './routes/ScrollView';
import FlatListEx from './routes/FlatListEx';
import SectionListEx from './routes/SectionListEx';
import Call from './routes/Call';
import Life from './routes/Life';
import Chart from './routes/Chart';

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="Login" component={Login} title="Login" type="replace" hideNavBar />
                <Scene key="StateExamp" component={StateExamp} title="StateExamp" type="replace" hideNavBar />
                <Scene key="Props" component={Props} title="Props" type="replace" hideNavBar />
                <Scene key="PropExtends" component={PropExtends} title="PropExtends" type="replace" hideNavBar />
                <Scene key="Scrollview" component={Scrollview} title="Scrollview" type="replace" hideNavBar />
                <Scene key="FlatListEx" component={FlatListEx} title="FlatListEx" type="replace" hideNavBar />
                <Scene key="SectionListEx" component={SectionListEx} title="SectionListEx" type="replace" hideNavBar />
                <Scene key="Call" component={Call} title="Call" type="replace" hideNavBar initial="true" />
                <Scene key="Life" component={Life} title="Life" type="replace" hideNavBar />
                <Scene key="Chart" component={Chart} title="Chart" type="replace" hideNavBar />
            </Scene>
        </Router>
    );
}
export default App;