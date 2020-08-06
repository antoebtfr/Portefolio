export class Mail {
    email: string;
    subject: string;
    text: string;

    constructor(input) {
        Object.assign(input);
    }
}
