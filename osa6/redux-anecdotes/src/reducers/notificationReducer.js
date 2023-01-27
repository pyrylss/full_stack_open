import { createSlice } from "@reduxjs/toolkit"
//import  setTimeout  from 'react'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: [],
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        clearNotification() {
            return ''
        }
    }
})
export const {setNotification, clearNotification} = notificationSlice.actions

let timeoutID = undefined

export const notification = anecdote => {
   return async dispatch => {
    if(timeoutID) clearTimeout(timeoutID)
   dispatch(setNotification(`you voted '${anecdote.content}'`))
   timeoutID = setTimeout(() => {
    dispatch(clearNotification())
   }, 5000)
   }
}


export default notificationSlice.reducer