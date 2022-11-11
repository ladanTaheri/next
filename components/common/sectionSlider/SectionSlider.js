import React, { Component, Fragment } from "react";
import Link from 'next/link';
import Flickity from "react-flickity-component";
import Item from "./card/Item";
import styles from './SectionSlider.module.css';

class SectionSlider extends Component {
    state = { flicktyClasses: ['flicktySlider', 'deactive'] };
    over = () => {
        console.log('over');
        this.setState({ flicktyClasses: ['flicktySlider', 'active'] })
    }
    leave = () => {
        console.log('leave');

        this.setState({ flicktyClasses: ['flicktySlider', 'deactive'] })

    }

    render() {
        const flickityOptions = {
            cellAlign: "right",
            contain: true,
            rightToLeft: true,
            pageDots: false,
            groupCells: true,
        }
        const headerClasses = ['col-md-12', styles.header];
        const href = `/products/${this.props.title}`;
        return (
            <section className={styles.section}>
                <header className="container-fluid" style={{ paddingTop: this.props.top }}>
                    <div className="row">
                        <div className={headerClasses.join(' ')}>
                            <Link href='/products/[name]' as={href}><h2>
                                <img src="/images/home/category-sign.svg" alt="" />
                                {this.props.title}
                            </h2></Link>
                            <Link href='/products/[name]' as={href}>مشاهده همه </Link>
                        </div>
                    </div>
                </header>
                <section onPointerEnter={this.over} onPointerLeave={this.leave} className={this.state.flicktyClasses.join(' ')}>
                    <Flickity options={flickityOptions}>
                        {this.props.items ? this.props.items.map(m => (<Item key={m.id} type={this.props.type} item={m} category={this.props.category}/>)) : null}

                    </Flickity> 
                </section>
            </section>
        );
    }
}


export default SectionSlider