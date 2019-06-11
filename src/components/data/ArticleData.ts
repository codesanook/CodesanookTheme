import Article from "../models/Article";
import * as moment from 'moment';

const moduleRoot = 'Themes/CodeSanookTheme/Content/images';
const articlesData: Article[] = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        description: 'Nam eu consectetur libero, vitae aliquet ligula.',
        datetime: moment.utc(),
        author: 'Aaron',
        pictureUrl: `${moduleRoot}/pic-ex-01.jpg`,
        tags: [
            {
                name: 'Javascript',
                href: 'tags/javascript'
            },
            {
                name: 'AngularJS',
                href: 'tags/angularjs'
            },
            {
                name: 'Webpack',
                href: 'tags/webpack'
            }
        ]
    },
    {
        id: 2,
        title: 'Donec vitae tempus sapien, eget euismod diam',
        description: 'Phasellus at magna sollicitudin, porta eros aliquet, tempus tortor. Ut iaculis porttitor enim, a posuere ante finibus vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec gravida scelerisque porta. Suspendisse ultrices aliquam velit vitae rhoncus. Nam sit amet nisi quis est semper ultricies eget at velit. Donec mollis eu elit quis venenatis. Ut eu elit nulla. Donec est nunc, consectetur sit amet purus ut, vestibulum pulvinar nisl. Aliquam erat volutpat. In congue eros nibh.',
        datetime: moment.utc(),
        author: 'Poon',
        pictureUrl: `${moduleRoot}/pic-ex-02.jpg`,
        tags: [
            {
                name: 'C#',
                href: 'tags/csharp'
            },
            {
                name: 'Programming',
                href: 'tags/programming'
            }
        ]
    },
    {
        id: 3,
        title: 'Fusce facilisis accumsan convallis. Sed eget semper',
        description: 'Integer egestas tempor magna sed scelerisque. Duis non volutpat erat, ut dignissim odio. In a nulla nec erat vestibulum iaculis. Phasellus aliquet est purus, vel condimentum dui pulvinar eu. Vivamus id dolor magna. Phasellus fermentum orci risus, sed feugiat massa bibendum id. Suspendisse vestibulum augue vehicula orci posuere cursus. Cras tristique leo nunc, vitae varius dolor sollicitudin non.',
        datetime: moment.utc(),
        author: 'Science',
        pictureUrl: `${moduleRoot}/pic-ex-03.jpg`,
        tags: [
            {
                name: 'CSS',
                href: 'tags/css'
            },
            {
                name: 'Sass',
                href: 'tags/sass'
            },
            {
                name: 'Web Design',
                href: 'tags/web-design'
            }
        ]
    },
    {
        id: 4,
        title: 'Mauris turpis diam, suscipit ultricies pellentesque nec',
        description: ' Mauris ornare vestibulum faucibus. Praesent ut tempus enim, vel feugiat justo. Aenean a nunc sed eros pellentesque maximus. Sed lacinia nisl et mi cursus, congue varius felis cursus. Nunc mattis, odio mattis cursus aliquet, lacus ligula tincidunt nibh, condimentum efficitur eros diam sit amet felis. Etiam varius urna vitae lacus mattis varius. Ut ut semper nulla. Aenean blandit finibus congue. Sed vitae vehicula nisi, ac convallis leo. Cras quis mauris convallis, tincidunt dolor consectetur, cursus dui. Phasellus ut elit et tortor finibus dictum ac eu lorem.',
        datetime: moment.utc(),
        author: 'Aaron',
        pictureUrl: `${moduleRoot}/pic-ex-04.jpg`,
        tags: [
            {
                name: 'Database',
                href: 'tags/database'
            },
            {
                name: 'Cloud',
                href: 'tags/cloud'
            }
        ]
    },
    {
        id: 5,
        title: 'Phasellus pellentesque augue purus, at ultrices felis bibendum aliquam',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin cursus tortor vel ante tempus, ullamcorper consequat est tempus. Cras id felis nisl. Donec mattis blandit nulla, ac lobortis magna aliquam id. Sed eget quam nec purus posuere lobortis in a tortor. Integer id posuere lorem, quis viverra magna. Fusce ut justo eget lectus volutpat aliquam. Vestibulum sed maximus diam.',
        datetime: moment.utc(),
        author: 'Science',
        pictureUrl: `${moduleRoot}/pic-ex-05.jpg`,
        tags: [
            {
                name: 'Spring boot',
                href: 'spring-boot'
            },
            {
                name: 'Java',
                href: 'java'
            }
        ]
    }
];

export default articlesData;
