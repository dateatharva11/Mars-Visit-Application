# Mars Visit Application

A multi-stage form application for the Mars Visit project, built with React, Bootstrap, and Next.js. This application allows users to apply for a Mars visit through a series of stages, with real-time form validation and data collection.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Tests](#tests)
- [Live Site](#live-site)


## About

The Mars Visit Application is a web application designed to simulate the process of applying for a visit to Mars. The application is broken into three stages:

1. **Personal Information**: Collecting details such as the user's name, email, and date of birth.
2. **Travel Details**: Asking about travel preferences, including preferred departure dates.
3. **Final Confirmation**: Confirming the submission and displaying a summary of the entered data.

The form is validated on each step to ensure accurate and complete data submission before proceeding to the next stage.

## Features

- Multi-stage form to simulate an application process for a Mars visit.
- Form validation at each stage to ensure correct data entry.
- Responsive design using Bootstrap and custom CSS to ensure a smooth user experience on all screen sizes.
- React components for each stage and dynamic rendering based on user input.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Bootstrap**: Front-end framework for responsive design and UI components.
- **JavaScript (ES6+)**: Modern JavaScript features for better performance and readability.
- **Jest**: JavaScript testing framework used for unit and integration testing.
- **Babel**: JavaScript compiler used to support modern JavaScript syntax.
- **Node.js**: JavaScript runtime used to run the application.

## Setup and Installation

To get started with the Mars Visit Application, follow the steps below:

### Prerequisites

Ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/yourusername/mars-visit-application.git
cd mars-visit
```

### Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

Start the Development Server
Run the development server to view the application locally:

```bash
npm run dev
```

The application will be accessible at http://localhost:3000.

## Usage

Once the development server is running, you can interact with the form and go through the stages of the Mars Visit application. Each stage will guide you through filling out the required information. If any information is missing or invalid, the form will display an error message.

## Tests

This project uses Jest for unit and integration tests. To run the tests, execute the following command:

```bash
npm test
```

This will run all the tests defined in the unittests/ folder and output the results in your terminal.

## Live Site

The site is hosted and available at <link>
