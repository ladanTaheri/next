import React, { Component, Fragment } from 'react';
import { getAllCalendars } from '../../services/calendarService';
import Collection from '../common/collection/Collection';
import SectionSlider from '../common/sectionSlider/SectionSlider';
import About from './about/About';
import Catelogue from './catalogue/Catelogue';
import HeaderSlider from './headerSlider/HeaderSlider';
import styles from './Home.module.css';
import Idea from './idea/Idea';
import { getAllPens } from './../../services/penService';
import { getAllSets } from '../../services/setService';
class NewHome extends Component {
    state = {
        calenders:[],
        pens:[],
        sets:[]
    }

    componentDidMount = () => {
        this.handleGetCalendars();
        this.handleGetPens();
        this.handleGetSets();
      };
      
      handleGetCalendars = async () => {
        try {
          const { data, status } = await getAllCalendars();
          if (status === 200) {
            this.setState({ calenders: data });
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
      handleGetSets = async () => {
        try {
          const { data, status } = await getAllSets();
          if (status === 200) {
            this.setState({ sets: data });
          }
        } catch (err) {
          console.error(err);
        }
      };
    render() {

        return (
            <Fragment>
                <HeaderSlider />
            
                <SectionSlider title="سالنامه" type="سالنامه" items={this.state.calenders} category='calendar'/>
                <SectionSlider title="قلم های نفیس Carteie" type="قلم نفیس" items={this.state.pens} category='pen'/>
                <Collection items={this.state.sets} title="ست های مدیریتی" category='set'/>
                <Catelogue/>
                <Idea />
                <About />
            </Fragment>
        );
    }
}

export default NewHome;
