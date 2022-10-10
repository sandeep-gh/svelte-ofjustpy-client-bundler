# dependencies



Basic [Svelte](https://svelte.dev) plus [Vite](https://vitejs.dev) configuration for micro frontend development.

## Requirements

* [Node.js](https://nodejs.org) version 18
* [npm CLI](https://docs.npmjs.com/cli/) (bundled with Node.js)  version 8.100

tested with node version 18 and npm version 8.11

## Installation

Download the source files (don’t clone since you want to create a “new” project).

Install dependencies with:

```sh
npm install
```

## Usage

Start development server:

```sh
npm run dev
```

Build production files:

```sh
npm run build
```

Lint JS and CSS code:

```sh
npm run lint
```

## Embed the micro frontend

Reference the output JS file inside the `<head>` before any `<link rel="stylesheet">`:

```html
<script defer src="dist/svelte-micro-frontend.iife.js"></script>
```

Add the following inside the `<body>` where you want the micro frontend to appear:

```html
<div id="svelte-micro-frontend"></div>
```

## Adding tailwind
```
npm install -D tailwindcss
npx tailwindcss init tailwind.config.cjs -p
```

- create app.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind typography;


```
