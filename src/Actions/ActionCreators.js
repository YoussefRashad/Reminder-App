
import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from './ActionTypes'
import uuid from 'uuid/v4'

export const addReminder = (text, date)=>{
    return { type: ADD_REMINDER, payload: { text, date}, ID: uuid() }
}

export const removeReminder = (ID)=>{
    return { type: REMOVE_REMINDER, ID }
}

export const clearReminder = ()=>{
    return { type: CLEAR_REMINDER }
}