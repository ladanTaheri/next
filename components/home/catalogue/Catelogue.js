import React, { Component } from 'react';
import styles from './Catelogue.module.css';
class Catelogue extends Component {
    state = {}
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
                    <div className={styles.cat}><img src="/images/pdf/calenders.jpg" alt="" /></div>
                    <div className={styles.cat}><img src="/images/pdf/main.png" alt="" /></div>
                    <div className={styles.cat}><img src="/images/pdf/set-1.jpg" alt="" /></div>
                </section>


            </section>
        );
    }
}

export default Catelogue;