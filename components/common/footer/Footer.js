import React, { Component } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';


class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className={`container-fluid ${styles.footer}`}>
                <div className="row">
                    <div className="col-md-4 d-sm-none d-md-block">
                        <img src="/images/footer/pen.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        {/* <h5 className={styles.title}>دسترسی سریع</h5> */}
                        <div className="row">
                            {/* <div className={`col-md-6 ${styles.links}`}>
                                <ul>
                                 <li><a href="#">سالنامه اداک</a></li>
                                    <li><a href="#">ست های مدیریتی</a></li>
                                    <li><a href="#">قلم های نفیس Carteie</a></li> 
                                  <li><a href="#">قلم های نفیس Delta</a></li>
                                    <li><a href="#">قلم های نفیس Sheaffer</a></li>
                                    <li><a href="#">قلم های نفیس Forever</a></li>
                                    <li><a href="#">قلم های نفیس Cross</a></li>
                                    <li><a href="#">قلم های نفیس Melody</a></li> 
                                   <li><a href="#">پاوربنک</a></li> 
                                </ul>
                            </div> */}
                            <div className={`col-md-6 ${styles.links}`}>
                                <h5 className={styles.title}>دسترسی سریع</h5>

                                <ul>
                                    <li>
                                        <Link href='/products/[name]' as='/products/سالنامه'><span className={`nav-link ${styles.navLink} px-2`} >سالنامه</span></Link>
                                    </li>
                                    <li>
                                        <Link href='/sets/[name]' as='/sets/ست های مدیریتی'><span className={`nav-link ${styles.navLink} px-2`} >ست های مدیریتی</span></Link>
                                    </li>
                                    <li>
                                        <Link href='/products/[name]' as='/products/قلم های نفیس Carteie'><span className={`nav-link ${styles.navLink} px-2`}>قلم های نفیس</span></Link>
                                    </li>
                                    <Link href="/about"><li>
                                        <span className={`nav-link ${styles.navLink} px-2`} >درباره اداک</span>
                                    </li></Link>
                    
                                    <Link href="/blog"><li className="nav-item px-2">
                                        <span className={`nav-link ${styles.navLink} px-2`} >بلاگ</span>
                                    </li></Link>
                                  
                                    {/* <li><a href="#">جاکلیدی</a></li>
                                    <li><a href="#"> جاکارتی ترموفلز</a></li>
                                    <li><a href="#">فلش مموری</a></li>
                                    <li><a href="#">ساعت مچی</a></li>
                                    <li><a href="#">فلاکس</a></li>
                                    <li><a href="#">مونوپاد</a></li>
                                    <li><a href="#">یادداشت</a></li>
                                    <li><a href="#">لیوان</a></li>
                                    <li><a href="#">متر</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h5 className={styles.title}>تماس</h5>
                        <address>
                            <i className={`fa fa-map-marker ${styles.green}`}></i>
                            خیابان جمهوری-نرسیده به میدان بهارستان-پلاک ۲۹ فروشگاه قلم
                        </address>
                        <p className={styles.links}>
                            <i className={`fa fa-phone ${styles.green}`}></i>

                            <a href="tel:+982133995710"> 021-33995710</a> |
                            <a href="tel:+982133995831"> 021-33995831</a>
                        </p>
                        <p className={styles.links}>
                            <i className={`fa fa-mobile ${styles.green}`}></i>

                            <a href="tel:+989123755404"> 0912-3755404</a>
                        </p>
                        <h5>برندها</h5>
                        <img src="/images/footer/brands.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;
