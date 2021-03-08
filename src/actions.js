import * as actions from './actionTypes';

export const bugAdded = (description) => ({
    type: actions.BUG_ADDED,
    payload: {
        description,
    },
});

export const bugRemoved = (bug) => ({
    type: actions.BUG_REMOVED,
    payload: {
        id: bug.id,
    },
});

export const bugResolved = (id) => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id,
    },
});
