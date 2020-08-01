export class Application {
    name: string;
    img: string;
    codeLink: string;
    siteLink: string;
    usedTechnos: string[];
    realisationTime: string;
    dateOfRealisation: number;

     constructor(input?) {
        Object.assign(input);
     }
}
