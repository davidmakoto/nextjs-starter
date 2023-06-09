
import { use, useEffect, useState, FormEvent } from "react"
import { remult } from "remult"
import { Task } from "../../shared/Task"
import { Service } from "../../shared/Service"
const taskRepo = remult.repo(Task)
const serviceRepo = remult.repo(Service)

const Services = () => {
    const [services, setServices] = useState<Service[]>([])
    const [newServiceTitle, setNewServiceTitle] = useState("")

    const addService = async (e: FormEvent) => {
      e.preventDefault()
      try {
        const newService = await serviceRepo.insert({ title: newServiceTitle })
        setServices([...services, newService])
        setNewServiceTitle("")
      } catch (error: any) {
        alert(error.message)
      }
    }

  useEffect(() => {
    serviceRepo.find().then(setServices)
  }, [])


    return (
    <div>
      <h1>Services</h1>
      <main>
        <form onSubmit={addService}>
          <input
            value={newServiceTitle}
            placeholder="What needs to be done?"
            onChange={e => setNewServiceTitle(e.target.value)}
          />
          <button>Add</button>
        </form>
        {services.map(service => {
            const setService = (value: Service) =>
            setServices(Services => Services.map(s => (s === service ? value : s)))

        //   const setCompleted = async (completed: boolean) =>
            // setService(await serviceRepo.save({ ...service, completed }))

          const setTitle = (title: string) => setService({ ...service, title })

          const saveService = async () => {
            try {
              setService(await serviceRepo.save(service))
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
            <input value={service.title} onChange={e => setTitle(e.target.value)} />
            <button onClick={saveService}>Save</button>
            <button onClick={deleteService}>Delete</button>
          </div>
          )
        })}
      </main>
    </div>
  )
}

export default Services;