# 📋 React-Todo 📋

### Basic ToDo app created with React

Implements core React concepts and practices Inspired by the Net Ninja's React
tutorial This is a simple ToDo app that allows you to add and delete tasks.

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## 🔨 Built With:

- [Visual Studio Code](https://code.visualstudio.com/) - _The IDE used_

## ⚒️ Made with:

- [React JS](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [json-server](https://www.npmjs.com/package/json-server)
- [NodeJS](https://nodejs.org/en/)

## 📝 Authors:

- **Petar Taushanov** - [ptaushanov](https://github.com/ptaushanov)

## ⚙️ Running the project

### Running the front-end

```
npm run start
```

Default port is set to 3000.

---

### Running the back-end

In the root directory is located the `data` directory where a file named
`db.json` is located. That will be the database. We will be using `json-server`
module to update the `db.json` file and handle the requests from the front-end

To start `json-server` run:

```
npx json-server -w "./data/db.json" -p 8000
```

Port of the back-end server would be 8000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the
best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

## License

This project is licensed under the MIT License - _see the_
[LICENSE.md](https://github.com/ptaushanov/React-Todo/blob/master/LICENSE) _file
for details._
