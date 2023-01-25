import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './HeaderSlider.module.css';
import { getAllSliders } from './../../../services/sliderService';
import config from '../../../services/config.json';

class HeaderSlider extends Component {
    state = {
        items:[]
    }

    componentDidMount = () => {
        this.handleGetItems();
      };

    handleGetItems = async () => {
        console.log("cat");

        try {
          const { data, status } = await getAllSliders();
          if (status === 200) {
            this.setState({ items: data });
            console.log(data);
          }
        } catch (err) {
          console.error(err);
        }
      };

    render() {

        const imgClasses = ['d-block', 'w100', styles.item]
        return (
            <Carousel className={styles.carousel}>

        {this.state.items ? this.state.items.map(m => (
          <Carousel.Item key={m.id}>
          <img className={imgClasses.join(' ')} src={`${config.api}${m.pic.url}`} alt={m.title}/>
          <Carousel.Caption className={styles.carouselCaption}><h2>{m.title}</h2><h3>{m.title2}</h3><a  href={m.link} className={`btn ${styles.btn}`}>مشاهده همه</a></Carousel.Caption>
          </Carousel.Item>
         )) : null}



            </Carousel>
       
       );
    }
}

export default HeaderSlider;