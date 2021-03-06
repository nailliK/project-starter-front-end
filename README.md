# Front-End Project Starter

This repository contains basic scaffolding and configurations for front-end projects using TypeScript and (optionally) Vue.js.

## What's Included
* Typescript configurations
* Vue v.2 and Vue Composition API
* Vue Router with base route
* Base SCSS libraries and configurations
* Parcel front-end compiler

## Requirements

* Node
* Yarn

## Installation

Run `yarn/npm install` to install the required NPM packages

## Local Development

Parcel comes with a build-in HTTP server for use when developing front-end projects locally. It comes equipped with hot-module replacement so that you can see your changes instantly without refreshing your browser.

* CD into the project directory
* To start the local development server, run `yarn/npm run dev`
* When the server has started, you'll see a terminal message that says `Server running at http://localhost:1234`
* Verify that the server is running and view your changes by visiting `http://localhost:1234`

## Production Builds

Production builds are also handled with Parcel. All assets and compiled code are saved in the `/dist` directory

* CD into the project directory
* To create a production build, run `yarn/npm run build`
* Completed builds will be saved in the `/dist` directory.

## To Do:
* Add Nuxt Support
* Convert from Composition API to Vue V.3
