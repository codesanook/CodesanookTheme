import * as moment from 'moment'
import Tag from './Tag';

export default interface Article {
    id: number;
    title: string;
    description: string;
    datetime: moment.Moment;
    author: string;
    pictureUrl: string;
    tags: Tag[];
}