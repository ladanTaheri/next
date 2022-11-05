import React, { Component } from 'react';
import { getCalendarsById } from '../../../services/calendarService';
import styles from "./../Product.module.css";
import { stringFormatToArrayFormat } from '../../../util/split';
import ProductSlider from './../ProductSlider/ProductSlider';
class Calendar extends Component {
    state = {
        pics: [],
        calendar:null,
        tags:[],
    }
    componentDidMount = () => {
      this.handleGetCalendar();
    };
    handleGetCalendar = async () => {
      try {
        const { data, status } = await getCalendarsById(this.props.id);
  
        if (status === 200) {
          console.log("data");
          console.log(data);
        //   this.setState({ tags:  data.tags.stringFormatToArrayFormat() });
          this.setState({ calendar: data });
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
               {this.state.calendar ? <ProductSlider pics={this.state.calendar.slider} name={this.state.calendar.name}/>: null} 

            </section>
        );
    }
}

export default Calendar;