# 🛰️ Ground Station UI

A modern **Ground Control Station (GCS) interface** for monitoring and controlling a rover/robotic system.

Built with **React, TypeScript, and Vite**, the application provides a centralized dashboard for live camera feeds, system status, diagnostics, and rover control.

> **Project Status:** Completed ✅

![Ground Station UI](./screenshots/dashboard.png)

---

## ✨ Features

### 📹 Multi-Camera Monitoring

* Grid-based camera feed layout
* Main camera focus view
* Support for displaying multiple rover camera streams
* Designed for real-time monitoring

### 📊 System Status & Diagnostics

* Centralized rover status information
* Connection and system-state indicators
* Live diagnostic information
* Latency monitoring for camera feeds

### 🎮 Rover Control

* Gamepad-based control interface
* Control-oriented dashboard layout
* Designed for integration with robotic motion/control systems

### 🖥️ Responsive Dashboard

* Dark, control-room-style interface
* Organized panels for cameras, telemetry, and controls
* Designed to keep important information visible during operation

---

## 🛠️ Tech Stack

| Technology            | Purpose                             |
| --------------------- | ----------------------------------- |
| **React**             | UI development                      |
| **TypeScript**        | Type-safe application development   |
| **Vite**              | Development and build tooling       |
| **CSS**               | Dashboard styling                   |
| **ROS 2 / rosbridge** | Robot communication and integration |
| **roslibjs**          | Browser-side ROS communication      |
| **Gamepad API**       | Controller input                    |

---

## 🏗️ Architecture

The Ground Station acts as the user-facing interface between the operator and the robotic system.

```text
                    ┌─────────────────────┐
                    │    Ground Station   │
                    │     React + TS      │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┼─────────────┐
                 │             │             │
                 ▼             ▼             ▼
          Camera Streams    Telemetry    Controller
                 │             │             │
                 └─────────────┼─────────────┘
                               │
                               ▼
                         ┌───────────┐
                         │   ROS 2   │
                         └─────┬─────┘
                               │
                               ▼
                         ┌───────────┐
                         │   Rover   │
                         └───────────┘
```

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8d31482d-b50b-457c-ac05-ed2066f152b9" />


### Main Dashboard

![Main Dashboard](./screenshots/dashboard.png)

The main dashboard provides an overview of the rover's camera feeds, status information, diagnostics, and control interface.

### Camera Monitoring

![Camera Monitoring](./screenshots/cameras.png)

Multi-camera monitoring allows the operator to observe different viewpoints of the rover simultaneously.

### Control & Diagnostics

![Control Panel](./screenshots/control-panel.png)

The control and diagnostics sections provide quick access to rover controls and system information.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL shown in the terminal.

---

## 📁 Project Structure

```text
ground-station-ui/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── screenshots/
│   ├── dashboard.png
│   ├── cameras.png
│   └── control-panel.png
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎯 Project Goals

The project was developed to provide a practical operator interface for a rover-based robotic system.

The main goals were:

* Build a clean and functional ground-control interface
* Present multiple camera feeds in a single dashboard
* Display important rover status and diagnostics
* Provide an interface for controller-based rover operation
* Create a frontend architecture suitable for integration with ROS 2

---

## 📚 What I Learned

Through this project, I worked with:

* React component architecture
* TypeScript
* Vite
* Dashboard UI design
* Real-time interface design
* Gamepad API integration
* ROS 2 communication concepts
* Browser-based robotics interfaces
* Structuring a larger React application

---

## 🔮 Future Improvements

Possible future improvements include:

* [ ] Full live ROS 2 telemetry integration
* [ ] Improved video-stream optimization
* [ ] Configurable camera layouts
* [ ] Interactive telemetry graphs
* [ ] More detailed rover diagnostics
* [ ] User-configurable control mappings
* [ ] Authentication and operator profiles

---

## 👨‍💻 Author

**Chaitanya**

Engineering Student | Robotics & Software Development

Interested in **full-stack development, robotics, and interactive applications**.

---

⭐ If you found this project interesting, consider giving the repository a star!
