import store from './store';
import { bugAdded, bugResolved } from './actions';

// const unsubscribe = store.subscribe(() => {
//     console.log('State changed.', store.getState());
// });

store.dispatch(bugAdded('Bug1'));
store.dispatch(bugResolved(1));

// unsubscribe();
// store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());
