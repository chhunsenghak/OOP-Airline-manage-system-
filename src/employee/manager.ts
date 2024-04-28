import { gender } from "../person/gender";
import { Person } from "../person/person";
import { employee } from "./employee";
export class manage extends employee{
    constructor(
        private salary: string,
        id: string, name: string, tel: string, sex: gender, email: string
    ) {
        super(id, name, tel, sex, email);
    }
    public getSalary(){
        return this.salary;
    }
}
