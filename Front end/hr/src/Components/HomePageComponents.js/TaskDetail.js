import React from 'react'
import { connect } from 'react-redux'

function TaskDetail(Data) {
    const Task=Data.Data.data
  return (
    <div>
      
    </div>
  )
}
const mapStateToProps=State=>({
    Data:State.DataPass
})
export default connect (mapStateToProps,{})(TaskDetail)
