import React, { Component } from "react";
import Slider from "react-slick";


import image1 from './images/Bathroom.jpg'
import image2 from './images/living.jpg'
import image3 from './images/closest.jpg'
import image4 from './images/hallway.jpg'
import image5 from './images/home2.jpg'
import image6 from './images/home.jpg'
import image7 from './images/room.jpg'
import image8 from './images/LivingRoom2.jpg'



export default class Facilities1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }
    
    return (
      <div>
      
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...settings}
        >
          {CardInformation.map(info=>
            <div>
            {CardHere(info)}
        </div>
            )}
        </Slider>
        
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={8}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {CardInformation.map(info=>
            <div>
            {CardHereImageOnly(info)}
        </div>
            )}
        </Slider>
      </div>
    );
  }
}


function CardHere(Cardinfor){
    return <div className='columns'>
        <div className='column is-4'></div>
        <div className='column is-4'>
    <figure class="image is-2by2">
        <img src={Cardinfor.imageSrc} alt="Placeholder image"/>
    </figure>
    <p class="title is-4 has-text-centered">{Cardinfor.title}</p>
        <p class="subtitle is-6 has-text-centered">{Cardinfor.description}</p>,,
    </div>
        <div className='column is-4'></div>
        </div>
    }

    function CardHereImageOnly(Cardinfor){
        return <figure class="image is-2by2">
        <img src={Cardinfor.imageSrc} alt="Placeholder image"/>
    </figure>
        }

    const CardInformation = [
        {
            imageSrc: image1,
            title: "Bathroom",
            description: "Very clean and welcoming"
        }, {
            imageSrc: image2,
            title: "Living room",
            description: "Great entertainment and gaming"
        }, {
            imageSrc: image3,
            title: "Closet",
            description: "Lots of room for you belongings"
        }, {
            imageSrc: image4,
            title: "Hallway",
            description: "Spacious for free movement"
        }, {
            imageSrc: image5,
            title: "Dinning",
            description: "Eat with confort "
        }, {
            imageSrc: image6,
            title: "Kitchen",
            description: "Tidy and well furnished"
        },{
            imageSrc: image7,
            title: "Room",
            description: "Nice room"
        }, {
            imageSrc: image8,
            title: "Main Living Room",
            description: "At your confort"
        },    
    ]   