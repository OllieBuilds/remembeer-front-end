# Remembeer

Or: how my other project devolved into a 24 hour hackathon due to
CORS

![Application](./remembeer.png?raw=true "Application")

## This Repository

[Front end](https://github.com/cuprous/remembeer-front-end)

Please note, this project is an excellent example of how not to code. It's not
DRY, it's not well commented, etc. It was thrown together in 24 hours due to
technical difficulties with CORS prohibiting the completion of another project.

## Back End Repository

[Back end](https://github.com/cuprous/remembeer-back-end)

See above note.

## Design

### Pitch Deck

[Pitch Deck](https://docs.google.com/presentation/d/1WJazQuKpluOKFSg4lrLaO3KY5qnG5OH8_DG0S0P_tGw/edit?usp=sharing)

### Wireframe

![Wireframe](./wireframe.jpg?raw=true "Wireframe")

### User stories

-   I like beer; I like trying new beers; I always forget which beers I've had;
it would be swell if I could search for a beer I just had and then remembeer it
with the assistance of the internet.
-   Frequently, ABV information is missing from the drinks that I order in a
restaurant; it would be great if I could hop on a website, search for a beer,
and then see the ABV so I can make sure I'll be good to drive after having one.
-   I'd like to be able to keep track of all the beers I've tried, but mark my
favorites so I know what to buy in the store when I feel like having something
tried and true.

## Technologies

-   [HTML](https://www.w3.org/html/) - The language of the internet, the standard
markup language used to make web pages.
-   [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - CSS, and more
specifically, SASS, a stylesheet language, that allows us to make our HTML look
pretty.
-   [JS](https://www.javascript.com/) - The programming language that makes
all the logic happen on the front end. It's what we use to handle processing of
any data that we pass to and from the back end server.
-   [jQuery](https://jquery.com/) - jQuery is a handy library for JS that lets us
more easily manipulate the DOM.
-   [Rails](http://rubyonrails.org/) - a MVC (but we don't use the V part) web
application framework written in Ruby. This is what routes our requests
and sends us an appropriate response. It interacts with our database to
store and retrieve data.

Why? They're free, they're standards (some of them), easily deployed for free,
well supported, accessible, web browsers are ubiquitous, and so is internet
coverage.

## Dependencies

There are no dependencies involved with using this app.

## Major Hurdles / Unsolved Problems

There were no major hurdles or unsolved problems involved with this project
implementation. However, my previous project in which I wanted to interact with
Twitter via their OAuth API, failed spectacularly due to CORS issues that I
need to work out.
