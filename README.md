# SITE

## Build status
[![CircleCI](https://circleci.com/gh/Ajris/site/tree/master.svg?style=svg)](https://circleci.com/gh/Ajris/site/tree/master)

## Hit Count
[![HitCount](http://hits.dwyl.com/Ajris/site.svg)](http://hits.dwyl.com/Ajris/site)

## Installation

### Prerequisites
 - yarn installed

### Clone
 - Clone this repo to your machine using `git clone git@github.com:Ajris/site.git`
 
### Setup
 - `yarn install`
 - `yarn start`

## Tests
 - `yarn test`
 
## Current Flow
1. Task from Trello
2. Branch connected to task
3. Commits & Work
4. Pull Request
5. CircleCI
6. Build
7. Testing
8. Building docker image and deploying to DockerHub
9. Deploying to SonarCloud
10. After everything passed successfully(6,7,8,9) merge is possible
11. Merge
12. Rebuilding application on heroku
13. Application can be watched here: [https://ajris.herokuapp.com/]

## Available commands

In project directory:

### `yarn start`
[http://localhost:3000] -> App is running
Page is reloading after making edits.
### `yarn test`
Launches [jest] tests