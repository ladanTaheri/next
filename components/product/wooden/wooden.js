import React, { Component } from 'react';
import styles from "./../Product.module.css";
import { stringFormatToArrayFormat } from '../../../util/split';
import ProductSlider from './../ProductSlider/ProductSlider';
import { getWoodenArtifactById } from '../../../services/woodencalendar';
class Wooden extends Component {
    state = {
        pics: [],
        item:null,
        tags:[],
    }
    componentDidMount = () => {
      this.handleGetItem();
    };
    handleGetItem = async () => {
      try {
        const { data, status } = await getWoodenArtifactById(this.props.id);
  
        if (status === 200) {
          console.log("data");
          console.log(data);
        //   this.setState({ tags:  data.tags.stringFormatToArrayFormat() });
          this.setState({ item: data });
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
               {this.state.item ? <ProductSlider pics={this.state.item.sliderPic} name="Cartie"/>: null} 

            </section>
        );
    }
}

export default Wooden;