export class Experience {
    intitule: string;
    place: string;
    text: string;
    beginningDate: string;
    endDate: string;
    usedTechnos: string;

    constructor(input) {
        Object.assign(input);
    }
}
