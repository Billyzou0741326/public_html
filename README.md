# Public Html

This is a personal site hosted at [minamiktr.com](https://www.minamiktr.com/) or [psu](https://web.cecs.pdx.edu/~zguanhan/).

## Framework used

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Material-ui](https://material-ui.com/)

## Setup dependencies

Run ***once*** to setup the dev environment before doing anything else:

```shell script
npm install
```

## Compile

For deployment:

```shell script
npx webpack --mode=production
```

The html and javascript files will be compiled into the (not yet existing) `dist/` folder.

The `static/` folder, which contains images and icons, should be deployed alongside the generated `dist/`.

## Dev (with hot-reload)

```shell script
npx webpack-dev-server
```

Then fire up the browser and find the page at <http://127.0.0.1:3000/>.