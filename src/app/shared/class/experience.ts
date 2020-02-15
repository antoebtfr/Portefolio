export class Experience {
    intitule: string;
    place: string;
    text: string;
    beginningDate: string;
    endDate: string;

    constructor(input) {
        Object.assign(input);
    }
}
