# BMore Hot Wings App
This is a MERN stack application built by Colin Stevens, Tina Lawrence and Gregg von Buschberger.

The application gives users hot wings prices at local restaurants with a focus on those that have a weekly wings special.

## Landing Page
Developed by Colin, the landing page shows the current day's prices on load.

The user can then toggle different filters and sorts to see the data from the database differently.

The data display changes using React hooks calls. On each click, the component is rerendered based on the user's selection.

On mobile, the user is served up information quickly. The hero image disappears and the cards change to a row formatting.

The user can click on each restaurant to see individual pages.

## Individual Restaurant pages
Developed by Colin, the individual restaurant pages are dynamically generated via content from our database. 

This page is desgned using React Components, dynamically rendering data from our database depending on which page we're on. This page scales tremendously using one simple design.

## Spinner
Developer by Gregg von Bushberger, this page allows users to randomly select a restaurant to go.

## Login page
Developed by Tina Lawrence, this page allows users access to the backend content management system, where users can update data for their restaurant.

## Server
Colin wrote the server scripts using Express. He wrote the server file, the routes for the API, the controllers for the database, and the routes for the individual pages.

## Database
Colin wrote the database. He developed the model and controllers, both important part of the MVC design, and also wrote the seed file. This is real data - you could use this app to get wings deals!