export type TaskPropsType = {
    title: string
    isDone: boolean
}

export const Task = ({title, isDone}: TaskPropsType) => {
    return (
        <li>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            <button onClick={() => alert(task.id)}>x</button>
        </li>
    )
}