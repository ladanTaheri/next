import React, { Component, Fragment } from 'react';
import styles from './Contact.module.css';
import MyMap from './Map';
class Contact extends Component {
    state = {}
    render() {
        return (
            <section className={styles.main}>
                <section className={styles.contact}>

                    <h1 className={`${styles.heading} pb-2`}>با ما در ارتباط باشید</h1>
                    <address>
                        <i className={`fa fa-map-marker ${styles.icons}`}></i>

                        خیابان جمهوری-نرسیده به میدان بهارستان-پلاک ۲۹ فروشگاه قلم

                    </address>
                    
                    <p className={styles.links}>
                        <i className={`fa fa-phone ${styles.icons}`}></i>

                        <a href="tel:+982133995710"> 021-33995710</a> |
                        <a href="tel:+982133995831"> 021-33995831</a>


                    </p>
                    <p className={styles.links}>
                        <i className={`fa fa-mobile ${styles.icons}`}></i>

                        <a href="tel:+989123755404"> 0912-3755404</a>
                    </p>

                </section>
                <div className={styles.contact_page_map}>
                        <MyMap />
                        {/* <iframe className={styles.contact_page_map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6480.8248255792505!2d51.42714!3d35.6914676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01bd70a39513%3A0x893a85340b525045!2z2YHYsdmI2LTar9in2Ycg2YLZhNmF!5e0!3m2!1sen!2s!4v1674812187220!5m2!1sen!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                <div className={styles.messageBox}>
                    <div>
                        <h4 className={styles.message}>ارسال پیام</h4>
                        <form>
                            <div className="form-row">


                                <div className="form-group col-md-6">
                                    <input className="form-control text-right"
                                        placeholder="تلفن" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text"
                                        className="form-control text-right"
                                        placeholder="نام " />
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="email"
                                        className="form-control text-right"
                                        placeholder="ایمیل" />
                                </div>
                                <div className="form-group col-md-12">

                                    <textarea className="form-control text-right"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="پیام"></textarea>
                                </div>

                                <button type="button"
                                    className={`btn button btn-block ${styles.btn}`}> ارسال</button>
                            </div>
                        </form>

                    </div>
                </div>

            </section>

        );

    }
}

export default Contact;
