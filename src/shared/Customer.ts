import { Entity, Fields } from "remult"

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
}