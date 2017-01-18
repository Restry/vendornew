import React, { Component, PropTypes } from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselSlide extends Component {
  state = {
    index: 0,
    direction: null
  }

  handleSelect = (selectedIndex, e) => {
    // alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img width={1200} height={500} alt="" src={require('../../assets/images/banner1.jpg')} />
          <Carousel.Caption>
            <h3>刷刷</h3>
            <p>刷刷.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1200} height={500} alt="" src={require('../../assets/images/banner2.jpg')} />
          <Carousel.Caption>
            <h3>刷刷 label</h3>
            <p>刷刷 adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

CarouselSlide.propTypes = {

};

export default CarouselSlide;