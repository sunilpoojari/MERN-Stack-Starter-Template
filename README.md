
# Steps after cloning the Repository (Step 1)

Run following commands on CMD:

1. `npm install`
1. `npm run install-client`
1. Replace the mongodbURL in `config/keys.js` file
1. `npm run dev` : This should run the client & server simultaneously 



# How to know if everything is setup properly?
Make sure Step 1 has been performed.

* `npm run dev` : This should run the client & server simultaneously
* Goto [http://localhost:3000](http://localhost:3000) open the browser console and you should see:
> Successfully Connected to Backend... 

This message means everything is working properly.

> If running in production mode you will not see this.



# Deploying App
For Heroku:

1. Just init a git repository
1. Create a project in Heroku
1. Connect the project repo with heroku project
1. Deploy the project

For Local Production / Other Sites Deployment

1. `npm run build` : This will create a optimized build  in client folder.
1. `npm run start` : for local testing or delploy to where ever you wish to deploy the app.


## Available Scripts

In the project directory, you can run:

* ### `npm install`

    This installs all the required packages for server side

* ### `npm run install-client`

    This command installs all the required packages for client side.

* ### `npm run client`

    This will only run the client.

* ### `npm run server`

    This will only run the server in developement mode with the help of nodemon.

* ### `npm start`

    This will only run the server without nodemon

*  ### `npm run dev`

    Runs the app in the __development mode__.
    
    Server will run on [http://localhost:5000](http://localhost:5000)

    Open [http://localhost:3000](http://localhost:3000) to view client side in the browser.

    It will run both React & NodeJS at the same time using a package called Concurrently.

* ### `npm run build`

    This command is useful `only when the entire app is done` and you want to build the production version.

    Builds the app for production to the `build` folder Inside Client Folder.
    The build is minified and the filenames include the hashes.
    Your app is ready to be deployed!

    You can the goto Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

# Already Installed Packages

## Client Side
* `Axios`

## Server Side
* `express`
* `mongoose`
* `concurrently`

<br/>

>  ### Credits: @iamshaunjp @bradtravery <br /> for all the tutorials.

> ### Note : For any Queries you can contact me on twitter at [`@sunilpoojari91`](https://twitter.com/sunilpoojari91)

<br/>

# Extra Information:

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
