# UI Component Library – Assignment 12

This project is a React + Storybook-based UI component library containerized with Docker.

- Production build hosted via Docker
- Working directory: `bijeesh_jithu_ui_garden`
- Container name: `bijeesh_jithu_coding_assignment12`
- Runs on: `localhost:8083`

---

## run the command to see all the components and their disabkes state on storybook

npm run storybook

## to build the docker file

"docker build -t bijeesh_jithu_coding_assignment13 ."

## How to Run the Project Locally

docker run -d -p 8083:8083 --name bijeesh_jithu_coding_assignment12 bijeesh_jithu_coding_assignment12
and open the url on your browser
http://localhost:8083

## to test Components

npm run test

### 1. Make sure Docker is installed

Download Docker Desktop from: https://www.docker.com/products/docker-desktop/
