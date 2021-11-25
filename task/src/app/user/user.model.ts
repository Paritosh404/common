export class User {
    public name: string;
    public email: string;
    public password: string;
    public address: string;
    public country: string;
    public mobileNo: number;

    constructor(name: string, 
                email: string, 
                password: string,
                address: string,
                country: string,
                mobileNo: number) 
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.country = country;
        this.mobileNo = mobileNo;
    }
}