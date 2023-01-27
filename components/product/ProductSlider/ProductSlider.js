import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './ProductSlider.module.css';
import config from '../../../services/config.json';


class ProductSlider extends Component {
    render() {

        return (
            <Carousel className="product">
                {this.props.pics && this.props.pics !== [] ? this.props.pics.map(m => <Carousel.Item  key={m.id}><img className="d-block w-50 mojgan" 
                    src={`${config.api}${m.url}`}
                    alt={m.caption} /></Carousel.Item>) : null}
            </Carousel>
        );
    }
}

export default ProductSlider;