
import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from '../Actions/ActionTypes'

const reducer = ( state = [], action )=>{

    state = localStorage.getItem('reminderItems') ? JSON.parse(localStorage.getItem('reminderItems')): []

    switch(action.type){
        case ADD_REMINDER:
            const AddItem = {text: action.payload.text , date: action.payload.date, ID: action.ID }
            localStorage.setItem('reminderItems', JSON.stringify([...state, AddItem]))
            return [...state, AddItem]

        case REMOVE_REMINDER:
            const RemovedReminders = state.filter((item)=> item.ID !== action.ID)
            localStorage.setItem('reminderItems', JSON.stringify(RemovedReminders))
            return RemovedReminders;

        case CLEAR_REMINDER:
            localStorage.removeItem('reminderItems')
            return []

        default:
            return state
    }
}

export default reducer