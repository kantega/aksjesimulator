import React from 'react';
import style from './style.scss';

class Employee extends React.Component {

    render() {

        return (

            <div className="employee">
                <div>{this.props.data.name}</div>
                <div>{this.props.data.started}</div>
                <div>{this.props.data.quitted}</div>
                <div>{this.props.data.shares}</div>
            </div>

        );
    }

}

class EmployeeList extends React.Component {


    render() {

        var employees = this.props.employees.map(employee => <Employee key={employee.name} data={employee}/>);

        return (
            <div className="employeelist">

                <div className="header">
                    <div>Navn</div>
                    <div>Begynte</div>
                    <div>Sluttet</div>
                    <div>Aksjer</div>
                </div>

                {employees}
            </div>
        );
    }

}

export default EmployeeList;

