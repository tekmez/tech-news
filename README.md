# The NEWS

This project is a high-performance and user-friendly news website developed using modern web technologies.

## Features

- **Light/dark** mode toggle
- **Dynamic News Listing**: Filterable content by category.
- **Fast Data Management**: Effective cache management and "stale-while-revalidate" strategy with TanStack Query.
- **Responsive Design**: Fully compatible interface for mobile, tablet, and desktop devices.

## Tech Stack

React, NextJS, TailwindCSS, Shadcn, Tanstack Query

## Run Locally

Clone the project

```bash
  git clone https://github.com/tekmez/tech-news.git
```

Go to the project directory

```bash
  cd tech-news
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_NEWS_API_URL=https://newsdata.io/api/1`

`NEXT_PUBLIC_NEWS_API_KEY=pub_8e974103229c4b59bc97024610655a67`
