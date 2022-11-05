import React, { Component } from 'react';
import { getAllSets } from '../../services/setService';
import Item from './card/Item';
import styles from './Sets.module.css';
class Sets extends Component {
    state = {
        sources: []
    }
    componentDidMount = () => {
        this.handleGetSets();
    }
    handleGetSets = async () => {
        try {
          const { data, status } = await getAllSets();
          if (status === 200) {
            this.setState({ sources: data });
          }
        } catch (err) {
          console.error(err);
        }
      };
    render() {
        return (
            <section className={styles.section}>
                <header className="container-fluid">
                    <div className="row">
                        <div className={`col-md-12 ${styles.header}`}>
                            <h2>
                                <img src="/images/home/category-sign.svg" alt="" />
                                {this.props.title}
                            </h2>

                        </div>
                    </div>
                </header>
                <section>

                    {this.state.sources !== [] ? this.state.sources.map(m => <Item key={m.id} type='ست مدیریتی' item={m} />) : null}
                </section>
            </section>
        );
    }
}

export default Sets;