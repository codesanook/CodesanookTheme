import * as React from "react";

interface WidgetProp{
    title:string;
}

const Widget: React.FunctionComponent<WidgetProp> = props => {
    return (
        <div className="widget">
            <h2 className="widget__header">
                <span className="widget__title">{props.title}</span>
            </h2>
            {props.children}
        </div>
    )
};

export default Widget;