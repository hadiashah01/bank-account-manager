# Banking Dashboard

A front-end banking dashboard built with **React** to practice component-based development, state management, component communication, and interactive banking functionality.

The application provides multiple account cards, dynamic account selection, balance management, credit/debit transfers, and transaction history.

# Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Key Functionality](#key-functionality)
- [Account Selection](#account-selection)
- [Credit](#credit)
- [Debit](#debit)
- [Transaction History](#transaction-history)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [What I Practiced](#what-i-practiced)
- [Future Improvements](#future-improvements)
- [SEO](#seo)
- [References](#references)
- [Author](#author)

## Live Demo

Click on preview image to visit live demo

[![View Live Demo](./public/preview.png)](https://hadiashah01.github.io/bank-account-manager/)

## Features

- Banking dashboard interface
- Checking, Savings, and Credit account cards
- Dynamic active-account selection
- Available balance display
- Quick Credit functionality
- Quick Debit / account-to-account transfers
- Dynamic account balance updates
- Transaction history
- Daily credit and debit limits
- Reusable React components
- Controlled form inputs
- Horizontal scrolling for account cards and tables where required

## Tech Stack

- **React**
- **JavaScript (ES6+)**
- **Vite**
- **CSS3**
- **Flexbox**
- **Font Awesome**
- **Google Fonts**

## How It Works

The application keeps the main account state in `App.jsx`.

Account data and functionality are passed to child components through props.

```text
App
├── Header
├── AccountsCard
│   └── Account selection
├── QuickTransferCard
│   └── Credit / Debit
├── AvailableBalance
│   └── Active account data
└── TransactionTable
    └── Transaction history
```

The active account is selected from `AccountsCard`, while components such as `AvailableBalance`, `QuickTransferCard`, and `TransactionTable` display or modify data related to that account.

## Key Functionality

### Account Selection

Users can select an account from the account cards. The selected account becomes the active account, and the relevant account information is displayed throughout the dashboard.

### Credit

The Credit functionality:

- Adds funds to the active account.
- Updates the account balance.
- Records the transaction.
- Applies the configured daily credit limit.

### Debit

The Debit functionality:

- Deducts funds from the active account.
- Transfers the amount to the selected target account.
- Updates both account balances.
- Records the transaction.
- Applies the configured daily debit limit.

### Transaction History

Each account maintains transaction records containing information such as:

- Transaction type
- Updated balance
- Date and time

The transaction data is passed to the transaction table for display.

## Project Structure

```text
bank-account-manager/
│
├── public/
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
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/hadiashah01/bank-account-manager.git
```

Move into the project directory:

```bash
cd bank-account-manager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## What I Practiced

This project helped me practice:

- React functional components
- `useState` and application state management
- Passing data through props
- Passing functions through props
- Managing objects inside arrays
- Updating account data with `map()`
- Active account selection
- Credit and debit operations
- Controlled form inputs
- Transaction management
- Component-based UI architecture
- CSS Flexbox
- Dashboard layouts
- Reusable component structure

## Future Improvements

Planned improvements include:

- Backend/API integration
- Persistent account and transaction data
- Authentication and authorization
- Improved form validation
- Transaction filtering and sorting
- Transaction pagination
- Full responsive desktop layout
- Better error and success feedback
- Automated testing

## SEO

The application includes basic SEO metadata such as:

- Page title
- Meta description
- Structured data using JSON-LD

The structured data describes the project as a web application and helps search engines better understand the page.

## References

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [MDN Web Docs – CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs – Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [Font Awesome Documentation](https://fontawesome.com/docs)
- [Google Fonts](https://fonts.google.com/)

## Author

**Hadia** **Shahjahan**
Built as a React front-end project to practice state management, component communication, and interactive UI development.
