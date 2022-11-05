import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './HeaderSlider.module.css';

class HeaderSlider extends Component {
    render() {

        const imgClasses = ['d-block', 'w100', styles.item]
        return (
            <Carousel className={styles.carousel}>
                <Carousel.Item>
                    <img
                        className={imgClasses.join(' ')}
                        src="/images/slider/autumn-leaves.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className={styles.carouselCaption}>
                        <h2>سالنامه</h2>
                        <h3>Calender year you obtain them</h3>
                        <a  className={`btn ${styles.btn}`}>مشاهده همه</a>


                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={imgClasses.join(' ')}
                        src="/images/slider/pen.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className={styles.carouselCaption}>
                        <h2>قلم های نفیس Carteie</h2>
                        <h3>sumptuous writing</h3>
                        <a  className={`btn ${styles.btn}`}>مشاهده همه</a>


                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className={imgClasses.join(' ')}
                        src="/images/slider/man.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className={styles.carouselCaption}>
                        <h2>ست های مدیریتی</h2>
                        <h3>A Trendy, luxury , Gift collection</h3>
                        <a  className={`btn ${styles.btn}`}>مشاهده همه</a>


                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className={imgClasses.join(' ')}
                        src="/images/slider/power-bank.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className={styles.carouselCaption}>
                        <h2>پاوربنک</h2>
                        <h3>Gifting solution for all</h3>
                        <a  className={`btn ${styles.btn}`}>مشاهده همه</a>

                    </Carousel.Caption>

                </Carousel.Item>



            </Carousel>
       
       );
    }
}

export default HeaderSlider;