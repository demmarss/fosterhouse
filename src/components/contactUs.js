import React from 'react'


export default function ContactUs(){
    return <div className='container'>
    <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p class="title">Call Us</p>
            <p class="subtitle">218-303-2185</p>
            <p class="subtitle">609-287-0169</p>
          </article>
          <article class="tile is-child notification is-warning">
            <p class="title">Shoot Us an Email</p>
            <p class="subtitle">adultcare@socialworker.net</p>
            <p class="subtitle">caringforadult@gmail.com</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
          <p class="title">Visit Us</p>
          <br/>
          
            <p class="subtitle">1318 32nd Street Circle South,</p>
            <p class="subtitle">Moorhead</p>
            <p class="subtitle">Minnesota 56560</p>
            
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">We are glad to meet you</p>
          <div class="content">
            
          </div>
        </article>
      </div>
    </div>
  </div>
  </div>
}

