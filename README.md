# Cars Dealership Full-Stack Capstone

A full-stack web application for **Cars Dealership**, a national car retailer in the U.S. Users can browse dealership branches, view reviews with sentiment analysis, and submit their own reviews after logging in.

## Tech Stack

- **Frontend:** React, HTML5, CSS3
- **Backend:** Django, SQLite
- **Microservices:** Express.js + MongoDB, Flask sentiment analyzer
- **Cloud:** IBM Code Engine, Kubernetes, Docker
- **CI/CD:** GitHub Actions (flake8 + JSHint)

## Features

- User registration, login, and logout
- Dealer listing and filtering by state
- Dealer details with sentiment-analyzed reviews
- Post reviews (authenticated users)
- Car makes and models
- Django admin for car data

## Project Structure

```
server/
├── djangoapp/       # Django backend and proxy APIs
├── djangoproj/      # Django project settings
├── database/        # Express + MongoDB microservice
├── frontend/        # React app and static pages
└── deployment.yaml  # Kubernetes deployment
```

## Author

Syed Ali Ahzum — IBM Full Stack Software Developer Professional Certificate Capstone
