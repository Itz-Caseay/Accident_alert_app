import React from 'react';
import './Form.css'

function Form() {

  return (
    <div>
      <form method="POST">
        <input type="text" placeholder="What kund of Accident(eg. Car accident, fure accident, etc">
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form