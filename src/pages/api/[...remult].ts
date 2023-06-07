import { remultNext } from "remult/remult-next";
import { Task } from "../../shared/Task"
import { Customer } from "../../shared/Customer"
import { Specialist } from "../../shared/Specialist"

export default remultNext({
    entities: [Task, Customer, Specialist]
})