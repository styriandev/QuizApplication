export class Quiz {
    questions: Question[];
    points?: number;

    constructor() {
        this.points = 0;
        this.questions = [];
    }
}

export class Question {
    creator: string;
    visible: boolean;
    answers: Answer[];
    timeForQuestion: number;
    question: string;
    basicPoints: number;

    constructor() {
        this.visible = false;
        this.answers = [];
        this.basicPoints = 100;
        this.timeForQuestion = 6000;
    }
}

export class Answer {
    answerText: string;
    correctAnswer: boolean;
    color?: string;
    icon?: string;
    answeredCorrectly?: boolean;
}
