import {Component, OnInit} from '@angular/core';
import {SharedDataService} from "../../service/shared-data.service";
import {scan} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  subjectMessage1: string = "";
  subjectMessage2: string = "";
  subjectMessage3: string = "";
  subjectMessage4: string = "";
  inputMessage: string = "";
  behaviouralMessage: string = "";
  replayMessages: string[] = [];
  asyncMessage: string = "";

  constructor(private _sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    this._sharedDataService.currentSubjectMessage.subscribe(message => this.subjectMessage1 = message);
    this._sharedDataService.currentSubjectMessage.subscribe(message => this.subjectMessage2 = message);
    this._sharedDataService.currentSubjectMessage.subscribe(message => this.subjectMessage3 = message);

    this._sharedDataService.currentBehaviouralMessage.subscribe(message => this.behaviouralMessage = message);

    this._sharedDataService.currentReplayMessages
      .pipe(
        scan((acc: string[], curr: string) => {

          const updated = [...acc, curr];

          console.log(acc)
          console.log(curr)
          console.log(updated)

          return updated.slice(-3); // keep only last 3
        }, [])
      )
      .subscribe(values => this.replayMessages = values);

    this._sharedDataService.currentAsyncMessages.subscribe(message => this.asyncMessage = message)
  }

  alertSubject(){
    this._sharedDataService.changeSubjectMessage(this.inputMessage);
  }

  activateSubjectSubscriber(){
    this._sharedDataService.currentSubjectMessage.subscribe(message => this.subjectMessage4 = message);
  }

  alertBehaviouralSubject() {
    this._sharedDataService.currentBehaviouralMessage.subscribe(message => alert(message));
  }

  alertReplaySubject() {
    const values: string[] = [];  // Array to store emitted values

    this._sharedDataService.currentReplayMessages
      .subscribe(message => {
        values.push(message);  // Push each emitted message into the array
      });

    // Now show the values after they’ve been emitted
    setTimeout(() => {
      alert(values.join("\n"));  // Join the values and display them in the alert
    }, 0);  // Using setTimeout to give time for values to accumulate  }
  }

  updateAsyncSubject(){
    let message = 'Updated async subject from Home Component! ' + Date.now();
    console.log(message);
    this._sharedDataService.changeAsyncSubjectMessage(message);
  }

  completeAsyncBehaviour(){
    this._sharedDataService.completeAsyncSubjectMessage();
  }
}
