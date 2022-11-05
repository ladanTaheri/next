import React, { Component } from 'react';
import { getPensById } from '../../../services/penService';
import styles from "./../Product.module.css";
import ProductSlider from './../ProductSlider/ProductSlider';
class Pen extends Component {
    state = {
        pics: [],
        pen:null,
        tags:[],
    }
    componentDidMount = () => {
      this.handleGetPen();
    };
    handleGetPen = async () => {
      try {
        const { data, status } = await getPensById(this.props.id);
  
        if (status === 200) {
          console.log("data");
          console.log(data);
        //   this.setState({ tags:  data.tags.stringFormatToArrayFormat() });
          this.setState({ pen: data });
         console.log('111' )
        //  console.log(data.tags.stringFormatToArrayFormat() )
        }
      } catch (err) {
        console.error(err);
      }
    };
    render() {
        return (
            <section className={styles.section}>
                <header className="container-fluid">
                    <div className="row">
                        <div className={`col-md-12 ${styles.header}`}>
                            <h2>
                                <img src="/images/home/category-sign.svg" alt="" />
                                {this.props.id}
                            </h2>

                        </div>

                    </div>
                </header>
               { this.state.pen ? <ProductSlider pics={this.state.pen.sliderPic} name={this.state.pen.name}/>: null} 


            </section>
        );
    }
}

export default Pen;