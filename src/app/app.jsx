import React from 'react';
import { render } from 'react-dom';

import EmployeeList from './employeelist/EmployeeList.jsx';
import TimeMachine from './timemachine/TimeMachine.jsx';
import Kantega from './kantega/Kantega.jsx';

import style from './style.scss'


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            year: 2005,
            employees: [
                {name: 'Sigurd', started: 2014, quitted: undefined, shares: 0},
                {name: 'Håvard', started: 2010, quitted: undefined, shares: 0},
                {name: 'Kari', started: 2008, quitted: 2011, shares: 0},
                {name: 'Camilla', started: 2005, quitted: 2012, shares: 0},
            ],
            kantega: {
                shares: 0,
                new: 0,
                sold: 0
            }
        }

    }

    warp() {
        this.state.year++;

        var shares = 0;
        this.state.employees.forEach(employee => {
            if(employee.started <= this.state.year) {

                if(!employee.quitted || employee.quitted > this.state.year) {
                    var canBuy = Math.min(12000, 50000 - employee.shares);
                    employee.shares += canBuy;
                    shares += canBuy;
                } else {
                    shares -= employee.shares;
                    employee.shares = 0;
                }

            }
        });

        this.state.kantega.sold = Math.min(shares, this.state.kantega.shares);
        this.state.kantega.shares = this.state.kantega.shares - this.state.kantega.sold;
        this.state.kantega.new = shares - this.state.kantega.sold;

        this.setState(this.state);
    }

    render() {

        return (
            <div>
                <h1>Aksjesimulator</h1>
                <EmployeeList employees={this.state.employees}/>
                <Kantega data={this.state.kantega}/>
                <TimeMachine year={this.state.year} handleClick={this.warp.bind(this)}/>
            </div>
        );

    }

}

render(<App/>, document.getElementById('app'));
