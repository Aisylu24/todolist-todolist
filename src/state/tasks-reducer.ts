import {TasksStateType} from '../App';

export type removeTaskActionType = ReturnType<typeof removeTaskAC>
export type SecondActionType = {
    type: '',
}

type ActionsType = removeTaskActionType | SecondActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return state
        case '':
            return state
        default:
         return state
    }
}

export const removeTaskAC = (taskId:string, todolistId: string) => {
    return { type: 'REMOVE-TASK', taskId, todolistId} as const
}

export const SecondAC = (): SecondActionType => {
    return { type: ''} as const
}


