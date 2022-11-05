import React, { Component } from "react";
import { getNewsById } from "../../services/blogService";
import styles from "./Detail.module.css";
import config from '../../services/config.json';
import moment from "moment-jalaali";
import { stringFormatToArrayFormat } from './../../util/split';


class Detail extends Component {
  state = { blog: null , tags:[] };
  componentDidMount = () => {
    this.handleGetBlog();
  };
  handleGetBlog = async () => {
    try {
      const { data, status } = await getNewsById(this.props.title);

      if (status === 200) {
        console.log("data");
        console.log(data);
        this.setState({ blog: data });
        this.setState({ tags:  data.tags.stringFormatToArrayFormat() });
       console.log('111' )
       console.log(data.tags.stringFormatToArrayFormat() )
      }
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return (
      <section className={styles.main}>
        <div className={styles.news}>
          <h2> {this.state.blog ? this.state.blog.title : null}</h2>
          <div className={styles.imgHoverZoom}>
            <img
              src={
                this.state.blog
                  ? `${config.api}${this.state.blog.image.url}`
                  : null
              }
              className={styles.imgMain}
            />
          </div>
          <div className={styles.date}>
            <p>
              <>
              {this.state.blog ? moment(this.state.blog.published_at, 'YYYY-M-D HH:mm:ss').endOf('jMonth').format('jYYYY/jM/jD') : null} 

               , تخمین زمان خواندن :
              {this.state.blog ? this.state.blog.estimationReadTime : null}{" "}
              دقیقه

            </>
            </p>
           
          </div>
          <p
            className={
              this.state.brief ? styles.showBrief : styles.showBrief.active
            }
          >
            {this.state.blog ? this.state.blog.description : null}
          </p>
          <p>برچسب ها  :</p>
          {this.state.blog ? stringFormatToArrayFormat(this.state.blog.tags).map((i)=><span className={styles.tag}>{i}</span>) : null}
        </div>
      </section>
    );
  }
}

export default Detail;
