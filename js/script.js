  var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgP7MceUej4joY9na1aaRR53sInfqW40YQyDJgUKG9nDHkx2mf'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'http://moviesroom.pl/images/00.Sty-lut/Magda/krol-lew-1000x600.jpg'
  },
  {
    id: 3,
    title: 'Marry Poppins',
    desc: 'Film o parasolce',
    img: 'http://www.jtmoore.org/wp-content/uploads/2017/11/nintchdbpict0002985906251.jpg'
  },
  {
    id: 4,
    title: 'Piotruś Pan',
    desc: 'Film o chłopcu',
    img: 'http://1.fwcdn.pl/wv/89/70/18970/z01.18970.4.jpg'
  },
  {
    id: 5,
    title: 'Ogniem i mieczem',
    desc: 'Film o ogniu',
    img: 'http://1.fwcdn.pl/ph/01/37/137/490767_1.2.jpg'
  }
];

 var Movie = React.createClass({
  propTypes: {
    id: React.PropTypes.object.isRequired,
    title: React.PropTypes.object.isRequired,
    desc: React.PropTypes.object.isRequired,
    img: React.PropTypes.object.isRequired,
  },

 render: function() {
    return (
      React.createElement('li', {key:movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
      )
    )
  },
});


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.object.isRequired,
  },

render: function() {
    return (
      React.createElement('h2', {}, movie.title)
    )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.object.isRequired,
  },

 render: function() {
    return (
      React.createElement('p', {}, movie.desc)
      )
  },
});


var MovieList = React.createClass({
  propTypes: {
    Movie: React.PropTypes.object.isRequired,
  },

 render: function() {
    return (
      React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, Movie)
      )
    )
  },
});

// var moviesElements = movies.map(function(movie) {
  // return React.createElement('li', {key:movie.id},
  //     React.createElement('h2', {}, movie.title),
  //     React.createElement('p', {}, movie.desc),
  //     React.createElement('img', {src: movie.img})
  //   );
// });

// var element =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'Lista filmów'),
//     React.createElement('ul', {}, moviesElements)
//   );

  var element = React.createElement(MovieList, {Movie: Movie});
  ReactDOM.render(element, document.getElementById('app'));