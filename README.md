
# :construction: Reactive Budget :construction:

This is a simple project to exercise my new skills with the modern Javascript stack.

It implements a simple API with explress.js and on the frontend we have a React.js implementation. It will also feature an implementation of mobile apps for iOS and Android featuring expo.js and React Native.

This comes after participating on the NextLevelWeek from Rocketseat where we implemented a simple app with the same stack.

The idea of this app is to push further my knowledge with this technologies and venture myself on a more complex system.

As an added bonus it made me tinker with figma and making the app pretty, wich is not my main skill.

# Setup

Requirements: have npm, yarn and docker set up on your machine. then follow the following check list.

- [ ] Clone the repo
- [ ] run the following command to setup your database container with docker: `docker run --name reactive-sql -p 3306:3306 -e MYSQL_DATABASE=reactive -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql --default-authentication-plugin=mysql_native_password`
- [ ] copy `.env.dist` to `.env` 
- [ ] copy `.ormconfig.json.dist` to `.ormconfig.json` 
- [ ] move to `/srv` and run `yarn install` 
- [ ] then run `yarn typeorm migration:run`
- [ ] then to have the backend running run `yarn serve`

At the moment I didnt finish the frontend connection to the server so this will be updated in due time.

To run the frontend:
- [ ] move to `/ui` and run `yarn install`
- [ ] run `yarn start`

so far this should be all that is needed. Note the project is not finished... 
 

# To do

### Server Side

- [x] Add Recource Bank | actions: CRUD | format: { id, shortenName, name, user, createdAt, updatedAt }
- [x] Add Recource Category | actions: CRUD | format: { id, name, user, createdAt, updatedAt }
- [x] Add Recource Transaction | actions: CRUD | format: { id, date, description, category, bank, amount, user, createdAt, updatedAt }
- [ ] Validate the data on all resources...
- [ ] add views/DTO for the outside world
- [ ] add Tests... these should have been added from the beginning but I am learning soooo... :P 
- [ ] refactor, I dont fully like the architecture I have at the moment...
### Web Side

- [ ] Connect to the Server
- [ ] add Recources classes
- [ ] Remove the many pages and make it scrollable
- [ ] double check the css
- [ ] Change alert for validation... 


#### Links 

Links that I am using to help me on my way to completing the project, may or may not be useful to anyone else.

https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

https://thesecurityvault.com/appsec/auth-token-in-localstorage/

https://livecodestream.dev/post/2020-08-11-a-practical-guide-to-jwt-authentication-with-nodejs/

https://security.stackexchange.com/questions/119371/is-refreshing-an-expired-jwt-token-a-good-strategy

regarding css: https://rscss.io/layouts.html



