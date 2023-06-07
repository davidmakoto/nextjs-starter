import { Entity, Fields } from "remult"

@Entity("specialists", {
    allowApiCrud: true
})

export class Specialist {
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
}