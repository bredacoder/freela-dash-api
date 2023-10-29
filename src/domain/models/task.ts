import { SubTask } from './sub-task'
type TaskStatus = 'pending' | 'doing' | 'done'

export interface Task {
  id: string
  title: string
  customerId: string
  status: TaskStatus
  time?: number
  subTasks?: SubTask[]
}
