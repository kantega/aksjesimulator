import React from 'react';
import style from './style.scss';

class EmployeeList extends React.Component {

    render() {

        return (
            <div className="employeelist">

                <div className="header">
                    <div>Navn</div>
                    <div>Begynte</div>
                    <div>Sluttet</div>
                    <div>Aksjer</div>
                </div>

                <div className="employee">
                    <div>Sigurd</div>
                    <div>2014</div>
                    <div></div>
                    <div>0</div>
                </div>

            </div>
        );
    }

}

export default EmployeeList;

