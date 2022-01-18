import {TaskType} from "./Todolist";
import {v1} from "uuid";


export const TaskReducer = (state: Array<TaskType>, action: GeneralType) => {
    switch (action.type) {
        case "REMOVE-TASK" : {
            let newState = [...state];
            //let filteredTasks = tasks.filter(t => t.id != id);
            return newState.filter(f => f.id !== action.id)
        }
        case "ADD-TASK" : {
            let newState = [...state];
            return [{id: v1(), title: action.payload.title, isDone: false}, ...newState]
        }
        default:
            return state
    }
}
type GeneralType = removeTaskACType | addTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        id: id
    } as const
}
type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) => {
    return {
        type: "ADD-TASK",
        payload: {
            title: title,

        }
    } as const

}