import { Component, OnInit } from '@angular/core';
import { Quiz, Question, Answer } from './quiz';
import {Location} from '@angular/common';
import { QuizService } from '../services/quiz-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  countVariable = [];
  timerIndex: number;
  quiz: Quiz;
  timer;
  displayLastPart: boolean;
  showCheck: boolean;

  constructor(private location: Location, private quizService: QuizService) {
    this.quiz = new Quiz();
    this.displayLastPart = false;
    this.createCountVariable();
    this.quiz.questions.push(
      {
        question: 'Bis wann müssen bestehende Datenverarbeitungen DSGVO konform sein?',
        answers: [
          {
            correctAnswer: false,
            answerText: `Hängt von der Gesellschaftsform ab`
          },
          {
            correctAnswer: false,
            answerText: '24.12.2020'
          },
          {
            correctAnswer: true,
            answerText: 'Sie sind zu spät - Mai 2018'
          },
          {
            correctAnswer: false,
            answerText: 'Alles relativ - was ist schon MUSS'
          },
        ],
        timeForQuestion: 8000,
        basicPoints: 100,
        visible: true
      },
      {
        question: 'Ein Kunde fragt welche Daten Sie erfassen - wie lange haben Sie Zeit Auskunft zu geben?',
        answers: [
          {
            correctAnswer: false,
            answerText: 'Anfragedatum + 45 Werktage'
          },
          {
            correctAnswer: true,
            answerText: '1 Monat - u.U. bis 3 Monate'
          },
          {
            correctAnswer: false,
            answerText: 'Artikel 15 DSGVO sieht keine Fristen vor'
          },
          {
            correctAnswer: false,
            answerText: 'Wir sind schneller als die Post - 6 Monate'
          },
        ],
        timeForQuestion: 8000,
        basicPoints: 100,
        visible: false
      },
      {
        question: 'Wenn ich mir unsicher bei der Umsetzung der DSGVO bin dann...?',
        answers: [
          {
            correctAnswer: false,
            answerText: 'Mache ich Vogel-Strauß-Kopf in den Sand'
          },
          {
            correctAnswer: false,
            answerText: 'Reiß ich mir a Hüserl auf'
          },
          {
            correctAnswer: false,
            answerText: 'Rufe Natalija die I. an'
          },
          {
            correctAnswer: true,
            answerText: 'Suche online an Auskunft'
          },
        ],
        timeForQuestion: 8000,
        basicPoints: 100,
        visible: false
      }
    );
  }

  private createCountVariable() {
    for (let i = 0; i < 10; i++) {
      this.countVariable.push(true);
    }
  }

  ngOnInit() {
    this.startQuestion()
  }

  onAnswer(answer: Answer) {
    answer.answeredCorrectly = answer.correctAnswer;
    const currentQuestion = this.quiz.questions.find(_ => _.visible);
    setTimeout( () => {
      clearInterval(this.timer);
      if (answer.answeredCorrectly) {
        this.quiz.points += currentQuestion.basicPoints - this.timerIndex * 10;
      }

      this.countVariable = [];
      this.createCountVariable();
      let beforeQuestion = false;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.quiz.questions.length; i++) {
        if (beforeQuestion) {
          this.quiz.questions[i].visible = true;
          break;
        } else {
          if (this.quiz.questions[i].visible) {
            beforeQuestion = true;
          }
          this.quiz.questions[i].visible = false;
        }
      }
      const newQuestion = this.quiz.questions.find(_ => _.visible);
      if (newQuestion) {
        this.startQuestion();
        setTimeout( () => {
          this.showCheck = true;
        }, 500);
      } else {
        this.displayLastPart = true;
      }
    }, 1000);
  }

  onBack() {
    this.location.back();
  }

  startQuestion() {
    this.timerIndex = 0;
    const time = this.quiz.questions.find( _ => _.visible).timeForQuestion;
    const obj = this;
    this.timer = setInterval(() => {
      obj.timerIndex++;
      this.countVariable[this.countVariable.length - this.timerIndex] = false;
    }, (time / this.countVariable.length));
  }
}
