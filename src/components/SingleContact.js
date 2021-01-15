import React from 'react'

function SingleContact(props) {
  return (
    <div>
      <p>Name: {props.firstName}</p>
      <p>Surname: {props.lastName}</p>
      <p>Phone: {props.phone}</p>
      <p>Gender: {props?.gender}</p>
      <p>Messages: {props.message.map((el, i) => (el = el[i]))}</p>
    </div>
  )
}

export default SingleContact
