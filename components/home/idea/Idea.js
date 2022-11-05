import React, { Component } from 'react';
import styles from './Idea.module.css'
class Idea extends Component {
    state = {}
    render() {
        return (<section className={styles.services}>
            <div></div>

            <div className={styles.serviceContainer}>
                <h2>درباره اداک</h2>
                <p>
                    اداک، ثمره یک تفکر و یک تصمیم لحظه ای نمی باشد. اداک حاصل
                    <b> 20 سال تجربه </b>
                    در زمینه
                    طراحی و تولید انواع سالنامه، قلم های نفیس ، ست های مدیریتی و هدایای ماندگار است
                    <br />
                    ابتدا با نام تجاری قلم فعالیت خود را از بازار نوروزخان قدیم (در کنار مرحوم استاد حمید رضا فیروزی که یکی از
                    سرنوشت سازان صنف نوشت افزار بوده اند) آغاز نموده است و هم اکنون با نام تجاری قلم و برند اداک در خیابان
                    جمهوری اماده ارئه خدمات به شما عزیزان می باشد.
                    <br />
                    <b>
                        جلب رضایت مشتریان و کارفرمایان با ایده های بکرمان از افتخارات اداک می باشد

                    </b></p>
            </div>
        </section>);
    }
}

export default Idea;
