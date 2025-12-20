import './App.css'
import {TodolistItem} from './TodolistItem'
import {useState} from "react";
import {v1} from "uuid";

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

export const App = () => {
  let [tasks, setTasks] = useState<Task[]> ([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
    { id: v1(), title: 'Typescript', isDone: false },
    { id: v1(), title: 'RTK query', isDone: false },
  ])

  const [filter, setFilter] = useState<FilterValuesType>('all')

  let filteredTasks = tasks
  if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.isDone)
  } if (filter === 'completed') {
    filteredTasks = tasks.filter (task => task.isDone)
  }

    const deleteTask = (taskId: string) => {
      const filteredTasks = tasks.filter(task => {
          return task.id !== taskId
      })
        setTasks(filteredTasks)
    }

  const createTask = (taskTitle: string) => {
    const newTask = {
      id: v1(),
      title: taskTitle,
      isDone: false
    }
    const newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  }

  const changeFilter = (filter: FilterValuesType)=> {
    setFilter(filter)
  }

  return (
      <div className="app">
        <TodolistItem title="What to learn"
                      tasks={filteredTasks}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
                      createTask={createTask}
        />
      </div>
  )
}
