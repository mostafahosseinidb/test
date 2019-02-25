import React from "react";

import lodash from "lodash";
import { Subscribe } from "unstated";
import NewsCountainer from "../../../countainers/news.countainers";


const categuryNews = props => {
    return (
        <>

            <Subscribe to={[NewsCountainer]}>
                {container => {

                    const newsCategury = lodash.groupBy(container.state.news.news_item, "config.categuryId");
                    return container.state.categury.length === 0 ? <p>no data</p> : container.state.categury.cat_item.map((n) => {
                        const news_array = newsCategury[n.catId];
                        let news_array_lengh = 0;
                        if (news_array) {
                            news_array_lengh = news_array.length;
                        }
                        else {
                            return null;
                        }
                        return (
                            <section class="category ">

                                <header class="clearfix">
                                    <h2>بازی های {n.value}</h2>
                                    <button>ادامه بیشتر از دسته بندی</button>
                                </header>
                                <div class="row">
                                    <div class="column_large_8">
                                        <div class="news">
                                            <figure>
                                                <img src={require('../../../assets/img/' + news_array[news_array_lengh - 1].newsImg)} alt="" />
                                                <figcaption>
                                                    <h2>{news_array[news_array_lengh - 1].newsTitle}</h2>
                                                    <p>{news_array[news_array_lengh - 1].newsSummery}</p>
                                                    <a>ادامه مطلب</a>
                                                </figcaption>
                                                
                                            </figure>
                                        </div>
                                    </div>
                                    <div class="column_large_4">
                                        <div class="column_large_12">
                                            {news_array_lengh - 2 < 0 ? '' :  (
                                            <div class="news hast_margin">
                                                <figure>
                                                    <img src={require('../../../assets/img/' + news_array[news_array_lengh - 2].newsImg)} alt="" />
                                                    <figcaption>
                                                        <h2>{news_array[news_array_lengh - 2].newsTitle}</h2>
                                                        <p>{news_array[news_array_lengh - 2].newsSummery}</p>
                                                        <a>ادامه مطلب</a>
                                                    </figcaption>
                                                    
                                                </figure>
                                            </div>

                                            )}
                                        </div>
                                        <div class="column_large_12">
                                            {news_array_lengh - 3 < 0 ? '' :  (
                                            <div class="news ">
                                                <figure>
                                                    <img src={require('../../../assets/img/' + news_array[news_array_lengh - 3].newsImg)} alt="" />
                                                    <figcaption>
                                                        <h2>{news_array[news_array_lengh - 3].newsTitle}</h2>
                                                        <p>{news_array[news_array_lengh - 3].newsSummery}</p>
                                                        <a>ادامه مطلب</a>
                                                    </figcaption>

                                                </figure>

                                            </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )

                    });


                }}
            </Subscribe>

        </>
    );
};

export default categuryNews;

