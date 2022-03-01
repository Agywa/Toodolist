import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";
import {EditableSpan} from "./EditableSpan";

export default {
    title: "EditableSpan Component",
    component: EditableSpan,
}
const changeCallback = action("Value Changed")

export const EditaBleSpanBaseExample = (props: any) => {
    return <EditableSpan value={"startValue"} onChange={changeCallback}/>
}