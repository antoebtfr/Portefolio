export class Application {
    name: string;
    img: string;
    link: string;
    usedTechnos: string[];
    realisationTime: string;
    dateOfRealisation: number;

     constructor(input?) {
        Object.assign(input);
     }
}
