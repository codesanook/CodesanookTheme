//subject to export to external
import * as React from "react";
import * as ReactDOM from "react-dom";

import './../Sass/style.scss'
import Logo from "./Logo";
import Navigation from "./Navigation";
import 'bootstrap';
import ArticleList from "./ArticleComponent";
import Pagination from "./Pagination";
import Widget from "./Widget";
import TagList from "./Tag";
import articlesData from './data/ArticleData';
import menuData from './data/MenuData';
import tagsData from './data/TagData';

const moduleRoot = 'Themes/CodeSanookTheme/Content/images';
/*
useful react links
https://reactjs.org/docs/conditional-rendering.html
*/
//https://stackoverflow.com/a/12709880/1872200
// declare global {
//     interface Window {
//         menuData: IMenu[];
//     }
// }

//https://stackoverflow.com/a/43459021/1872200
const Page: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Logo />
            <Navigation menuData={menuData} />

            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-8">
                        <ArticleList articles={articlesData} />
                        <Pagination />
                    </div>
                    <div className="col-md-4">
                        <Widget title="About Codesanook">
                            <img src={`${moduleRoot}/pic-ex-04.jpg`} className="img-fluid" />
                            <div className="m-t-10 text-justify">
                                Pellentesque habitant morbi tristique senectus et netus
                                et malesuada fames ac turpis egestas.
                                Proin cursus tortor vel ante tempus, ullamcorper consequat est tempus.
                                Cras id felis nisl. Donec mattis blandit nulla,
                                ac lobortis magna aliquam id.
                                Sed eget quam nec purus posuere lobortis in a tortor.
                        </div>
                        </Widget>
                        <Widget title="Get connected">
                            <div style={{
                                backgroundColor: '#4267b2',
                                textAlign: 'center',
                                padding: '150px 0',
                                color: 'white'
                            }}>
                                Facebook
                        </div>
                        </Widget>
                        <Widget title="Recently posts">
                            <ArticleList
                                articles={articlesData}
                                setting={{ hidePicture: true, hideTag: true, trimDescription: true }} />
                        </Widget>
                        <Widget title="Popular tags">
                            <TagList tags={tagsData} bigTag={true} />
                        </Widget>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
ReactDOM.render(
    <Page />,
    document.getElementById("root") as HTMLElement
);