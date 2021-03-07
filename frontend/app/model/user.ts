export class User {
    id:Object;
    username: string;
    password: string;
    name:string;
    surname:string;
    status:string;//zajednicko
    prvaprijava:number;


    mail:string;//+ za zaposlene
    number:string;
    website:string;
    bio:string;
    zvanje:string;
    classnum:number;
    
    type:number;

    indeks:string;//+ za studente
    tipStudija:string;
    slika:string;
    predmeti:Array<String>;
    
    image:String;
}