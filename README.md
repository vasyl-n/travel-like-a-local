# travel-like-a-local :dromedary_camel: :camel: :dromedary_camel: :dromedary_camel: :camel: :dromedary_camel:
> An appplication that allows you to display suggestions from friends when you want to make a trip to a selected destination.


![screenshot](https://github.com/BenevolentBactrians/travel-like-a-local/blob/master/screencaptures/explore_full.jpeg)


## Team

  -  [Eric Chi](https://github.com/echi81)
  -  [Vasyl Nesterenko](https://github.com/vasyl-n)
  -  [mjraybk07](https://github.com/mjraybk07)

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
npm run build (to start webpack)
  ```

  ```sh
 npm run start (to start server)
  ```
  
  ```sh
  npm run debug (to run tests)
  ```

  -  Open localhost:3000
  -  Please make sure to provide your own google api keys for google maps in file lib/util.js as our key will probably expire after some calls to the google maps API

### Documents


![alt text](https://github.com/BenevolentBactrians/travel-like-a-local/blob/master/documents/application%20architecture.png)

![alt text](https://github.com/BenevolentBactrians/travel-like-a-local/blob/master/documents/Database%20Relationship%20Diagram.png)

## Wireframes

view [wireframes](https://github.com/BenevolentBactrians/travel-like-a-local/wiki/Wireframes)


