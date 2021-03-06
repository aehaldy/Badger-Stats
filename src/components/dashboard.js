import React from 'react';
import {Programs} from './programs'
import {Demographics} from './demographics'
import {Incomes} from './incomeLvls'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// The responsive options are not yet fully integrated
// but this serves as a placeholder for future possibilities:
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1124, min: 850 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 850, min: 350 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 10,
  },
};

export const Dashboard = () => {
  return (
    <div
      style={{
        paddingBottom: '30px',
        position: 'relative',
      }}
    >
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        renderDotsOutside={true}
        responsive={responsive}
        ssr={false}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={'mobile'}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Demographics />
        <Incomes />
        <Programs />
      </Carousel>
    </div>
  );
};
