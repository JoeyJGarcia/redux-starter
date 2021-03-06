import configureStore from './store/configureStore';
import * as actions from './store/bugs';

const store = configureStore();

store.subscribe(() => {
    console.log('State changed.');
});

store.dispatch(actions.bugAdded('Bug1'));
store.dispatch(actions.bugAdded('Bug2'));
store.dispatch(actions.bugAdded('Bug3'));
store.dispatch(actions.bugResolved(1));

// unsubscribe();
// store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());
