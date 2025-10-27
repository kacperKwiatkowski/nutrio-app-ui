import { Injectable } from '@angular/core';
import {Subject, AsyncSubject, BehaviorSubject, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private sharedSubjectMessage = new Subject<string>;
  private sharedBehaviouralSubjectMessage = new BehaviorSubject<string>("Default Behavioural subject message");
  private sharedReplaySubjectMessage = new ReplaySubject<string>(3);
  private sharedAsyncSubjectMessage = new AsyncSubject<string>();
  currentSubjectMessage = this.sharedSubjectMessage.asObservable();
  currentBehaviouralMessage = this.sharedBehaviouralSubjectMessage.asObservable();
  currentReplayMessages = this.sharedReplaySubjectMessage.asObservable();
  currentAsyncMessages = this.sharedAsyncSubjectMessage.asObservable();

  constructor() { }

  // SUBJECT
  changeSubjectMessage(message: string) {
    return this.sharedSubjectMessage.next(message);
  }

  // BEHAVIORAL SUBJECT
  changeBehaviouralSubjectMessage(message: string) {
    this.sharedBehaviouralSubjectMessage.next(message);
  }

  // REPLAY SUBJECT
  changeReplaySubjectMessage(message: string) {
    this.sharedReplaySubjectMessage.next(message);
  }

  // ASYNC SUBJECT
  changeAsyncSubjectMessage(message: string) {
    this.sharedAsyncSubjectMessage.next(message)
  }

  completeAsyncSubjectMessage() {
    console.log("Completing async subject")
    this.sharedAsyncSubjectMessage.complete()
  }
}
