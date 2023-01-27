import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'


const Notification = (props) => {
  const dispatch = useDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(props.notification.length>0) {
  return (
    <div style={style}>
      {props.notification}
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification