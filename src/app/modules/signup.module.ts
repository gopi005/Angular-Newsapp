export class Signup{
    name:string
    email:string
    password:string
    verifypassword:string

    constructor(
{ name, email, password, verifypassword }: { name: string; email: string; password: string; verifypassword: string }    ){
        this.name=name
        this.email=email
        this.password=password
        this.verifypassword=verifypassword

    }
}