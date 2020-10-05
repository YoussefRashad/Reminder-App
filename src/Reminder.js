import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { MdDelete } from 'react-icons/md'

import { connect } from 'react-redux'
import { addReminder, clearReminder, removeReminder } from './Actions/ActionCreators'

import Logo from './reminder.png'

const Reminder = ( {reminders, addReminder, clearReminder, removeReminder } ) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('');

    useEffect(()=>{
        setText('')
        setDate('')
    }, [reminders])

    const renderReminders = ()=>{
        return reminders.map((item, index)=>{
            return(
                <li key={index} className="list-group-item item">
                    <div>{item.text}</div>
                    <div>{moment(item.date).fromNow()}</div>
                    <i
                        className="closeIcon remove"
                        onClick={()=> removeReminder(item.ID)}
                    >
                        <MdDelete />
                    </i>
                </li>
            )
        })
    }
    
    return (
        <div className="App">
            <img src={Logo} alt="Reminder App" />
            <div className="reminder-title">
                <h2 >What should you do ?</h2>
            </div>
            <div>
                <input 
                    type="text"
                    className="form-control item"
                    placeholder="Enter what you think ... ?" 
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                />
                <input 
                    type="datetime-local"
                    className="form-control item"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}
                />

                <button
                    className="btn btn-primary btn-block"
                    onClick={(e)=> addReminder(text, date)}
                    disabled = {text && date ? false : true}
                >
                    Add Reminder
                </button>

                <ul className="list-group">
                    {renderReminders()}
                </ul>

                { 
                    <button
                        className="btn btn-danger btn-block"
                        onClick={clearReminder}
                        disabled = {reminders.length  ? false : true}
                    >
                        Clear Reminders
                    </button>
                }
            </div>
        </div>
    )
}

Reminder.propTypes = {
    reminders: PropTypes.array.isRequired
}


export default connect((state)=>({
    reminders: state
}), {
    addReminder, clearReminder, removeReminder
})(Reminder)
