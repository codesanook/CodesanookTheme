import * as React from "react";
import TagList from "./Tag";
import Article from './models/Article'

//class or interface https://stackoverflow.com/a/51716899/1872200
interface ArticleSetting {
    hideTag: boolean;
    hidePicture: boolean;
    trimDescription: boolean;
}

interface ArticleProp {
    article: Article;
    setting?: ArticleSetting;
}
//default props https://blog.logrocket.com/a-complete-guide-to-default-props-in-react-984ea8e6972d
const ArticleComponent: React.FunctionComponent<ArticleProp> = ({
    article,
    setting = { hidePicture: false, hideTag: false, trimDescription: false }
}) => {

    const articleDescriptionClassName = 'article__description ' + (setting.trimDescription
        ? 'article__description--trim'
        : '');

    return (
        <div className="article row">
            {!setting.hidePicture &&
                <div className="col-sm-4">
                    <img src={article.pictureUrl} className="article__picture" />
                </div>
            }
            <div className={!setting.hidePicture ? 'col-sm-8' : 'col-sm-12'}>
                {!setting.hideTag &&
                    <TagList tags={article.tags} />
                }
                <a href='#' className='article__title'>{article.title}</a>
                <small className="datetime">
                    {article.datetime.format('MMM Do, YYYY')} by {article.author}
                </small>
                <a className={articleDescriptionClassName} href="#">{article.description}</a>
                <a href="#" className="article__read-more">Read more...</a>
            </div>
        </div>
    );
}

const ArticleList: React.FunctionComponent<{ articles: Article[], setting?: ArticleSetting }> = (props) => {
    return (
        <ul className="article-list">
            {
                props.articles.map((article, index) => {
                    return (
                        <li key={index} className="article-list__item">
                            <ArticleComponent article={article} setting={props.setting} />
                        </li>);
                })
            }
        </ul>
    )
};

export default ArticleList;