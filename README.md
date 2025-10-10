# 🤖 AI Image Generator (React & Vyro.ai API)

A powerful web application that allows users to generate unique images based on text prompts (prompts), utilizing a third-party Artificial Intelligence API.

## 🖼️ Project Showcase

**![screenshot](https://github.com/diaa07/images/blob/main/Screenshot%202025-10-10%20211822.png)**

---

## ✨ Live Demo & Code

| Status     | Live Demo                                                                                                                                                  | Source Code                                                                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Active** | [![Live Demo](https://img.shields.io/badge/View_App-9D2EC5?style=for-the-badge&logo=vercel&logoColor=white)](https://diaa07.github.io/AI-image-generator/) | [![Repo Link](https://img.shields.io/badge/GitHub_Repo-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/diaa07/AI-image-generator) |

---

## 🌟 Key Features

- **Prompt-to-Image Generation:** Generates images in real-time based on detailed text prompts from the user.
- **Model Selection:** Allows users to choose between various AI models (e.g., `realistic`, `anime`, `flux-dev`, `sdxl-1.0`) to customize the output style.
- **Aspect Ratio Control:** Provides options to select the desired image dimensions and aspect ratios (e.g., `1:1`, `16:9`, `9:16`).
- **Generation History:** Stores the last generated images in the application history for easy viewing and tracking, persisting the data in **Local Storage**.
- **Error Handling:** Robust handling of API errors and network issues to provide clear feedback to the user.

---

## 🛠️ Tech Stack

This project is built around API integration and advanced React features:

| Technology        | Purpose                                                   | Badge                                                                                                             |
| :---------------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **React**         | Main library for the responsive and interactive frontend. | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)               |
| **JavaScript**    | Core language for logic and state management.             | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Vyro.ai API**   | External service for AI image generation.                 | ![API](https://img.shields.io/badge/Vyro.ai%20API-9D2EC5?style=for-the-badge&logo=openai&logoColor=white)         |
| **Local Storage** | Used for persisting image generation history.             | ![Local Storage](https://img.shields.io/badge/Local%20Storage-2E8B57?style=for-the-badge)                         |

---

## ⬇️ Installation & Local Setup

Running this application requires obtaining an API key and configuring the environment variables.

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Steps

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/diaa07/AI-image-generator.git](https://github.com/diaa07/AI-image-generator.git)
    cd AI-image-generator
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or yarn install
    ```

3.  **API Key Configuration (Crucial Step):**

    - Get a free or paid API key from **Vyro.ai** or the service you are using.
    - Create a `.env` file in the root directory.
    - Add your API key to the `.env` file using the exact variable name used in your code (as suggested by the attached file snippet, it is `VITE_API_KEY`):
      ```
      VITE_API_KEY=YOUR_API_KEY_HERE
      ```

4.  **Run the project:**
    ```bash
    npm run dev
    # or yarn dev
    ```
    The app will open in your browser (usually at `http://localhost:5173/`).

---

## ✉️ Contact

- **GitHub Profile:** [diaa07](https://github.com/diaa07)
