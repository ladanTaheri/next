import React, { Component } from "react";
import styles from "./Blog.module.css";
import Item from "./item/Item";
import { getAllNews } from './../../services/blogService';

class Blog extends Component {
  state = {
    blogs: [],
  };
  componentDidMount = () => {
    this.handleGetBlogs();
  };
  
  handleGetBlogs = async () => {
    try {
      const { data, status } = await getAllNews();
      if (status === 200) {
        this.setState({ blogs: data });
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className={styles.cardWrapper}>
        {this.state.blogs.map((b)=> <Item data={b}/>)}
   
      </div>
    );
  }
}

export default Blog;
