![DevJournal Screenshots](/readme-sc.png?raw=true)
[View the Live Version of DevJournal](https://devjournal-kirill.herokuapp.com/)


# Project Description

DevJournal is meant to be a community for developers to share about their developer journey through writing simple journey entries. Whether it's writing about a new technology that was learned, or a new developer venting about them battling with CSS that day, I beleive that getting thoughts on "paper" helps solidfy new concepts as well as effectively work through any negative emotions that may be coming up. On top of getting thoughts out on "paper" having a community that can leave comments and notice your struggles as well as accomplishments can make the journey and industry a lot less lonely!

At first this project started out as a simple two page application that allowed *anyone* to compose an entry and view it on the homepage. My goal was to practice working with MongoDB and Express.js in a web application. But now, this application has grown significantly and is meant to be somewhat of a **"Medium.com"** clone in terms of functionality such as user authentication, commenting, and user profiles.

You can check out what the old version of the project looked like here --> [Old Version Link](https://kirill-dev-journal.herokuapp.com/)


## Tech Stack

At this moment, DevJournal has been built with HTML, CSS, JS on the front-end and Node.js, Express.js, and MongoDB for the back-end/database. I am using EJS for as the templating engine for server side rendering as well.

In the future React may be used to improve the overal UX of the application as the current setup may run into some bottlenecks with a lot more entries being posted.


## How to run this project on your local machine

1. Ensure that you have NPM and Node.js installed on your machine. Version 16.14.2 is being used in the current build.

2. Make sure that you have MongoDB installed and properly configured on your machine. These instructions do not cover how to run the project with a DB that is being run on an external server. However, minimal changes are required to get this to work and you can easily find instructions online.

3. In your project directory run `npm install` to install all the required dependencies. Updates may break functionality so proceed with caution.

4. The project files contain a couple environemnt variables that will need to be set in order for the application to work. Below are sample values that you may use:
- DB_URL=mongodb://localhost:27017/devJournalDB
- SESSION_SECRET=devjournalsecret
- SALT_BYTE_LENGTH=32
- PBKDF2_ITERATIONS=10,000
- PBKDF2_BYTES=64
- PBKDF2_HMAC=sha512

5. Start up MongoDB with the `mongod` command followed by any flags if your configuration requires it.

6. Start the application with `node app.js` and head to `localhost:3000` in your browser of choice.