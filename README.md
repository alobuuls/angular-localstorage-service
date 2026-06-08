<h1 align="center">🗄️ Angular LocalStorage Service</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/LocalStorage-Service-4285F4?logo=googlechrome&logoColor=white" alt="LocalStorage Service" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-localstorage-service" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-localstorage-service/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-localstorage-service?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-localstorage-service/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-localstorage-service" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [🗄️ Angular LocalStorage Service](#️-angular-localstorage-service)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-localstorage-service/

---

## 📖 Description

> [!NOTE]
> An Angular 16 application that implements a reusable LocalStorage service with configurable key prefixes and custom pipes.

The project demonstrates how to encapsulate browser storage operations behind reusable Angular services and modules, avoiding direct access to the Local Storage API while improving maintainability, scalability, and code organization.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v16.14.x – v18.x` *(recommended: v18 LTS)*
- 📦 **npm:** `v8+`
- 🅰️ **Angular CLI:** `v16.x`

## Recommended using nvm

```bash
nvm install 18
nvm use 18
```

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-localstorage-service.git

cd angular-localstorage-service
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a reusable architecture based on Angular services, modules, and custom pipes.

### 🗄️ LocalStorage Service

Responsible for:

* Saving values into Local Storage
* Retrieving stored values
* Removing stored values
* Managing configurable prefixes
* Preventing key collisions

### 🔄 LocalStorage Pipe

Responsible for:

* Reading Local Storage values from templates
* Simplifying UI integration
* Improving template readability

Example:

```html
{{ 'userName' | localstorage }}
```

### 📦 LocalStorage Module

Responsible for:

* Centralizing storage configuration
* Registering providers
* Initializing storage settings

### 🏠 App Component

Responsible for:

* Demonstrating storage operations
* Consuming the storage service
* Testing persistence functionality

---

## ✨ Features

* 💾 Store data in Local Storage
* 🔍 Retrieve values through a custom pipe
* 🧹 Clear storage by prefix
* ⚙️ Configurable key prefixes
* 📦 Reusable LocalStorage Service
* 🔄 Custom Angular Pipe
* 🚀 APP_INITIALIZER Configuration
* ♻️ Encapsulated Browser Storage Access

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Angular 16 | Front-End Framework |
| TypeScript | Application Logic |
| Local Storage API | Browser Persistence |
| Angular Services | Business Logic |
| Angular Pipes | Template Data Access |
| Angular Modules | Feature Organization |
| APP_INITIALIZER | Application Bootstrap Configuration |

---

## 📁 Project Structure

```text
angular-localstorage-service/

├── src/
│
├── app/
│   ├── localstorage/
│   │   └── localstorage.module.ts
│   │
│   ├── localstorage.service.ts
│   ├── localstorage.pipe.ts
│   │
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts
│
├── main.ts
├── styles.css
├── index.html
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔥 Best Practices Implemented

* Service-based Architecture
* Separation of Concerns
* Encapsulation of Browser APIs
* Dependency Injection
* APP_INITIALIZER Configuration
* Reusable Angular Modules
* Custom Pipes
* Strong Typing with TypeScript
* Centralized Storage Management
* Clean Project Organization
* Scalable Front-End Design

---

## 🎯 Project Goal

Practice and strengthen Angular architecture concepts through the implementation of a reusable LocalStorage abstraction layer.

Key concepts covered:

* Angular Services
* Angular Pipes
* Angular Modules
* APP_INITIALIZER
* Local Storage API
* Dependency Injection
* Browser Data Persistence
* Reusable Architecture Patterns
* TypeScript Best Practices
* Front-End Application Design

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
