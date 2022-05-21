import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action){
  console.log(action.type, state);

  switch(action.type){
    case 'ENGLISH':
      return state = 'chicken';

    case 'SWEDISH':
      return state = 'kyckling';

    default:
      return state;

  }
}
