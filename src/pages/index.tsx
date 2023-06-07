// src/pages/index.tsx

import { use, useEffect, useState } from "react"
import { remult } from "remult"
import { Task } from "../shared/Task"
import { Service } from "../shared/Service"

const taskRepo = remult.repo(Task)
const serviceRepo = remult.repo(Service)

export default function Home() {
  const [services, setServices] = useState<Service[]>([])
  const [newServiceTitle, setNewServiceTitle] = useState("")

  const addService = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const newService = await serviceRepo.insert({ name: newServiceTitle })
      setServices([...services, newService])
      setNewServiceTitle("")
    } catch (error: any) {
      alert(error.message)
    }
  }
  useEffect(() => {
    serviceRepo.find().then(setServices)
  }, [])


  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const addTask = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const newTask = await taskRepo.insert({ title: newTaskTitle })
      setTasks([...tasks, newTask])
      setNewTaskTitle("")
    } catch (error: any) {
      alert(error.message)
    }
  }

  useEffect(() => {
    serviceRepo.find().then(setTasks)
  }, [])
  return (
    <div>
      <div>
      <h1>Services</h1>
      <main>
        <form onSubmit={addService}>
          <input
            value={newServiceTitle}
            placeholder="Name of service?"
            onChange={e => setNewServiceTitle(e.target.value)}
          />
          <button>Add</button>
        </form>
        {services.map(service => {
            const setService = (value: Service) =>
            setServices(services => services.map(s => (s === service ? value : s)))
      
          const setCompleted = async (completed: boolean) =>
            setService(await serviceRepo.save({ ...service, completed }))

          const setTitle = (title: string) => setService({ ...service, title })

          const saveSerice = async () => {
            try {
              setService(await ServiceRepo.save(service))
            } catch (error: any) {
              alert(error.message)
            }
          }

          const deleteService = async () => {
            try {
              await serviceRepo.delete(service)
              setServices(services.filter(s => s !== service))
            } catch (error: any) {
              alert(error.message)
            }
          }
          return (
            <div key={service.id}>
            <input
              type="checkbox"
              checked={service.completed}
              onChange={e => setCompleted(e.target.checked)}
            />
            <input value={service.title} onChange={e => setTitle(e.target.value)} />
            <button onClick={saveService}>Save</button>
            <button onClick={deleteSerivce}>Delete</button>
          </div>
          )
        })}
      </main>

      </div>








      
      <div>
      <h1>Todos</h1>
      <main>
        <form onSubmit={addTask}>
          <input
            value={newTaskTitle}
            placeholder="What needs to be done?"
            onChange={e => setNewTaskTitle(e.target.value)}
          />
          <button>Add</button>
        </form>
        {tasks.map(task => {
            const setTask = (value: Task) =>
            setTasks(tasks => tasks.map(t => (t === task ? value : t)))
      
          const setCompleted = async (completed: boolean) =>
            setTask(await taskRepo.save({ ...task, completed }))

          const setTitle = (title: string) => setTask({ ...task, title })

          const saveTask = async () => {
            try {
              setTask(await taskRepo.save(task))
            } catch (error: any) {
              alert(error.message)
            }
          }

          const deleteTask = async () => {
            try {
              await taskRepo.delete(task)
              setTasks(tasks.filter(t => t !== task))
            } catch (error: any) {
              alert(error.message)
            }
          }
          return (
            <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={e => setCompleted(e.target.checked)}
            />
            <input value={task.title} onChange={e => setTitle(e.target.value)} />
            <button onClick={saveTask}>Save</button>
            <button onClick={deleteTask}>Delete</button>
          </div>
          )
        })}
      </main>
      </div>
    </div>
  )
}