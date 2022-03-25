import axios from 'axios'

let instance = axios.create(
    {
        baseURL: "https://social-network.samuraijs.com/api/1.1/",
        withCredentials: true,
        headers: {
            "API-KEY": "fdd5085f-e791-417d-8286-20f62e9eaad1"
        }
    }
)

type TodoType = {
    id: string
    title: string
    addedData: string
    order: number
}
type BaseResponseType<T = {}> = {
    resultCode: number
    messages: string[], // === Array<string>
    fieldsError: Array<string> // === string[]
    data: T
}


type CreateTodoType = {
    resultCode: number
    messages: string[], // === Array<string>
    fieldsError: Array<string> // === string[]
    data: {
        item: TodoType
    }
}

type DeleteUpdateTodoType = {
    resultCode: number
    messages: string[]
    fieldsError: Array<string>
    data: {}

}

export const todolist_api = {
    getTodolist() {
        return instance.get<Array<TodoType>>('todo-lists')

    },
    createTodolist(title: string) {
        return instance.post<BaseResponseType<{ item: TodoType }>>("todo-lists",
            {title})

    },

    deleteTodolist(todolistId: string) {
        return instance.delete<BaseResponseType>(`todo-lists/${todolistId}`)

    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<BaseResponseType>(`todo-lists/${todolistId}`,
            {title})
    },
}
