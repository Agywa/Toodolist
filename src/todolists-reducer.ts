import {TodolistType} from "./App";
import {v1} from "uuid";

export const todolistsReducer = (state: Array<TodolistType>, action: GeneralTypeForAC) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            let newState = [...state]
            return newState.filter(t=> t.id !== action.payload.id)
        }
        case "ADD-TODOLIST": {
            let newState = [...state]
            // let newTodolistId = v1();
            let newTodolist = {id:v1(),title: action.payload.title, filter:"all"}
            return [...newState, newTodolist]
        }
        default:return state
    }
}

type GeneralTypeForAC = removeTodolistACType|addTodolistACType
type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            id
        }
    } as const
}

type addTodolistACType = ReturnType<typeof addTodoListAC>

export const addTodoListAC = (title: string) => {
    return {
        type : "ADD-TODOLIST",
        payload: {
            title
        }
    } as const
}