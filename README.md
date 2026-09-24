# CareerCourse

A full-stack web app that helps students and professionals discover online courses from platforms like Udemy, Coursera and YouTube, and find a learning path through a short career quiz.

**Live demo:** [Career Course Website](https://career-course12.vercel.app/)  
**Admin Dashboard:** [Admin Dashboard](https://career-course12.vercel.app/admindashboard)
<img width="1915" height="971" alt="image" src="https://github.com/user-attachments/assets/95c3cbd0-f413-4399-a400-70f4294b67e6" />


## Features

- **Browse courses** with search and filters for platform, level, category and minimum rating
- **Course details page** with instructor, duration, rating, price and an Enroll button that opens the course on its original platform
- **Career quiz** —  questions  that return recommended courses from the catalog
- **Authentication** — register and log in with email and password (JWT-based)
- **Admin dashboard** to add, edit and delete courses
- **Static pages:** About, Contact, Privacy Policy and Disclaimer

## Tech Stack

| Layer    | Technology                                                    |
| -------- | ------------------------------------------------------------- |
| Frontend | React 19, Vite, React Router 6, Tailwind CSS 4, Lucide icons |
| Backend  | Node.js, Express 5                                            |
| Database | MongoDB with Mongoose                                         |
| Auth     | JSON Web Tokens (`jsonwebtoken`), password hashing (`bcryptjs`) |
| Hosting  | Vercel (frontend), Render (backend)                           |

## Project Structure

```
CareerCourse/
├── backend/
│   ├── models/          # Course.js, User.js (Mongoose schemas)
│   ├── routes/          # authRoutes.js, courseRoutes.js
│   └── server.js        # Express entry point
└── frontend/
    └── src/
        ├── components/  # Navbar, Footer, ScrollToTop
        └── pages/       # Home, Course, CourseDetails, CareerQuiz,
                         # Login, Register, AdminDashboard, About,
                         # Contact, PrivacyPolicy, Disclaimer
```

## Data Models

**Course:** `title`, `instructor`, `platform`, `price`, `rating`, `category`, `duration`, `level`, `image`, `description`, `enrollLink` (plus timestamps)

**User:** `name`, `email` (unique), `password` (hashed), plus timestamps

## API Endpoints

| Method | Endpoint             | Description                                              |
| ------ | -------------------- | -------------------------------------------------------- |
| POST   | `/api/auth/register` | Create a new account                                     |
| POST   | `/api/auth/login`    | Log in; returns a JWT and the user's name                |
| GET    | `/api/courses`       | List courses; supports `search`, `category`, `level` query params |
| GET    | `/api/courses/:id`   | Get a single course                                      |
| POST   | `/api/courses`       | Add a course                                             |
| PUT    | `/api/courses/:id`   | Update a course                                          |
| DELETE | `/api/courses/:id`   | Delete a course                                          |

## Getting Started

### Prerequisites

- Node.js 20.19+ (or 22.12+) and npm
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Clone the repository

```bash
git clone https://github.com/yuvrajkatiyar/CareerCourse.git
cd CareerCourse
```

### 2. Run the backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm run dev
```

The API runs at `http://localhost:5000`.

### 3. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

> **Note:** The frontend currently calls the deployed API at `https://careercourse-3dj3.onrender.com` directly. To use your local backend, replace that base URL in the frontend `fetch` calls (or move it into an environment variable).

## Deployment

- **Frontend:** import the repo into Vercel and set the root directory to `frontend`.
- **Backend:** deploy `backend` to Render (or any Node host) with the start command `node server.js`, and set the same environment variables as above. Allow the deployed frontend origin in your CORS settings if you restrict it later.

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a pull request


## Author

**Yuvraj Katiyar** — [@yuvrajkatiyar](https://github.com/yuvrajkatiyar)
**Mantu Kumar** — 
**Sudeep Kumar** — 
