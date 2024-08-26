# node-my-org

Basic node application with express and nodemailer

# Download from node office website: https://nodejs.org/en and install it on your machine

# verifies the right Node.js version is in the environment

node -v

# verifies the right npm version is in the environment

npm -v

# Download this project and go to the download project folder

cd node-my-org

# Update .env file with SMTP details - **_ do not push this to github, it may content your credentials _**

PORT = 4000
ORG_EMAIL_ADDRESS = "organization@email.com"
SMTP_SERVICE = "Gmail"
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 465
SMTP_USER = "organization@email.com"
SMTP_PASSWORD = "password"

# Run npm install commend from command port or terminal

npm install

# Run this project from you local machine

npm run dev

# Browse to localhost:4000
