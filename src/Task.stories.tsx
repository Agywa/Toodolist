import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";

export default {
    title: "Task Component",
    component: Task,
}
const changeTaskStatusCallback = action("Status Changed")
const changeTaskTitleCallback = action("Title Changed")
const removeTaskStatusCallback = action("Removed Task")

export const TaskBaseExample = (props: any) => {
    return <>
        <Task
            task={{id: "1", isDone: true, title: "CSS"}}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskStatusCallback}
            todolistId={"TodolistId1"}
        />
        <Task
            task={{id: "2", isDone: false, title: "JS"}}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskStatusCallback}
            todolistId={"TodolistId1"}
        />
    </>
}