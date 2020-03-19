import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import AppContext from '../contexts/AppContext'
import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import reducer from '../reducers'

const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState )

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
 