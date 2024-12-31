# London App Brewery - Weather API

This is a solution to the [Weather API](https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/18125177) challenge on [Udemy](https://www.udemy.com/course/the-complete-web-development-bootcamp/).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How to install and run](#how-to-install-and-run)
- [Author](#author)

## Overview

### The challenge

"In this lesson, we will be learning how to use Express and Node.js to interact with a real-world API."

### Screenshot

![Screenshot](./thumbnail.png)

### Links

- Code URL: [Github](https://github.com/cekstedt/LAB-Weather-API)
- Live Site URL: [Render](https://weather-api-snbo.onrender.com/)
- Challenge URL: [Udemy](https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/18125177)

## My process

### Built with

- NodeJS
- Express

### How to install and run

#### Step one: Acquire an API key

You will first need to sign up for a free account at openweathermap.org and create an API key.  

According to their [How to start to work with Openweather API](https://openweathermap.org/appid) reference page:

> **How to call OpenWeather APIs with a freemium plan**  
> The API key is all you need to call any of our weather APIs. Once you sign up using your email, the API key (APPID) will be sent to you in a confirmation email. Your API keys can always be found on your account page, where you can also generate additional API keys if needed. Check our documentation page to find all technical information for each product.

Once you have an API key, insert it into your `.env` file like so:
```
API_KEY={api-key-string}
```

#### Step two: Local installation

Make sure you have node.js installed.
```
node -v
```

Clone into the repo.
```
git clone https://github.com/cekstedt/LAB-Weather-API.git
```

Navigate into the root project folder and install dependencies.
```
cd LAB-Weather-API/
npm install
```

Run the command `npm run start` to start the server, then navigate to http://localhost:3000/ (when developing locally).


## Author

- [@cekstedt](https://github.com/cekstedt)