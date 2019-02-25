import React from "react";

import lodash from "lodash";
import { Subscribe } from "unstated";
import NewsCountainer from "../../../countainers/news.countainers";




const categuryNews = props => {
    return (
        <section class="all_news">
            <div class="row">
                <Subscribe to={[NewsCountainer]}>
                    {container => {
                        const newsCategury = lodash.groupBy(container.state.news.news_item, "config.categuryId");
                        return container.state.categury.length === 0 ? <p>no data</p> : container.state.categury.cat_item.map((n) => {
                            let news_array = newsCategury[n.catId];
                            
                           
                            if (!news_array) {
                                return null;

                            }

                            if (news_array.length > 3) {
                                news_array = news_array.slice(0, (news_array.length-3))
                                
                                return news_array.map((n, index) => {

                               

                                    return (

                                        <div class="column_large_4">
                                            <figure class="news_box">
                                                <div class="img">
                                                    <img src={require('../../../assets/img/' + n.newsImg)} alt="" />
                                                </div>

                                                <span class="tag">{n.config.categuryName}</span>
                                                <figcaption>
                                                    <h2>{n.newsTitle}</h2>
                                                    <span class="time">{n.newsDate}</span>
                                                    <p>{n.newsSummery}</p>
                                                    <a href="" class="readmore">ادامه مطلب</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    )
                                })

                            }
                            else {
                                return null;
                            }



                        })
                    }}
                </Subscribe>
            </div>
            <div class="loadmore">
                <a href="">محتوای بیشتر</a>
            </div>
        </section>
    );
};

export default categuryNews;

