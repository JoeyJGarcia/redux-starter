import store from './store';
import * as action from './actions';

// const unsubscribe = store.subscribe(() => {
//     console.log('State changed.', store.getState());
// });

store.dispatch(action.bugAdded('Bug1'));
store.dispatch(action.bugAdded('Bug2'));
store.dispatch(action.bugAdded('Bug3'));
store.dispatch(action.bugResolved(1));

// unsubscribe();
// store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());
