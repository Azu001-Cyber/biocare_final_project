# Biocare - Disease Information Lookup Platform

## Project Description

Biocare is a full-stack web application that allows users to search for disease and view structured information about symptoms, causes, treatments, and prevention measures. The platform features:

- A search-driven interface to find disease information
- A backend API that returns disease data
- A responsive frontend for browsing results
- User authentication (signup / login)
- User Profile Customization Feature
- Admin interface for managing disease records

This product was developed as part of internship delivevables and demonstrates modern web development practices.

---

## Tech Stack

### Backend
- **Pyhton**
- **Django**
- **Django Rest Framework**

## Frontend
- **React** (Vite)
- **React Router DOM**
- **Tailwind CSS**
- **Lucide-React (Icons)**

### Database
- Default Django DB (SQLite) for development (can be replaced with PostgreSQL)

### Database
- Default Django DB (SQLite) for development (can be replaced with PostgreSQL)

---

# Setup Instructions
## Clone the Repository and change into the directory

```
git clone https://github.com/Azu001-Cyber/biocare_final_project.git
cd biocare_final_project
```

## Backend setup
### Create & Activate Virtual Environment
```
python -m venv venv
```

Activate:
- windows
```
venv\Scripts\activate
```

- Mac/Linux

```
source venv/bin/activate
```

## Install Dependencies

```
pip install -r requirements.txt
```

## Run migrations

```
python manage.py migrate
```

## Create Admin Superuser

```
python manage.py createsuperuser
```

## Start Backend Server

```
python manage.py runserver
```

By default, the backend will run at:

```
http://127.0.0.1:8000/
```

# Frontend Setup
Navigate into the frontend folder:
```
cd biocare_frontend
```
# Install Node Dependencies
```
npm install
```
# Install Node Dependencies

```
npm run dev
```
By default, the frontend will run at:

```
http://localhost:5173/
```
