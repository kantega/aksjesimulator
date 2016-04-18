import React from 'react';
import { render } from 'react-dom';

import EmployeeList from './employeelist/EmployeeList.jsx'
import style from './style.scss'

render(

    <div>
        <h1>Aksjesimulator</h1>
        <EmployeeList/>
    </div>,

    document.getElementById('app')
);
