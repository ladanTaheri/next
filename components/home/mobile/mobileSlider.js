import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getAllSliders } from "./../../../services/sliderService";
import config from "../../../services/config.json";
import styles from "./MobileSlider.module.css";

class MobileSlider extends Component {
  state = {
    items: [],
  };

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
    return (
      <Carousel interval={1000} className={styles.carousel}>
        {this.state.items
          ? this.state.items.map((m) => (
              <Carousel.Item interval={1000} key={m.id}>
                <img
                  className="d-block w-100"
                  src={`${config.api}${m.mobile.url}`}
                  alt={m.title}
                />
              </Carousel.Item>
            ))
          : null}
      </Carousel>
    );
  }
}

export default MobileSlider;
