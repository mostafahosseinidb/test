import React, { Component } from "react";
import { Subscribe } from "unstated";
import NewsCountainer from "../../countainers/news.countainers";

class TopNews extends Component {
    state = {
        topNews_count: 0
    }
    render() {
        return (
            <section class="top_news clearfix ">
                <Subscribe to={[NewsCountainer]}>
                    {NewTop => (
                        NewTop.state.news.length === 0 ? <p>no data</p> : NewTop.state.news.news_item.map((n) => {
                            if (n.config.topNews && this.state.topNews_count ++ < 3) {
                                return (
                                    <figure class={this.state.topNews_count === 3 ? 'column_large_6' : 'column_large_3'} >
                                        <img src={require('../../assets/img/' + n.newsImg)} alt="" />
                                        <figcaption>
                                            <span class="tag">{n.config.categuryName}</span>
                                            <h2>
                                                <a href="">{n.newsSummery}</a>
                                            </h2>
                                        </figcaption>
                                    </figure>
                                );
                            }
                        })
                    )}

                </Subscribe>
            </section>
        );
    }
}
export default TopNews;
