![DevJournal Screenshots](/readme-sc.png?raw=true)
[Live Version of DevJournal](https://devjournal-kirill.herokuapp.com/)

# What is this project?

This is a small *'blog-like'* project which allows users to dynamically post journal entries regarding their development journey. 

You can view a live version of this project which is using MongoDB Atlas and is hosted with Heroku [here](https://devjournal-kirill.herokuapp.com/)

**I built this project for two main reasons:** 
1. To put Node.js, Express.js, EJS, & MongoDB/Mongoose principles that I learned into practice through a functional project
2. To have a place that I can document new programming/development items that I have learned. I feel like it is another way to 'work' with the material that is learned and be able to better understand and retain the information.

---
To quick start this project, I used a front-end template provided by The App Brewery from their Full-Stack Web Development Course. After developing the functionality, I edited the front-end (EJS and stylesheet) to match my preference and practice with Dark Mode color schemes.

## How to run this project on your local machine

1. Ensure that you have NPM and Node.js installed on your machine
2. Make sure that you have MongoDB installed and properly configured on your machine. These instructions do not cover how to run the project with a DB that is being run on an external server, minimal changes to the code are required for this to work. 
3. In your project directory run `npm install` to install all the required dependencies.
4. Once dependencies are installed head to the **app.js** file and locate the `mongoose.connect()` function. By default the name of the database is `devJournalDB` but you may change it to whatever you like at the end of the string.
5. Start up MongoDB with the `mongod` command followed by any flags if your configuration requires it
6. Start the application with `node app.js` and head to `localhost:3000` in your browser of choice.
