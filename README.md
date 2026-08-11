# Banking Dashboard

A front-end banking dashboard built with React to practice component-based development, state management, and interactive UI functionality.

The project includes multiple account cards, balance management, quick credit/debit transfers, and a transaction history interface.


## Table of Contents

* [Live Demo](#live-demo)
* [Features](#features)
* [Built With](#built-with)
* [Project Files](#project-files)
* [Project Structure](#project-structure)
* [What I Practiced](#what-i-practiced)
* [Current Layout](#current-layout)
* [Reference Docs](#reference-docs)

## Live Demo

Click the link below to visit the live interactive demo:

**[Live Demo](https://hadiashah01.github.io/bank-account-manager/)**

## Features

* Banking dashboard interface
* Checking, Savings, and Credit account cards
* Available balance section
* Quick Credit and Debit functionality
* Dynamic account balance updates using React state
* Transaction history table
* Reusable React components
* CSS-based dashboard styling
* Horizontal scrolling for account cards and transaction tables where needed

## Built With

* React
* JavaScript (ES6+)
* Vite
* CSS3
* Flexbox
* Font Awesome
* Google Fonts

## Project Files

| File / Folder     | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `src/components/` | Reusable React components                               |
| `src/App.jsx`     | Main application component and account state management |
| `src/index.css`   | Global styling and base styles                          |
| `src/main.jsx`    | React application entry point                           |
| `index.html`      | Main HTML document                                      |
| `package.json`    | Project dependencies and scripts                        |

## Project Structure

```text
banking-dashboard/
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── AccountsCard/
│   │   ├── QuickTransferCard/
│   │   ├── AvailableBalance/
│   │   └── TransactionTable/
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
└── README.md
```

## What I Practiced

* React functional components
* `useState` for application state
* Passing data and functions through props
* Updating objects inside arrays using `map()`
* Handling credit and debit operations
* Controlled form inputs
* Component-based UI structure
* CSS Flexbox
* Dashboard card layouts
* Styling tables and form controls
* Organizing a React project into reusable components

## Current Layout

The current version is primarily designed as a mobile dashboard.

Some sections use horizontal scrolling to prevent content from being compressed on smaller screens, but **full responsive optimization has not been implemented yet**.


## Reference Docs

* [React Documentation](https://react.dev/)
* [Vite Documentation](https://vite.dev/)
* [MDN Web Docs – CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [MDN Web Docs – Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
* [Font Awesome Documentation](https://fontawesome.com/docs)
* [Google Fonts](https://fonts.google.com/)
