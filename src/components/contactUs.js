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
 
        <article class="tile is-child notification is-primary">
        <div className="columns">
        <div className="column">
        <p class="title">We are glad to meet you</p>
          </div>
          <div className="column">
          <h1 className="title is-3">Location Map</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.132635097589!2d-96.7307921843952!3d46.86076217914231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c8c8ccb2ddc245%3A0x607bc368dfa1e721!2s1318+32nd+St+Cir+S%2C+Moorhead%2C+MN+56560!5e0!3m2!1sen!2sus!4v1532669770816"/>
        </div>
        </div>
          
          <div class="content">
            
          </div>
        </article>
      </div>
    </div>
  </div>
  </div>
}

