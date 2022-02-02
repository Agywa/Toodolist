import React, {ChangeEvent} from "react";
import {Checkbox} from '@material-ui/core';

type PropsType = {
    isDone: boolean
    callback: (isDone: boolean) => void
}

export const UniversalCheckBox = (props: PropsType) => {
    const callBackHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.checked)
    }
    return (
        <Checkbox
            checked={props.isDone}
            color="primary"
            onChange={callBackHandler}
        />
    )
}
