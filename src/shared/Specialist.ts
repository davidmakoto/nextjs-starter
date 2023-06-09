import { Entity, Fields, Field, IdEntity } from "remult"
import { Appointment } from "./Appointment"

@Entity("specialists", {
    allowApiCrud: true
})

export class Specialist extends IdEntity {
    @Fields.autoIncrement()
    id = 0

    @Fields.string()
    name = ""

    @Fields.string()
    email = ""

    @Fields.string()
    phone = ""

    @Fields.string()
    specality = ""

    @Fields.string()
    location = ""

    @Fields.string()
    password = ""

    @Fields.string()
    availability = ""

    @Fields.json()
    availability_json: string[] | undefined

    @Field(() => Appointment)
    appointment?: Appointment;

    // is this right?
    @Fields.integer()
    appointmentId = 0;

    @Fields.object<Specialist>((options, remult) => {
        options.serverExpression = async (specialist) =>
              remult.repo(Appointment).find({where : {specialistId: specialist.id}})
    })
    appointments: Appointment[] = []

    @Fields.integer()
    normal_hours: number[] = []
}