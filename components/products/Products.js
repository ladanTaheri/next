import React, { Component } from 'react';
import Item from '../common/sectionSlider/card/Item';
import styles from './Products.module.css';
import { getAllCalendars } from './../../services/calendarService';
import { getAllPens } from '../../services/penService';
import { getAllWoodenArtifact } from './../../services/woodencalendar';
import { getAllDeskCalendars } from './../../services/deskCalendarService';
class Products extends Component {
    state = {
        calendars: [],
        pens: [],
        desk_calenders:[],
        wooden:[]

    }
    componentDidMount = () => {
            this.handleGetCalendars();
            this.handleGetPens();
            this.handleGetWoodenArtifact();
            this.handleGetDeskCalendar();
          };
          handleGetDeskCalendar = async () => {
            console.log("desktop calendar");
            try {
              const { data, status } = await getAllDeskCalendars();
              if (status === 200) {
                this.setState({ desk_calenders: data });
              }
            } catch (err) {
              console.error(err);
            }
          };
          handleGetWoodenArtifact = async () => {
            try {
              const { data, status } = await getAllWoodenArtifact();
              if (status === 200) {
                this.setState({ wooden: data });
              }
            } catch (err) {
              console.error(err);
            }
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
                    {this.props.title === "محصولات چوبی" ? this.state.wooden.map(m => <Item key={m.id} type='چوبی' item={m}  category='wooden'/>) : null}
                    {this.props.title === "تقویم رومیزی"? this.state.desk_calenders.map(m => <Item key={m.id} type='رومیزی' item={m}  category='deskcalendar'/>) : null}
               
               </section>
              
            </section>
        );
    }
}

export default Products;
