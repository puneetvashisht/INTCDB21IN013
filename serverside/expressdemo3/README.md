    Steps to start db
    - create a directory <dbdata>
    - make sure mongo bin directory in in PATH 
    - mongod --dbpath <dbdata>

    Steps to create a node,express,mongo app
    - package.json and install deps: npm init, npm i express mongodb cors
    - server.js using express (express json parser, middleware routes)
    - repo : responsible for db operations, export the operations out
