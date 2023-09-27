import React from 'react'
import './Subscrib.css'

export default function Subscrib() {
  return (
  <>
  <div class="container">
    <form class="form">
      <div class="descr">Subscribe now for competition updates</div>
      <div class="input">
          <input required="" autocomplete="off" type="text"/>
          <label for="name">Name</label>
      </div>

      <div class="input">
          <input required="" autocomplete="off" name="email" type="text"/>
          <label for="email">E-mail</label>
      </div>

      <div class="input">
          <textarea required="" cols="30" rows="1" id="message"></textarea>
          <label for="message">Message</label>
      </div>
      <button>Send message →</button>
    </form>
</div>

  </>
  )
}
