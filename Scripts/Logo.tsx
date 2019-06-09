import * as React from "react";

const Logo: React.FunctionComponent = () => {
    return (
        <div className="logo">
            <img className='logo__image' src="images/logo.png"/>
            <small className='logo__quote'>สนุกไปกับการเขียนโค้ด สังคมแห่งการเรืยนรู้ แบ่งปันความรู้ด้านโปรแกรมมิ่ง</small>
        </div>
    )
};

export default Logo;