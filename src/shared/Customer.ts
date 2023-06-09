import { Entity, Fields } from "remult"
import { Appointment } from "./Appointment"

@Entity("customers", {
    allowApiCrud: true
})

export class Customer {
    @Fields.autoIncrement()
    id = 0;

    @Fields.string()
    name = "";

    @Fields.string()
    email = "";

    @Fields.string()
    phone = "";

    @Fields.string()
    specialty = "";

    @Fields.string()
    location = "";

    @Fields.string()
    password = "";

    @Fields.object<Customer>((options, remult) => {
        options.serverExpression = async (customer) =>
              remult.repo(Appointment).find({where : {customerId: customer.id}})
    })
    appointments: Appointment[] = []
}