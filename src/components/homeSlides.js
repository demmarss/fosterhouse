import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from './images/Bathroom.jpg'
import image2 from './images/living.jpg'
import image3 from './images/closest.jpg'
import image4 from './images/hallway.jpg'
import image5 from './images/home2.jpg'
import image6 from './images/home.jpg'


export default function FacilitiesSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return <Slider {...settings} className='container'>
        {CardInformation.map(info=>
            <div>
            {CardHere(info)}
        </div>
            )}
    </Slider>
}

function CardHere(Cardinfor){
return <div>
    <p class="title is-4 has-text-centered">{Cardinfor.title}</p>
    {/* <p class="subtitle is-6 has-text-centered">{Cardinfor.description}</p> */}
<figure class="image is-2by2">
    <img src={Cardinfor.imageSrc} alt="Placeholder image"/>
</figure>
</div>
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
        description: "Eat with comfort "
    }, {
        imageSrc: image6,
        title: "Kitchen",
        description: "Tidy and well furnished"
    },

]
