# My Static Website

A responsive static website built with **HTML, CSS, and JavaScript**, created as part of my learning journey in **DevOps, Cybersecurity, AWS, and web technologies**.

This project demonstrates website development, Git/GitHub version control, deployment concepts, and **Docker containerization**.

## 🚀 Project Overview

This project is a personal static website containing profile information, skills, projects, experience, certificates, resume, and contact information.
## 🏗️ Architecture

![My Static Website Architecture](architecture-diagram.png)
The project was also used for practicing **Docker and Containerization** as part of my Codomax internship.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Docker
- Docker Compose
- Nginx
- Amazon S3

## ✨ Features

- Responsive website layout
- Personal profile section
- Skills and technology section
- Projects section
- Experience section
- Certificates section
- Resume section
- Contact section
- Interactive elements using JavaScript
- Dockerized static website
- Nginx web server
- Docker Compose configuration

## 📁 Project Structure

```text
my-static-website/
│
├── index.html
├── style.css
├── script.js
├── profile.jpg
├── resume.pdf
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── README.md
```

## 🐳 Docker Containerization

The static website is containerized using **Docker** and served through **Nginx**.

### Dockerfile

The project uses the lightweight `nginx:alpine` image as the base image.

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
```

### Build Docker Image

```bash
docker build -t my-static-website:optimized .
```

### Run Docker Container

```bash
docker run -d --name my-static-website-optimized -p 8083:80 my-static-website:optimized
```

The website can then be accessed at:

```text
http://localhost:8083
```

## 🐳 Docker Compose

The project also includes a `docker-compose.yml` file for easier container management.

```yaml
services:
  website:
    build: .
    ports:
      - "8082:80"
```

Run the application with:

```bash
docker compose up -d
```

The website can be accessed at:

```text
http://localhost:8082
```

Stop the Compose application with:

```bash
docker compose down
```

## 📦 Docker Concepts Practiced

During the Docker and Containerization module, I practiced:

- Docker images
- Docker containers
- Dockerfile
- Docker image building
- Port mapping
- Container networking
- Docker volumes
- Environment variables
- Docker Compose
- `.dockerignore`
- Nginx-based containerization
- Basic Dockerfile optimization

## ☁️ AWS S3 Deployment

This project was also prepared for deployment using **Amazon S3 Static Website Hosting**.

The deployment process includes:

1. Creating an S3 bucket
2. Uploading website files
3. Configuring static website hosting
4. Configuring required bucket permissions
5. Accessing the website through the S3 website endpoint

## 🔄 Development Workflow

```text
Edit website in VS Code
        ↓
Git add
        ↓
Git commit
        ↓
Git push
        ↓
GitHub
        ↓
Docker Build
        ↓
Docker Container
```

## 👨‍💻 Author

**Muhammad Ahsan Imran**

BS Information Technology (BSIT) Student  
Aspiring DevOps Engineer & Cybersecurity Enthusiast

### Connect with me

- GitHub: https://github.com/MuhammadAhsanImran
- LinkedIn: https://www.linkedin.com/in/m-ahsan-m-imran-b1985b40b

## 📌 Project Status

**GitHub Repository:** Completed ✅

**Docker Containerization:** Completed ✅

**Docker Compose:** Completed ✅

**AWS S3 Deployment:** Completed / Practiced ✅

**Live Website:** https://my-ahsan-website.vercel.app/

---