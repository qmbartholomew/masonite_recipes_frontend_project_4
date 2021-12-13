# Project 4 - Masonite Cookbook Frontend

#### By Quentin Bartholomew

## Project  Summary

This is an online cookbook/recipe databse. Users can input their favorite recipes for easy collection in one place.

<a href="#">Live link</a>

## Components

* Recipe

## Pages

* AllRecipes

* Form

* SingleRecipe

## Route Table

| URL | Component | Action |
|-----|--------|--------|
| / | <SingleRecipe /> | Displays all recipes currently in the cookbook.
| /recipes/:id | <SingleRecipe /> | Displays a specific recipe
| /new | <Form /> | Displays an empty form for a user to create/input a new recipe
| /edit/:id | <Form /> | Displays a form populated with a recipe's data for a user to update/edit

## User Stories

A user should be able to view all of the recipes in the cookbook

A user should be able to create a new recipe

A user should be able to edit a recipe

A user should be able to delete a recipe

A user should be able to click a link that redirects to an external page with more info on a recipe (if url is provided)

A user should be able to access/redirect to the homepage at any point

## Challenges

Chrome was giving me a few issues and throwing a 500 error any time I would try to create a new recipe (using both thunderclient as well as my deployed frontend) - this issue is still unresolved, however using a different browser did work. More of a personal challenge than an overall project challenge
___

Once a specific recipe (show page) was loaded, if a user refreshed the page on the deployed/live site netlify would return a 404 error. The fix (found [here](https://stackoverflow.com/questions/58065603/netlify-renders-404-on-page-refresh-using-react-and-react-router)) was to add a _redirects file:

>/frontend/public/_redirects
```
/*  /index.html  200
```
___
Dynamically setting a modal for each recipe/item on the index page proved to be an issue. I was able to get a modal generated however it would only take up the width of the recipe/item div. Beyond that, the true issue was attatching an event listener to each item so that it would only trigger/display it's respective modal with the proper information. 
- I believe that jQuery may not be the best course of action to accomplish this, however I didn't have the time needed to explore other options
- I ultimately decided against the idea and created a modal on the show page instead, however feel it may be possible to accomplish with a bit more thought.

## List of Technologies

* CSS

* JS/JSX/JQuery

* React

## Component Tree

```
-> App
    -> Routes
      -> Route |path: "/recipes"|
        -> AllRecipes
      -> Route |path="/recipes/:id|
        -> SingleRecipe
      -> Route |path="/recipes/new|
        -> Form
      -> Route |path="/recipes/edit/:id|
        -> Form
```

## Things I'd like to Add

- Modal for each recipe on the index page - when clicked will display a modal with a few pieces of info on the recipe.

- A proper footer with links for contact, socials, etc.

- More animations!

- Better responsiveness