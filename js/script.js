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
    movie: React.PropTypes.object.isRequired,
  },

 render: function() {
    return (
      React.createElement('li', {key:this.props.movie.id},
	      React.createElement(MovieTitle, {title:this.props.movie.title}),
	      React.createElement(MovieDescription, {desc:this.props.movie.desc}),
	      React.createElement(MovieImg, {img: this.props.movie.img})
      )
    )
  },
});


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

 render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
      )
  },
});

var MovieImg = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

 render: function() {
    return (
      React.createElement('img', {src: this.props.img})
      )
  },
});

var moviesElements = movies.map(function(movie, movie_id){
	return (
		React.createElement(Movie, {movie:movie, key:movie_id})
		)
});

var movieList = React.createClass({
	render: function() {
		return (
			React.createElement('ul', {}, moviesElements)
			)
	}
});

var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement(movieList, {})
	); 

  ReactDOM.render(element, document.getElementById('app'));