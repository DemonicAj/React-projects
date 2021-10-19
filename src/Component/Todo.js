import React , { Component} from "react";
import './Todo.css'


class Todo extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: "",
            todoList: []
        };
    }
    setText = (e) => {
        this.setState({text: e.target.value});
        
    }

    addText = (e) => {
        if (this.state.text === '') {
            alert('Enter your TODO');
        }
        else{
            let newlist = this.state.todoList ;
            const obj = [this.state.text,false];
            newlist.push(obj);
            this.setState({todoList : newlist}) 
            console.log(this.state.todoList)
        }
    }

    removeTodo = (k) => {
        if (!window.confirm(`Are you sure you want to delete item ${k+1}`)){
            return;
        }
        let newList = this.state.todoList;
        newList.splice(k, 1);
        this.setState({todoList: newList})
    }

    checkIt = (k) =>{
        let newlist = this.state.todoList ;
        newlist[k][1]= !newlist[k][1];
        this.setState({todoList : newlist}) 
        console.log(this.state.todoList)
    }

    render(){
        return( 
            <>
                <h1>TODO</h1>
                    <div className='section1'>   
                        
                                    <br />
                                    <div className='section2'>
                                        <input type="text" onChange = {this.setText} className = 'Text' placeholder='Add item.....✎'/><br/>
                                        <button onClick= {this.addText} className='addButton'>✎</button>        
                                    </div>
                                    
                                        <ul>
                                        {this.state.todoList.map((item,key) => <li key={key} className = 'ListItem'>
                                            <input type='checkbox' className='box' onClick={()=>this.checkIt(key)}/>{item[1]?<strike>{item[0]}</strike>:item[0]} 
                                            <button onClick ={()=>this.removeTodo(key)} className='RemoveButton'>🗑</button> </li>)
                                        }
                                        </ul>
                                
                                <p>A.R Todos.Inc</p>     
                    </div>
             </>  
        ) 
    }

}

export default Todo