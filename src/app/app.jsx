import React from 'react';
import { render } from 'react-dom';

import EmployeeList from './employeelist/EmployeeList.jsx'
import TimeMachine from './timemachine/TimeMachine.jsx'

import style from './style.scss'


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            year: 2008,
            employees: [
                {name: 'Sigurd', started: 2014, quitted: undefined, shares: 0},
                {name: 'Håvard', started: 2010, quitted: undefined, shares: 0},
                {name: 'Kari', started: 2008, quitted: undefined, shares: 0}
            ]
        }

    }

    warp() {
        this.state.year++;
        this.state.employees.forEach(employee => {
            if(employee.started <= this.state.year) {
                employee.shares += 12000;
                if(employee.shares > 50000) employee.shares = 50000;
            }
        });
        this.setState(this.state);
    }

    render() {

        return (
            <div>
                <h1>Aksjesimulator</h1>
                <EmployeeList employees={this.state.employees}/>
                <TimeMachine year={this.state.year} handleClick={this.warp.bind(this)}/>
            </div>
        );

    }

}

render(<App/>, document.getElementById('app'));
