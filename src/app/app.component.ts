import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message$?: Observable<string>;

  constructor(private store: Store<AppState>){
    this.message$ = this.store.select('message');
  }

  englishLanguage(){
    this.store.dispatch({type: 'ENGLISH'});
  }

  swedishLanguage(){
    this.store.dispatch({type: 'SWEDISH'});
  }


}
