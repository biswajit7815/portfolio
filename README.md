# DevOps Professional Portfolio

A highly professional, responsive, and fully Dockerized portfolio website tailored for DevOps Engineers. Built with Vite, React, Tailwind CSS, and Framer Motion, it features dynamic GitHub API integration and a production-grade containerized setup powered by Nginx.

## Features
- **Modern Tech Stack**: React (Vite) + Tailwind CSS + Framer Motion.
- **Dynamic Content**: Automatically fetches your latest GitHub repositories and displays them.
- **DevOps Oriented**: Includes dedicated sections for cloud skills, CI/CD, and monitoring.
- **Production Ready**: Fully automated multi-stage `Dockerfile` and an optimized Nginx web server.
- **Self-Hosted**: Includes `docker-compose.yml` for instant zero-configuration deployment.

---

## 🛠 Local Setup & Development

If you want to run the application locally without Docker to make code changes:

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Dev Server**:
   ```bash
   npm run dev
   ```
4. Access the app at `http://localhost:5173`.

---

## 🐳 Docker Deployment

The fastest way to deploy this application is via Docker.

### Prerequisites
- Docker
- Docker Compose

### Commands

1. **Build and start the container in detached mode**:
   ```bash
   docker-compose up -d --build
   ```

2. **Check the application**:
   Open a browser and navigate to `http://localhost`.

3. **View Logs**:
   ```bash
   docker-compose logs -f
   ```

4. **Stop the container**:
   ```bash
   docker-compose down
   ```

---

## ☁️ Deployment on AWS EC2

To deploy this portfolio live on an AWS EC2 instance:

1. **Launch an EC2 Instance**: 
   - Choose an Amazon Linux 2 or Ubuntu AMI.
   - Attach a Security Group that allows inbound traffic on **Port 80 (HTTP)**, Port 443 (HTTPS), and Port 22 (SSH).

2. **Connect to your instance**:
   ```bash
   ssh -i /path/to/your-key.pem ubuntu@<your-ec2-public-ip>
   ```

3. **Install Docker and Docker Compose**:
   ```bash
   sudo apt update
   sudo apt install docker.io docker-compose -y
   sudo systemctl enable docker
   sudo systemctl start docker
   sudo usermod -aG docker ubuntu
   ```
   *(Log out and log back in to apply the docker group changes)*

4. **Clone your repository**:
   ```bash
   git clone https://github.com/biswajit7815/portfolio-website.git
   cd portfolio-website
   ```

5. **Deploy**:
   ```bash
   docker-compose up -d --build
   ```

6. **Verify**:
   Access `http://<your-ec2-public-ip>` in your web browser.

---

### Customization

- **Updating the GitHub Data**: In `src/App.jsx`, locate the GitHub API URL and ensure it has your correct username.
- **Configuring Email Form**: Update the email address `biswajitbehera1868@gmail.com` in the Contact section to trigger the mail client directly.
