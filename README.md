<div align="center" markdown="1">
# Concise React + Vite template
<br>
# A lightweight React boilerplate powered by Vite and TypeScript, designed for rapid development with a focus on simplicity and performance.

#Welcome to the documentation for the Concise Boilerplate (React Vite). This document provides an overview of the project structure, components, styles, assets, and other relevant information to facilitate a smooth handover.
</div>

## Features

- 🚚 **Vite-Powered:** Utilizes Vite for rapid development, fast builds, and instant server start.
- 📒 **TypeScript:** Leverage static typing for robust and scalable code.
- 🎨 **Tailwind CSS:** Quickly style your components with the utility-first CSS framework.
- 🎨 **Daisy UI:** daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever.
- 🚧 **ESLint & Prettier:** Maintain code quality and consistency with industry-standard linting and formatting.
- 🚀 **React Router DOM:** Enable seamless navigation and routing in your React applications.
- 🎬 **React Redux:** Manage state effortlessly with the power of Redux for React.

## Project Structure
```
/src
|-- /assets      -> contains static assets such as images, fonts, or other files that are used in your application.
|-- /components  -> reusable React components. should be modular and designed for reuse
|-- /modal       -> specifically designed for creating modal dialogs or pop-ups within your application
|-- /pages       -> React components that represent different pages or views in your application
|-- /services    -> services or utility functions that handle communication with APIs
|-- /template   
|-- /types       -> TypeScript type definitions for your project
|-- /ui-kit      -> UI-related components that form a design system or UI kit for your application
|-- /utils       -> functions and helper modules.
|-- App.js
|-- index.js
```

## Quick start

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Adding new components to the project
In order to standardize components creating generate-react-cli.json contains the information to create Components, Pages and Layouts and their associates
- Creating a component:
```
npx generate-react-cli component ComponentName 
```
- Creating a page or a layout:
```
npx generate-react-cli component PageName  --type=page
npx generate-react-cli component CompName  --type=default
```
these commands will create the new component in a sub-folder located inside these folders depending on the type:
- ./src/components
- ./src/pages

The root folder can also be manually specified by using --path parameter
```
npx generate-react-cli component PageName  --type=page --path=src/pages/
npx generate-react-cli component CompName  --type=default --path=src/components/
```
The output will be inside "./src/pages/some-inner-folder/PageName/" for the first case

Dont Forget Update index.ts on parent folder and App.tsx for routing

## Technologies

- **React v18.2.0**
- **Vite v4.1.0**
- **TypeScript v4.9.3**
- **Tailwind CSS v3.2.7**
- **Daisy UI CSS v3.9.2**
- **ESLint v8.35.0**
- **Prettier v2.8.4**
- **React Router DOM v6.8.2**
- **React Redux v8.0.5**

## Script 

- **npm run dev:** Start the development server.
- **npm run host:** Start the development server and make a local server available to host the project.
- **npm run build:** Build the project for production.
- **npm run preview:** Start the development server using Build Dist.
- **npm run test:** Run tests.

## License

For inquiries, contact [Concise](mailto:info@concise.co.id).