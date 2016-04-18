import React from 'react';
import style from './style.scss';

class Kantega extends React.Component {


    render() {

        return (
            <div className="kantega">
                <h3>Kantega</h3>
                <div><div>Egne aksjer</div><div>{this.props.data.shares}</div></div>
                <div><div>Emisjon siste år</div><div>{this.props.data.new}</div></div>
                <div><div>Solgt siste år</div><div>{this.props.data.sold}</div></div>
            </div>
        );
    }

}

export default Kantega;

