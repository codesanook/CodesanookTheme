import * as React from "react";

const Logo: React.FunctionComponent<{ imageUrl: string }> = prop => {
    return (
        <div className="logo">
            <img className='logo__image' src={prop.imageUrl} />
            <small className='logo__quote'>สนุกไปกับการเขียนโค้ด สังคมแห่งการเรืยนรู้ แบ่งปันความรู้ด้านโปรแกรมมิ่ง</small>
        </div>
    )
};

export default Logo;