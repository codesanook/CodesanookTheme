import * as React from 'react'
import * as md from 'react-icons/md'
// https://react-icons.netlify.com/#/icons/md
const Pagination: React.FunctionComponent = () => {

    return (
        <div className='text-center'>
            <ul className="pagination">
                <li className="pagination__item">
                    <a className="page-link prev" href="#">
                        <md.MdKeyboardArrowLeft />
                    </a>
                </li>
                <li className="pagination__item"><a className="page-link" href="#">1</a></li>
                <li className="pagination__item"><a className="page-link" href="#">2</a></li>
                <li className="pagination__item"><a className="page-link" href="#">3</a></li>
                <li className="pagination__item">
                    <a className="page-link next" href="#">
                        <md.MdKeyboardArrowRight />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Pagination;