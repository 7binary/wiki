const createStore = (reducer, initialState = {}) => {
  let state = initialState;
  return {
    getState: () => state,
    dispatch: action => {
      state = reducer(state, action);
    },
  };
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'add_count':
      return +state + 1;

    case 'sub_count':
      return +state - 1;

    default:
      return state;
  }
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add_todo':
      const todo = {
        id: Math.random().toString(36).substr(2, 5),
        title: action.payload,
        completed: false,
      };
      return [...state, todo];

    case 'toggle_todo':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    default:
      return state;
  }
};

const combineReducers = (reducersMap) =>
  (state, action) => {
    const nextState = {};
    Object.entries(reducersMap).forEach(([key, reducer]) => {
      nextState[key] = reducer(state[key], action);
    });
    return nextState;
  };

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer);
store.dispatch({ type: 'add_count' });
store.dispatch({ type: 'add_todo', payload: 'First' });
store.dispatch({ type: 'add_todo', payload: 'Second' });
store.dispatch({ type: 'toggle_todo', payload: store.getState().todo[0].id });
console.log(store.getState());

// Middlewares & Thunk
const thunk = store => dispatch => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
};

const applyMiddleware = middleware => createStore => (reducer, initialState = {}) => {
  const store = createStore(reducer, initialState);
  return {
    dispatch: action => middleware(store)(store.dispatch)(action),
    getState: store.getState,
  };
};
