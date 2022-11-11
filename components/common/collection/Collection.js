import React, { Component } from 'react';
import Link from 'next/link';
 import Flickity from "react-flickity-component";
import styles from './Collection.module.css';
import config from '../../../services/config.json';
import { Image } from 'next/image';

class Collection extends Component {
    state = {
    }
    render() {
        const flickityOptions = {
            cellAlign: "right",
            contain: true,
            rightToLeft: true,
            pageDots: false,
            groupCells: true
        }
        const headerClasses = ['col-md-12', styles.header]
        const href = `/sets/${this.props.title}`;

        return (
            <section className={styles.section}>
                <header className="container-fluid">
                    <div className="row">
                        <div className={headerClasses.join(' ')}>
                            <Link href='/sets/[name]' as={href}><h2>
                                <img src="/images/home/category-sign.svg" alt="" />
                                {this.props.title}
                            </h2></Link>
                            <Link href='/sets/[name]' as={href}><span>مشاهده همه</span></Link>
                        </div>
                    </div>
                </header>

                <Flickity options={flickityOptions} className={styles.carousel}>
                    {this.props.items ? this.props.items.map(m => (
                       <div key={m.id}><Link href='/product/[id]' as={`/product/${m.id}`}><Image src={`${config.api}/${m.mainPic.url}`} alt="" /></Link></div>
                    )) : null}

                </Flickity> 

            </section>
        );
    }
}

export default Collection;