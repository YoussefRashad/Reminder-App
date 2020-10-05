
import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from './ActionTypes'

export const addReminder = (text, date)=>{
    return { type: ADD_REMINDER, payload: { text, date}, ID: Math.random() }
}

export const removeReminder = (ID)=>{
    return { type: REMOVE_REMINDER, ID }
}

export const clearReminder = ()=>{
    return { type: CLEAR_REMINDER }
}
