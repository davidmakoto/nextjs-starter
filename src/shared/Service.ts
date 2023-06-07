import { Entity, Field, Fields, IdEntity } from "remult"
import { Specialist } from "./Specialist"

@Entity("services", {
    allowApiCrud: true
})

export class Service extends IdEntity {
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

    @Fields.string()
    image = "";
    
    @Field(() => Specialist)
    specialist?: Specialist;
}