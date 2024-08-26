###### node-my-org

Basic node application with express and nodemailer

###### Download from node office website: https://nodejs.org/en and install it on your machine

###### verifies the right Node.js version is in the environment

node -v

###### verifies the right npm version is in the environment

npm -v

###### Download this project and go to the download project folder

cd node-my-org

###### Update .env file with SMTP details ###### **_ do not push this to github, it may content your credentials _**

<p> PORT = 4000<br>
    ORG_EMAIL_ADDRESS = "organization@email.com"<br>
    SMTP_SERVICE = "Gmail"<br>
    SMTP_HOST = "smtp.gmail.com"<br>
    SMTP_PORT = 465<br>
    SMTP_USER = "organization@email.com"<br>
    SMTP_PASSWORD = "password"<br>
</p>

###### Run npm install commend from command port or terminal

npm install

###### Run this project from you local machine with "npm run dev" command

<p>npm run dev</p>

<p>
~node-my-org % npm run dev<br>
<br>
> my-org@1.0.0 dev<br>
> nodemon server.js<br>
<br>
[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`<br>
[nodemon] watching path(s): _._<br>
[nodemon] watching extensions: js,mjs,cjs,json<br>
[nodemon] starting `node server.js`<br>
Server is running on port: 4000<br>
</p>

###### Browse to localhost:4000 to access the application
