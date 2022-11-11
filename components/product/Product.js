import React, { Component } from 'react';
import { getSetsById } from '../../services/setService';
import styles from "./Product.module.css";
import ProductSlider from './ProductSlider/ProductSlider';
class Product extends Component {
    state = {
        pics: [],
        set:null,
        tags:[],
    }
    componentDidMount = () => {
      this.handleGetSet();
    };
    handleGetSet = async () => {
      try {
        const { data, status } = await getSetsById(this.props.id);
  
        if (status === 200) {
          console.log("data");
          console.log(data);
        //   this.setState({ tags:  data.tags.stringFormatToArrayFormat() });
          this.setState({ set: data });
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
                {/* <ProductSlider pics={this.state.pics} name={this.props.title}/> */}
               { this.state.set ? <ProductSlider pics={this.state.set.sliderPics} name={this.state.set.name} />: null} 


            </section>
        );
    }
}

export default Product;