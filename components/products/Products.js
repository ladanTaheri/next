import React, { Component } from 'react';
import Item from '../common/sectionSlider/card/Item';
import styles from './Products.module.css';
import { getAllCalendars } from './../../services/calendarService';
import { getAllPens } from '../../services/penService';
class Products extends Component {
    state = {
        calendars: [],
        pens: []

    }
    componentDidMount = () => {
            this.handleGetCalendars();
            this.handleGetPens();
          };

    handleGetCalendars = async () => {
        try {
          const { data, status } = await getAllCalendars();
          if (status === 200) {
            this.setState({ calendars: data });
          }
        } catch (err) {
          console.error(err);
        }
      };
      handleGetPens = async () => {
        try {
          const { data, status } = await getAllPens();
          if (status === 200) {
            this.setState({ pens: data });
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
                                {this.props.title}
                            </h2>

                        </div>
                    </div>
                </header>

                <section>
                {/* {this.state.calendars !== [] ? this.state.calendars.map(m => <Item key={m.id} type={m.type} item={m} />) : null} */}

                    {this.props.title === "سالنامه" ?  this.state.calendars.map(m => <Item key={m.id} type='سالنامه' item={m} category='calendar'/>) :null}
                    {this.props.title === "قلم های نفیس Carteie" ? this.state.pens.map(m => <Item key={m.id} type='قلم نفیس' item={m}  category='pen'/>) : null}
                </section>
              
            </section>
        );
    }
}

export default Products;
