import React, { } from 'react';
import Styles from './index.module.scss';

class SudoKeyBoard extends React.Component {
    clickEvent=(num)=>{
        this.props.click(num)
    }
    render() {
        return (
            <>
                <p>请选择要填入数字</p>
                <ul className={Styles['key-board-container']}>
                    {
                        [1,2,3,4,5,6,7,8,9].map((item,index)=>{
                        return (<li disabled={this.props.disabled} key={index} className={Styles['item']}
                        onClick={()=>{this.clickEvent(item)}}
                        >{item}</li>)
                        })
                    }
                </ul>
            </>
        );
    }
}

export default SudoKeyBoard;