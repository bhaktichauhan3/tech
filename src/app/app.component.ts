import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IQuestion } from './questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'OpenBlue Sherlock';
  questions: IQuestion[] = [
    {
      "questionId": 1,
      "questionName": "Why is my energy bill so high?"
    },
    {
      "questionId": 2,
      "questionName": "Which configuration had the most impact on the energy bill this month?"
    },
    {
      "questionId": 3,
      "questionName": "Which faulty equipment had the most impact on the energy bill this month?"
    },
    ]
  constructor(public fb: FormBuilder) { }
  questionsForm = this.fb.group({
    name: ['']
  })
  onSubmit() {

    alert(JSON.stringify(this.questionsForm.value))
  }


}
