import { Entity, Field, Fields, IdEntity } from "remult"
import { Specialist } from "./Specialist"
import { Customer } from "./Customer"

@Entity("appointments", {
    allowApiCrud: true
})

export class Appointment extends IdEntity {
    @Fields.autoIncrement()
    id = 0;

    @Fields.string()
    title = "";

    @Fields.string()
    name = "";

    @Fields.string()
    description = "";

    @Fields.string()
    price = "";

    @Fields.string()
    duration = "";

    @Field(() => Specialist)
    specialist?: Specialist;

    @Field(() => Customer)
    customer?: Customer;

    @Fields.number()
    specialistId = 0;

    @Fields.number()
    customerId = 0;

    @Fields.object<Appointment>((options, remult) => {
        options.serverExpression = async (appointment) =>
            remult.repo(Specialist).find({ where: { appointmentId: appointment.id} })
    })
    specialist_assigned: Specialist[] = []
}