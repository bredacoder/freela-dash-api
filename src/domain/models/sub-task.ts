export interface SubTask {
  id: string
  description: string
  status: 'pending' | 'done'
  time?: number
}
