import {AppActionsType, setAppErrorAC, setAppStatusAC} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";

export const handleServerNetworkError = (dispatch: Dispatch<AppActionsType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC("failed"))
}

export const handlesServerAppError = <T>(dispatch: Dispatch<AppActionsType>, data: ResponseType<T>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
        dispatch(setAppStatusAC('failed'))
    } else {
        dispatch(setAppErrorAC("Some error occurred"))
    }
}
