import React, { Component } from 'react';
import styles from './About.module.css';
class About extends Component {
    state = {}
    render() {
        return (
            <section className={styles.about}>

                <img src="/images/home/about.png" className={styles.aboutimg} />
                <div className={styles.aboutContainer}>
                <h2>
                    ما به بهترین ها اعتقاد داریم
            </h2>
                <p>
                    اداک برای مشتریان و کارفرمایان خوش فکری خلق شده است که تاثیر تفاوت هدایای جذاب و جدید را خوب درک میکنند .
                    آنان هدایای ویژه خود را در میان محصولات اداک می یابند و یا توسط اداک می سازند.
    <br />
    تا به امروز، تنوع محصولات تبلیغاتی اداک بیش از 1500 هدیه تبلیغاتی نو و کاربردی می باشد که تمامی آنها در سایت
    و شبکه اجتماعی منتشر نشده است. زیرا با توجه به سیاست های داخلی گروه و هم چنین احترام به سلیقه و درخواست اکثر
    مشتریان عزیزمان، برای بکر ماندن ایده ها و وجود هدایای جذاب و نو برای مخاطبین، از این امر اجتناب کرده ایم .
    <br />
                    <b>با اداک بکر بودن ایده را تجربه کنید</b>

                </p>
         
                </div>
            </section>
        );
    }
}

export default About;
