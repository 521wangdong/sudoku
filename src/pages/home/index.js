import React, { } from 'react';
import './index.scss';

import SudoTable from '../../components/SudoTable';
import SudoKeyBoard from '../../components/SudoKeyBoard';

import {getSudoList,ArrayMap,checkSudoList} from '../../utils/sudoku'

import { Button,Typography,message,Card } from 'antd';

const { Title } = Typography;


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
          list:[],
          selectedKey:[]
        }
      }
      
      componentDidMount(){
        this.getSource()
      }
      
      keyBoardClick=(num)=>{
        const {list,selectedKey} = this.state;
        if(selectedKey.length === 0){
          return
        }
        list[selectedKey[0]][selectedKey[1]].value = num;
        this.setState({
          list
        })
      }
      setKey=(x,y)=>{
        const {list} = this.state;
        if(list[x][y].origin){
          return
        }
        this.setState({
          selectedKey:[x,y]
        })
      }
      summit = ()=>{
        let {list} = this.state;
        list = ArrayMap(list,(value)=>{
          return value.value
        })
        if(checkSudoList(list)){
            message.success('恭喜您，游戏通过');
        }else{
            message.error('不符合规则请重试');
        }
      }
      reset = () => {
        this.getSource()
      }
    
      //获取随机值
      getSource = () => {
        let list = getSudoList();
        list = ArrayMap(list,(value)=>{
          return {
            value:value,
            origin:value !== 0
          }
        })
        this.setState({
          list:list
        })
      }
    render() {
        return(
            <>
                <Title>数独游戏</Title>

                <div className="content">
                    <Card>
                        <SudoTable 
                            selectedKey={this.state.selectedKey} 
                            setKey={this.setKey}
                            list={this.state.list}
                        />
                    </Card>

                    <Card style={{marginLeft: '20px'}}>
                        <SudoKeyBoard disabled={this.state.selectedKey.length === 0} click={this.keyBoardClick} />
                        <div className="btn">
                            <Button type="primary" onClick={this.reset}>重置</Button>
                            <Button type="primary" onClick={this.summit}>检查</Button>
                        </div>
                    </Card>
                    
                    
                </div>
                
                <footer className="footer">
                    
                </footer>
            </>
        )
    }
}


export default Home