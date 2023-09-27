import React from 'react'
import { connect } from 'react-redux'

function NoticeDetail(Data) {
    const Notice=Data.Data.data
  return (
    <div>
      
    </div>
  )
}
const mapStateToProps=State=>({
    Data:State.DataPass
})
export default connect (mapStateToProps,{})(NoticeDetail)
