import React, { Component } from 'react';
import Todolist from './Todolist';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  todoForm: {
    margin: '0 0 30px 0 ',
  },
  textInput: {
    width: '50%',
  },
  submit: {
    padding: '16px 16px',
    backgroundColor: '#274472',
    color: 'white',
  },
};
export interface TodoModel {
  id: number;
  title: string;
}
class TodoForm extends Component {
  state = {
    todoList: [
      {
        id: 0,
        title: '',
      },
    ],
  };
  value = '';

  handelInput(title: string) {
    this.value = title;
  }
  submit() {
    this.state.todoList.push({
      id: this.state.todoList.length + 1,
      title: this.value,
    });
    this.setState({
      todoList: this.state.todoList,
    });

    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form style={styles.todoForm}>
          <TextField
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
            onChange={(e) => this.handelInput(e.target.value)}
            style={styles.textInput}
          />
          <Button onClick={() => this.submit()} style={styles.submit} variant='contained'>
            Submit
          </Button>
        </form>
        <Todolist todos={this.state.todoList}></Todolist>
      </div>
    );
  }
}

export default TodoForm;
