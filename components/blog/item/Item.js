import React, { Component } from "react";
import styles from "../Blog.module.css";
import { Fragment } from "react";
import Link from "next/link";
import config from "../../../services/config.json";
import moment from "moment-jalaali";

class Item extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.card}>
          <img
            src={`${config.api}${this.props.data.image.url}`}
            className={styles.image}
          />
          <h1 className={styles.heading}>{this.props.data.title}</h1>
          <p className={styles.shortText}>{this.props.data.description}</p>
          <div className={styles.footer}>
            <Link href="/detail/[name]" as={`/detail/${this.props.data.id}`}>
              <span className={styles.btn}>مشاهده بیشتر</span>

            </Link>
            {/* <p>{moment(this.props.data.published_at, 'YYYY-M-D HH:mm:ss').format('YYYY/M/D')} </p> */}
            <p className={styles.para}> تاریخ:{moment(this.props.data.published_at, 'YYYY-M-D HH:mm:ss').endOf('jMonth').format('jYYYY/jM/jD')} --  نویسنده : اداک</p>
            {/* <span>{this.props.data.published_at}</span> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Item;
