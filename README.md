# Getting Started with Movie App

-Assignment description:
    The app needs to have the functionalities of displaying the top 10 rated TV shows and the top 10 movies, a search function for both, and a detailed view for individual items.

    Please use TheMovieDB API found at https://developers.themoviedb.org/3 to implement this.

    To help you with the UX/UI for this web app we made some mocks available at https://www.figma.com/file/pzTXHR7vrDdUwZnqzLxMx8/Web-Mock
    App requirements:

    When the app loads, the TV SHOWS tab should be selected.
    Clicking on a tab loads the top 10 MOVIES/TV SHOWS depending on the selected tab.

    The search field should be live and react to any change in the input field.
    The search should fire a request on the search endpoint from TMDB and not filter the top 10 results.
    The search is performed only when there are 3 or more characters in the search bar and it should be triggered only one second after the user has stopped typing.
    When there are fewer than 3 characters in the search bar, the content should revert back to the top 10 MOVIES/TV SHOWS.
    When the search is performed, results should appear under the search box.
    Switching between tabs while searching should trigger the search again with the same search term for the selected tab and update the results.

    When the user clicks on a specific MOVIE/TV SHOW, he is taken to the details view.
    The Detailed View of the Movie/TV Show should show the cover image on top and in the case of Movies/TV Shows which have a trailer should show the trailer video instead of the cover image. Below the image/trailer some basic information regarding the selected Movie/TV Show should be shown.

    The Back Button should return the user back to where he was and with the same state before clicking to see more information about a Movie/TV Show.
    (This means that the correct tab should be selected and if the user came from a search - the search result with the search term should be there.
    NOTE no need to save the scroll position)

-Technical requirements for React:
    React version 16.8 or later should be used
    React is focused more on the UI so you will need something to save and consume the state
    React Context, MobX, Redux might help with that
    Use React Router
    Use Typescript
    Showcase correct usage of:
    Functional and Stateful Components
    Working with global state
    React Hooks
    Typescript
    Don’t use Bootstrap or similar CSS frameworks, showcase us proper HTML structure and CSS layout skills

-You will get bonus points if you:
    Use ESLint or any other form of linting/static analysis to have nice and clean code
    Use a clean and logical app architecture
    Write some tests for your app (maybe use Enzyme, Karma, or Testing Library)
    Make the app responsive
    Style the app (maybe add some color, animations, and borders - show us you have an eye for design)

### GETTING STARTED WITH APP

To run application clone app from github repo. After successfully download, open the console in Visual studio code and type in the console

### `npm install`

This command install all necessary packages for a successfully running app

### `npm start`

Last command. After successfully 'npm install' command, type the command above in the console and application will run in the browser.
