# Review Questions

## What is Node.js?
    - NodeJS is a runtime environment that is used to execute JavaScript outside the browser.

## What is Express?
    - Express is a framework for NodeJS to make your backend life easier. Makes it easy to build web apps and APIs. and have other cool features like middleware and routing.

## Mention two parts of Express that you learned about this week.
    - Middleware and routing

## What is Middleware?
    - Middleware in Express are like array of functions that get executed in the order they are introduced into the server code.

## What is a Resource?
    - A Resource is a generic term for things you interact with. In our case on building APIS, the JSON data we use for CRUD operations is the resource.

## What can the API return to help clients know if a request was successful?
    - HTTP status codes

## How can we partition our application into sub-applications?
    - By separating those files like your route handlers and turning them to as middleware to use in your main file like index.js or server.js

## What is express.json() and why do we need it?
    - `express.json()` is a built-in express middleware that parses incoming requests with JSON.
