import {TasksStateType} from '../App';
import {v1} from "uuid";
import {TaskType} from "../Todolist";

export type removeTaskActionType = ReturnType<typeof removeTaskAC>
export type addTaskActionType = ReturnType<typeof addTaskAC>

type ActionsType = removeTaskActionType | addTaskActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
            [action.todolistId]: state[action.todolistId].filter(task=> task.id !== action.taskId)
            }
        case 'ADD-TASK':
            let newTask: TaskType = {  // TaskType
                id: v1(),
                title: action.title,
                isDone: false
            }
            return {
                ...state,
                [action.todolistId]: [newTask, ...state[action.todolistId]] // можно использовать shift
            }
        default:
         return state
    }
}

export const removeTaskAC = (taskId:string, todolistId: string) => {
    return { type: 'REMOVE-TASK', taskId, todolistId} as const
}

export const addTaskAC = (title:string, todolistId: string) => {
    return { type: 'ADD-TASK', title, todolistId} as const
}


