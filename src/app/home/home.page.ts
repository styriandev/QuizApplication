import { Component } from '@angular/core';
import { QuizService } from '../services/quiz-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public chartData = [
    {
      name: 'Maximale Punktezahl am Betrieb',
      value: 300
    },
    {
      name: 'Deine Punktezahl',
      value: 255
    }
  ];

  public chartSize = [
    300, 300
  ];

  constructor(private quizService: QuizService) {}

  public onSaveQuiz() {
    this.quizService.saveQuestion(this.quizService.getStaticQuestions());
  }

}
