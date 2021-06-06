import React, { Component } from 'react'
import { TodoModel } from './TodoForm'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Checkbox, StylesProvider } from '@material-ui/core'
import { Delete, Build, AutorenewTwoTone } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const styles = {
  grid: {
    margin: '20px auto',
  },
  icon: {
    marginLeft: 'auto',
  },
  check: {
    margin: 0,
  },
}

export interface Todos {
  todos: TodoModel[]
}
class Todolist extends Component<Todos, {}> {
  render() {
    console.log(this.props.todos)
    let todlist = this.props.todos.map((x) => {
      return (
        <Grid item xs={6} style={styles.grid}>
          <ListItem className='border'>
            <Checkbox
              edge='start'
              color='primary'
              style={styles.check}
            ></Checkbox>{' '}
            {x.title}
            <IconButton
              edge='end'
              color='primary'
              aria-label='Edit'
              style={styles.icon}
            >
              <Build fontSize='small' />
            </IconButton>
            <IconButton edge='end' color='secondary' aria-label='Delete'>
              <Delete fontSize='small' />
            </IconButton>
          </ListItem>
        </Grid>
      )
    })
    return todlist
  }
}

export default Todolist
