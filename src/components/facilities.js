import React, { useState, Fragment } from 'react'
import Facilities1 from './facility1'
import Facilities3 from './facility3'
import Facilities2 from './facility2'


export default function Facilities(){

    const [view, setView] = useState('homeView')

    return <div className='container is-fullhd'>
        <div class="tabs is-centered">
  <ul>
    <li onClick={()=> setView('homeView')}><p className='button is-primary'>Home View</p></li>
    <li onClick={()=> setView('sporting')}><p className='button is-success'>Sporting</p></li>
    {/* <li onClick={()=> setView('entertainment')}><p className='button is-primary'>Enatertainment</p></li> */}
  </ul>
</div>
       {view==='homeView'? <Fragment>
       <h1 className='title has-text-centered'>Home View</h1>
        <Facilities1/>
        <br/>
        <br/>
       </Fragment>:null }
       {view==='sporting'? <Fragment>
       <h1 className='title has-text-centered'>Sporting</h1>
        <Facilities2/>
        <br/>
        <br/>
       </Fragment>:null }
{/* 
       {view==='entertainment'? <Fragment>
       <h1 className='title has-text-centered'>Entertainment</h1>
        <Facilities3/>  <br/>
        <br/>
       </Fragment>:null } */}

    </div>
}