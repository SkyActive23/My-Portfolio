import pokemanImage from "../assets/images/ProjectImages/pokemon.png";
import gameHubImage from "../assets/images/ProjectImages/Game-Hub.png";
import meetAppImage from "../assets/images/ProjectImages/Meet-App.png";
import apiFlixDBImage from "../assets/images/ProjectImages/ApiFlix-DB.png";
import apiFlixClientImage from "../assets/images/ProjectImages/ApiFlix-client.png";
import toDoListImage from "../assets/images/ProjectImages/ToDoList.png";
import landingPageImage from "../assets/images/ProjectImages/LandingPage.png";
import javaMovieClientImage from "../assets/images/ProjectImages/JavaMovieClient.png";
import javaMovieApiImage from "../assets/images/ProjectImages/JavaMovieAPI.png";

const projectData = [
  {
    title: "Pokemon App",
    technologies: "HTML, CSS, JavaScript, jQuery, API, AJAX",
    description:
      "The Pokedex App is an application that was bulit by using API from a third party service. The app gives over 1,000 pokemon to search through. When navigating through the app you can filter through the pokedex by name to find the pokemon you want.",
    imageUrl: pokemanImage,
    demoUrl: "https://skyactive23.github.io/pokedex/",
    sourceUrl: "https://github.com/SkyActive23/pokedex",
  },
  {
    title: "Meet-App",
    description:
      "Meet App is serverless PWA application that was created using React. The app allows the user to scroll through different events provided by CareerFoundry. This app also uses technologies such as Google API and AWS Lambda and serverless. This app is also test through methods, such as, End to End testing and using Atatus. Any user that uses this app can login through their google account and be able to see detailed charts and graphs about what classes are coming up.",
    technologies:
      "React, HTML, SCSS, JavaScript, AWS Lambda, Google API, Atatus, Recharts, Node.js, Jest",
    imageUrl: meetAppImage,
    demoUrl: "https://skyactive23.github.io/meet-app/",
    sourceUrl: "https://github.com/SkyActive23/meet-app",
  },
  {
    title: "GameHub",
    description:
      "GameHub is a web application that was created using React. This app allows the user to scroll through a variety of different games. When you find a game you like, you can add it to your favorites. If you get sick of a game you can remove it from your favorites. This app also allows the user to learn more about the game they are interested in by giving a brief description of the game. You can also find information such as the developer and the genre of the game as well.",
    technologies:
      "React, HTML, CSS, TypeScript, API, AJAX, Vite, Node.js, Vercel",
    imageUrl: gameHubImage,
    demoUrl: "https://game-40xqobpep-skyactive23.vercel.app/",
    sourceUrl: "https://github.com/SkyActive23/game-hub",
  },
  {
    title: "ApiFlix API",
    description:
      "ApiFlix is a Rest API that was created for ApiFlix client side. This API allows you to use data from library of movies and also has the endpoints to be able to create, update, and delete your profile.",
    technologies:
      "Node.js, Express, MongoDB, Mongoose, Postman, Bootstrap, HTML, CSS, Heroku",
    imageUrl: apiFlixDBImage,
    demoUrl: "https://apiflix.herokuapp.com/",
    sourceUrl: "https://github.com/SkyActive23/api-movie",
  },
  {
    title: "ApiFlix Client",
    technologies:
      "React, HTML, SCSS, JavaScript, Bootstrap, Redux, AJAX, Node.js, Parcel",
    description:
      "The client-movie-api is a client side application that uses API from api-movie (https://github.com/SkyActive23/api-movie). Functionality- This client side app allows you to create an account and scroll through a variety of different movies. When you find a movie you like, you can add it to your favorites. If you get sick of a movie you can remove it from your favorites. This app also allows the user to learn more about the movie they are interested in by giving a brief description of the movie. You can also find information such as the director and the genre of the movie as well.",
    imageUrl: apiFlixClientImage,
    demoUrl: "/",
    sourceUrl: "https://github.com/SkyActive23/client-movie-api",
  },
  {
    title: "Java Movie API",
    technologies: "Java, Maven, Spring Boot, MongoDB, Postman, IntelliJ",
    description:
      "This resting api was created using Java and Spring Boot. This api allows you to use data from library of movies created through MongoDB. ",
    imageUrl: javaMovieApiImage,
    demoUrl: "/",
    sourceUrl: "https://github.com/SkyActive23/movies",
  },
  {
    title: "Java Movie Client",
    technologies:
      "React, HTML, CSS, JavaScript, Bootstrap, Axios, Node.js, MaterialUI",
    description:
      "The JavaMovieClient is a client side application that uses API from JavaMovieAPI. Functionality- This client side app allows you to scroll through movies and write a review on a movie. The app also allows the user to watch a trailer of the movie if they are wanting to see what the movie is about.",
    imageUrl: javaMovieClientImage,
    demoUrl: "https://java-movie-client.vercel.app/",
    sourceUrl: "https://github.com/SkyActive23/java-movie-client",
  },
  {
    title: "Todo App",
    technologies: "HTML, CSS, JavaScript, JQuery, Node.js",
    description:
      "Todo App is a web application that was created using HTML, CSS, and JavaScript. JQuery was used as well, to make the code cleaner and more efficient. This app allows the user to create a list of tasks that they need to complete. When the user completes a task they can check it off and it will be crossed off. If the user wants to delete a task they can click the X button and it will be removed from the list.",
    imageUrl: toDoListImage,
    demoUrl: "https://skyactive23.github.io/to-do-list-app/",
    sourceUrl: "https://github.com/SkyActive23/to-do-list-app",
  },
  {
    title: "Start Up 2000",
    technologies: "HTML, SCSS, JavaScript, Node.js, MailChimp",
    description:
      "Start UP 2000 is a landing page that was created for a client. This landing page was created using HTML, SCSS, and JavaScript. This App uses MailChimp for an email marketing campaign.",
    imageUrl: landingPageImage,
    demoUrl: "https://skyactive23.github.io/start-up-2000/",
    sourceUrl: "https://github.com/SkyActive23/start-up-2000",
  },
];

export default projectData;
