import React from "react";
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";
import AppWithRedux from "./AppWithRedux";

export default {
    title: "AppWithRedux Component",
    component: AppWithRedux,
}

export const AppBaseExample = (props: any) => {
    return <AppWithRedux/>

}