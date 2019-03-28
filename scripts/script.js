var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.mainNavOpened = false
  $scope.menuOpened = ''
  $scope.menus = [
    {
      text: 'Home',
      href: 'home',
      subs: []
    },
    {
      text: 'Menu 1',
      href: 'menu1',
      subs: [
        {
          text: 'Sub Menu 1',
          href: 'submenu1',
        },
        {
          text: 'Sub Menu 2',
          href: 'submenu2',
        },
        {
          text: 'Sub Menu 3',
          href: 'submenu3',
        }
      ]
    },
    {
      text: 'Menu 2',
      href: 'menu2',
      subs: [
        {
          text: 'Sub Menu 1',
          href: 'submenu1',
        },
        {
          text: 'Sub Menu 2',
          href: 'submenu2',
        },
        {
          text: 'Sub Menu 3',
          href: 'submenu3',
        }
      ]
    },
    {
      text: 'Menu 3',
      href: 'menu3',
      subs: []
    },
    {
      text: 'Menu 4',
      href: 'menu4',
      subs: [
        {
          text: 'Sub Menu 1',
          href: 'submenu1',
        },
        {
          text: 'Sub Menu 2',
          href: 'submenu2',
        },
        {
          text: 'Sub Menu 3',
          href: 'submenu3',
        }
      ]
    },
  ]

  $scope.openMenu = function (menu) {
    if ($scope.menuOpened === menu.text) {
      $scope.menuOpened = ''
    } else {
      $scope.menuOpened = menu.text
    }
  }

  $scope.articles = [
    {
      topic: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      desc: 'Nam eu consectetur libero, vitae aliquet ligula. Mauris a risus nibh. Aliquam vulputate nisi et tortor convallis, a vehicula odio accumsan. Pellentesque pellentesque, ipsum eu ornare egestas, quam ligula imperdiet lorem, eget iaculis dui enim eget turpis. Aliquam euismod tortor vel nibh convallis egestas. Cras scelerisque vitae felis sit amet auctor. Aliquam interdum in quam nec pellentesque. Integer ut turpis euismod, vestibulum sem ac, placerat augue.',
      datetime: 'Dec 15, 2017',
      author: 'Aaron',
      image: 'images/pic-ex-01.jpg',
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
      topic: 'Donec vitae tempus sapien, eget euismod diam',
      desc: 'Phasellus at magna sollicitudin, porta eros aliquet, tempus tortor. Ut iaculis porttitor enim, a posuere ante finibus vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec gravida scelerisque porta. Suspendisse ultrices aliquam velit vitae rhoncus. Nam sit amet nisi quis est semper ultricies eget at velit. Donec mollis eu elit quis venenatis. Ut eu elit nulla. Donec est nunc, consectetur sit amet purus ut, vestibulum pulvinar nisl. Aliquam erat volutpat. In congue eros nibh.',
      datetime: 'Dec 16, 2017',
      author: 'Poon',
      image: 'images/pic-ex-02.jpg',
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
      topic: 'Fusce facilisis accumsan convallis. Sed eget semper',
      desc: 'Integer egestas tempor magna sed scelerisque. Duis non volutpat erat, ut dignissim odio. In a nulla nec erat vestibulum iaculis. Phasellus aliquet est purus, vel condimentum dui pulvinar eu. Vivamus id dolor magna. Phasellus fermentum orci risus, sed feugiat massa bibendum id. Suspendisse vestibulum augue vehicula orci posuere cursus. Cras tristique leo nunc, vitae varius dolor sollicitudin non.',
      datetime: 'Dec 17, 2017',
      author: 'Science',
      image: 'images/pic-ex-03.jpg',
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
      topic: 'Mauris turpis diam, suscipit ultricies pellentesque nec',
      desc: ' Mauris ornare vestibulum faucibus. Praesent ut tempus enim, vel feugiat justo. Aenean a nunc sed eros pellentesque maximus. Sed lacinia nisl et mi cursus, congue varius felis cursus. Nunc mattis, odio mattis cursus aliquet, lacus ligula tincidunt nibh, condimentum efficitur eros diam sit amet felis. Etiam varius urna vitae lacus mattis varius. Ut ut semper nulla. Aenean blandit finibus congue. Sed vitae vehicula nisi, ac convallis leo. Cras quis mauris convallis, tincidunt dolor consectetur, cursus dui. Phasellus ut elit et tortor finibus dictum ac eu lorem.',
      datetime: 'Dec 18, 2017',
      author: 'Aaron',
      image: 'images/pic-ex-06.jpg',
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
      topic: 'Phasellus pellentesque augue purus, at ultrices felis bibendum aliquam',
      desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin cursus tortor vel ante tempus, ullamcorper consequat est tempus. Cras id felis nisl. Donec mattis blandit nulla, ac lobortis magna aliquam id. Sed eget quam nec purus posuere lobortis in a tortor. Integer id posuere lorem, quis viverra magna. Fusce ut justo eget lectus volutpat aliquam. Vestibulum sed maximus diam.',
      datetime: 'Dec 19, 2017',
      author: 'Science',
      image: 'images/pic-ex-07.jpg',
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
  ]

  $scope.tags = ['sed', 'eget', 'quam', 'nec', 'purus', 'posuere', 'lobortis', 'tortor', 'integer', 'posuere', 'lorem', 'quis', 'viverra', 'magna',]
});

$(function(){
  $('.featured-slide ul').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{ breakpoint: 768, settings: { variableWidth: false, centerMode: false } }]
  })
});
