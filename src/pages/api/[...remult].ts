import { remultNext } from "remult/remult-next";
import { Task } from "../../shared/Task"
import { Customer } from "../../shared/Customer"
import { Specialist } from "../../shared/Specialist"
import { Service } from "../../shared/Service"
import { Appointment } from "../../shared/Appointment"

export default remultNext({
    entities: [Task, Customer, Specialist, Service, Appointment]
})