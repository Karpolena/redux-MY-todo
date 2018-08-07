import {TODO} from "./../constants/Todo";

let initState = {
    todo: []
}

const addItem = (state, item) => {
    return {
        ...state, todo: [...state.todo, item]
    }
}

const removeItem = (state, item) => {
    return {
        ...state, todo: [...state.todo.filter(task => task.id !== item.id)]
    }
}

const TodoReducer = (state = initState, action) => {
    switch(action.type) {
        case TODO.ADD_ITEM:
            return addItem(state, action.payload);
        case TODO.REMOVE_ITEM:
            return removeItem(state, action.payload);
        default: return {...state};
    }
}

export default TodoReducer;