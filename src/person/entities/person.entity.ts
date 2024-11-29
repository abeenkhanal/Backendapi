import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column() 
    firstName:string

    @Column() 
    middleName:string

    @Column() 
    lastName:string


    @Column() 
    collegeName:string

    @Column() 
    email:string

    @Column() 
    phone:string

    @Column() 
    subject:string
}
