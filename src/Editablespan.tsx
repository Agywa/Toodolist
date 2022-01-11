import React, {useState} from "react";

type propsType = {
    title: string
}

export const EditableSpan = (props: propsType) => {
    const [edit, setEdit] = useState(false)
    return (
        edit ? <input value={props.title}/>
            : <span>{props.title}</span>
    )
}

