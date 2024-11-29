import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonDto { 
    @ApiProperty()
    firstname:string

    @ApiProperty()
    middleName:string

    @ApiProperty()
    lastName:string


    @ApiProperty()
    collegeName:string

    @ApiProperty()
    email:string

    @ApiProperty()
    phone:string

    @ApiProperty()
    subject:string

   

}

