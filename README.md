# travel-like-a-local
> An appplication that allows you to display suggestions from firends when you want to make a trip to a selected destination.

## Team

  -  [Eric Chi](https://github.com/echi81)
  -  [Vasyl Nesterenko](https://github.com/vasyl-n)
  -  [Michael Filis](https://github.com/mjraybk07)

## Requirements
> MySQL, Express, Node, React

## Installing

  -  Download repo from github, link is provided in the bulletin board

  ```sh
  npm install
  ```
  ```sh
  npm install -g webpack
  ```
  -  Contact a member of the team to get database credentials that are stored in the config.js file on the db folder, not included in github
  -  Please notice that the db will also stay available until 9-6 as it is on the personal aws account of Ioannis
  -  A Schema.sql file is provided in the db folder to instantianate your own schema in your instance of MySQL, please provide connection details in file config.js of db folder

  ```sh
  mysql.server start
  ```

  ```sh
  mysql -u "username" -p< Schema.sql
  ```

-  from seperate terminals
  ```sh
  Run webpack --watch
  ```

  ```sh
  nodemon server.js
  ```

  -  Open localhost:3000
  -  Please make sure to provide your own google api keys for google maps in file lib/util.js as our key will probably expire after some calls to the google maps API

### Documents

view [app architecture](https://github.com/BenevolentBactrians/travel-like-a-local/wiki/App-Architecture)

## Wireframes

view [wireframes](https://github.com/BenevolentBactrians/travel-like-a-local/wiki/Wireframes)

  -  If you encounter any problem please get in touch with one of the team members




