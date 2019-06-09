import * as React from "react";
import Tag from "./models/Tag";

const TagList: React.FunctionComponent<{ tags: Tag[], bigTag?: boolean }> = ({ tags, bigTag = false }) => {
    const className = bigTag ? 'tag-list__item tag-list__item--big' : 'tag-list__item';
    return (
        <div className="tag-list">
            {
                tags.map((tag, index) =>
                    <a key={index} href={tag.href} className={className}>{tag.name}</a>
                )
            }
        </div>
    )
};

export default TagList;