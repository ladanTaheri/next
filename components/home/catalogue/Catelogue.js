import React, { Component } from 'react';
import styles from './Catelogue.module.css';
import { getAllCatelogues } from './../../../services/catalogue';
import config from '../../../services/config.json';

class Catelogue extends Component {
    state = {
        items:[]
    }

    componentDidMount = () => {
        this.handleGetItems();
      };

    handleGetItems = async () => {
        console.log("cat");

        try {
          const { data, status } = await getAllCatelogues();
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
            <section className={styles.section}>
                <header className="container-fluid">
                    <div className="row">
                        <div className={`col-md-12 ${styles.header}`}>
                            <h2>
                                <img src="/images/home/category-sign.svg" alt="" />
                               کاتالوگ ها
                            </h2>
                        </div>
                    </div>
                </header>
                <section className={styles.section}>

                {this.state.items ? this.state.items.map(m => (
                <div key={m.id} className={styles.cat}><a href={`${config.api}${m.file.url}`}><img src={`${config.api}${m.cover.url}`} alt="" /></a></div>
                )) : null}

               
                </section>


            </section>
        );
    }
}

export default Catelogue;