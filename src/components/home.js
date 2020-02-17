import React from 'react';
import logo from './logo2.jpg';
import {Link} from "react-router-dom";
import FacilitiesSlider from './homeSlides';

export default function Home() {
    return (
        <React.Fragment>
            <section class="hero is-primary is-medium">
                <div class="hero-body">
                    <div class="container">
                        <div className='columns'>
                            <div className='column'>
                                {Content1} </div>
                            <div className='column'>
                                {Content2} </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <br/>
            <br/>
            <FacilitiesSlider/>
            <br/>
            <br/>
            <section class="hero is-success">
                <div class="hero-body">
                    <div class="container">
                        <div className='columns'>
                            <div className='column has-text-centered'>
                                <h1 className='title is-1'>
                                    Some of Our Daily
                                </h1>
                                <h1 className='title is-1'>
                                    Support Services
                                </h1>
                            </div>
                            <div className='column'>
                                <p className='subtitle is-5'> Delicious Meals to your taste </p> <hr/>
                                <p className='subtitle is-5'> Transportation to your preferred location </p> <hr/>
                                <p className='subtitle is-5'> Medication Assistance and Monitoring </p> <hr/>
                                <p className='subtitle is-5'> Appointment follow up </p> <hr/>
                                <p className='subtitle is-5'> Entertainment </p> <hr/>
                                <p className='subtitle is-5'> Recreation </p> <hr/>
                                <p className='subtitle is-5'> Comprehensive Supervision </p> <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    
            <section class="hero is-info">
                <div class="hero-body">
                    <div class="container">
                        <div className='columns'>
                            <div className='column is-4'>
                                {mission} </div>
                            <div className='column is-3'></div>
                            <div className='column is-4'>
                                {vission} </div>

                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>
    );
}

const Content1 = <article class="media">
    <figure class="media-left">
        <p class="image is-96x96">
            <img src={logo}/>
        </p>
    </figure>
    <div class="media-content">
        <div class="content">
            <h1 class="title is-1">
                Caring for Adult
            </h1>
            <h2 class="subtitle">
                We always care
            </h2>
            
            <Link to='/contactUs'>
            <button class="button is-success">More About us</button>
                </Link>
        </div>

        <p>
            1318 32nd Street Circle South
        </p>
        <p>
            Moorhead, Minnesota 56560
        </p>
        <p>218-303-2185, 609-287-0169
        </p>
        <p>
            adultcare@socialworker.net, caringforadult@gmail.com
        </p>

    </div>
</article>

const Content2 = <div className='columns'>
    <div className='column'>
        <article class="message is-info ">
            <div class="message-header">
                <h1 className='title is-4'>
                    Excellent Facilities
                </h1>
            </div>
            <div class="message-body">
                <p class="subtitle is-5 has-text-black">Welcoming home</p>
                <p class="subtitle is-5 has-text-black">Sporting</p>
                <p class="subtitle is-5 has-text-black">Entertainment</p>
                <Link to='/facilities'>
                <button class="button is-info">Check out our facilities</button>
                </Link>
                
            </div>
        </article>
    </div>
    <div className='column'>
        <article class="message is-success">
            <div class="message-header">
                <h1 className='title is-4'>
                    Safe Handling
                </h1>
            </div>
            <div class="message-body">
                <p class="subtitle is-5 has-text-black">Qualified staff</p>
                <p class="subtitle is-5 has-text-black">Ethical professionals</p>
                <p class="subtitle is-5 has-text-black">Adequate Attention</p>
                
                <Link to='/staff'>
                <button class="button is-success">Check out our staff</button>
                </Link>
            </div>
        </article>
    </div>
</div>

const mission = <article class="message is-primary ">
    <div class="message-header">
        <h1 className='title is-3'>
            Our Mission
        </h1>
    </div>
    <div class="message-body">
        <p className='subtitle is-5 has-text-black'>Caring for Adult serves everyone to achieve rest, well-being, peace, fulfilment and relation without segregation.</p>
        <p className='subtitle is-5 has-text-black'>Located within serene Enviroment to ensure much needed care and tranquility.</p>
        <p className='subtitle is-5 has-text-black'>Establishing an Intelligent Based Care through providing best services and resources.</p>
        <p className='subtitle is-5 has-text-black'>Caring for Adult provide out-standing 24-hour care in a home setting according to each Individual Service Plan for Adult who are unable to live independently due to disability</p>
    </div>
</article>

const vission = <article class="message is-success ">
    <div class="message-header">
        <h1 className='title is-3'>
            Our Vission
        </h1>
    </div>
    <div class="message-body">
        <p className='subtitle is-5 has-text-black'>To Support the State of Minnesota to provide a home setting for Adults who are unable to live independently due to disability Core Values.</p>
        <p className='subtitle is-5 has-text-black'>Sincerity: We ensure that our services are rendered with utmost truthfulness and honor</p>
        <p className='subtitle is-5 has-text-black'>Dedication: We put all our time, energy and needed resources to assist someone experience peace and love</p>
        <p className='subtitle is-5 has-text-black'>Dutiful: We work with high level of skill without any reluctance.</p>
        <p className='subtitle is-5 has-text-black'>Meticulousness: We act professionally and aim to high quality standard in our services.</p>
    </div>
</article>
