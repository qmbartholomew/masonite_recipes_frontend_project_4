# Project 4 - Masonite Cookbook Backend

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

| Route | Component | Description |
|-----|--------|--------|
| /recipes | <SingleRecipe /> | Displays all recipes currently in the cookbook.
| /recipes/:id | <SingleRecipe /> | Displays a specific recipe
| /recipes/new | <Form /> | Displays an empty form for a user to create/input a new recipe
| /recipes/edit/:id | <Form /> | Displays a form populated with a recipe's data for a user to update/edit

## User Stories

A user should be greeted with a welcome message on the homepage

A user should be able to view all of the messages currently posted on the forum

A user should be able to post a new message to the forum

A user should be able to edit a message on the forum

A user should be able to delete a message on the forum

## Challenges

## List of Technologies

* CSS

* JS/JSX/JQuery

* React

## Component Tree

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