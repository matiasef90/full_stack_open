import './index.css'

export const Notification = ({info}) => {
  return (<div className={`notification-${info.style}`}>
    <h1>{info.text}</h1>
  </div>)
}