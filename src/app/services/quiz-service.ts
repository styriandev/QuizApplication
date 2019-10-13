/*
 * Created on Sun Oct 13 2019
 *
 * Copyright (c) 2019 Dominik Sammer
 */

import { AngularFirestore } from '@angular/fire/firestore';
import { Question, Quiz } from '../quiz/quiz';

export class QuizService {

    constructor(private firestore: AngularFirestore) {}

    saveQuestion(quiz: Quiz) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection('quizes')
                .add(JSON.parse(JSON.stringify(quiz)))
                .then(res => {}, err => reject(err));
        });
    }

    getStaticQuestions(): Quiz {
        const quiz = new Quiz();
        quiz.questions.push(
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
          });
        return quiz;
    }
 }