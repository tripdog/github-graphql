# GitHub GraphQL API integrations 
The purpose of this project was to use the new GitHub GraphQL
API to pull down the top 10 most popular repos on GH.

Technoolgies used: Express, Vanilla JS, GraphQL
Learnings:
1. If you get an error saying, "SyntaxError: await is only valid in async 
functions and the top level bodies of modules", you've forgotton an important
piece of the async/await syntax (Make sure you have ASYNC at the top of the 
function that's using it :-) )

2. Markdown is not part of this Bootcamp, but I'm picking it up out of necessity.
It's used on Discord, and for this very readme file, plus it's just good to know.

3. Env files. FIRST run npm install node-env-run -g to install the package that 
will parse the file. That's a good way to store secret things like API keys. 
The .env file goes like this:

```
APIKEY=1234567
then in your program call the key with:
const APIKEY = process.env.APIKEY;

/* You test this by running a console.log(APIKEY) and see that node returns it
into the console. */
```
![alt text](https://github.com/tripdog/github-graphql/blob/master/public/img/screen-shot.jpg?raw=true)

