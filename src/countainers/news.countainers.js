import { Container } from "unstated";
import NewsApi from "../api/news.api";
import lodash from "lodash";
class NewsContainer extends Container {
    state = {
        language: "fa",
        news: [],
        topNews: [],
        otherNews: [],
        menu: [],
        categury: [],
        topNews: []
    };

    getNews = async () => {
        const data = await NewsApi.getNews(this.state.language);
        const { menu, categury, news } = data;
        const cats = lodash.keyBy(categury.cat_item, 'catId');  // group categury by cat id  and retrun value of catid
        news.news_item = news.news_item.map((n) => {
            const catId = n.config.categuryId;
            n.config.categuryName = cats[catId].value;
            return n;
        });

        // const top=lodash.groupBy(news.news_item, "config.categuryId");
        // const other_news=[];
        // if(top){
        //    console.log("top",top);

        // }

        return this.setState({ menu, categury, news });
    }

    changelanguage = (language) => {
        this.setState({ language: language }, async () => {
            await this.getNews();
        });
    }



}

const container = new NewsContainer();
export default container;
