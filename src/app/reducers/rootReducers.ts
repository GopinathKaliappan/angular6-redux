
export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
}

export interface ITodo {
    id: number;
    description: string;
    responsible: string;
    priority: string;
    isCompleted: boolean;
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS';


export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:

            let newState = { ...state };
            newState.todos.push(action.todo);
            return { ...state, ...newState };

        case TOGGLE_TODO:
        	return state;


        case REMOVE_TODO:
            return state;


        case REMOVE_ALL_TODOS:
            return state;


    }
    return state;
}