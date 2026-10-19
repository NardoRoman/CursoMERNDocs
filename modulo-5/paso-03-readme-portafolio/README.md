# 📦 Sistema de Inventario MERN + TypeScript

[![pipeline status](https://gitlab.com/TU-USUARIO/inventario-app/badges/main/pipeline.svg)](https://gitlab.com/TU-USUARIO/inventario-app/-/pipelines)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

Aplicación web full-stack para gestionar el inventario de una tienda: permite **registrar, consultar, editar y eliminar productos** en tiempo real sobre una base de datos en la nube. Desarrollada con el flujo de trabajo profesional de Git: ramas de funcionalidad, Issues, Merge Requests con revisión de código y pipeline de CI/CD.

🔗 **Demo en vivo:** https://inventario-TU-USUARIO.netlify.app
🔗 **API:** https://inventario-api-TU-USUARIO.onrender.com/api/health

> ⏳ El backend usa el plan gratuito de Render: la primera petición puede tardar cerca de un minuto si el servidor estaba inactivo.

---

## 📸 Capturas de pantalla

<!-- Reemplaza con tus propias capturas: guárdalas en docs/ y actualiza la ruta -->
![Vista principal del inventario](docs/captura-inventario.png)

---

## ✨ Funcionalidades

- 📋 **Consultar** el catálogo de productos con estados de carga y error.
- ➕ **Registrar** productos con formulario validado y mensajes de éxito/error.
- ✏️ **Editar** nombre, categoría, precio y stock desde un modal.
- 🗑️ **Eliminar** productos con confirmación previa.
- 🔒 Validaciones en frontend (TypeScript) y backend (esquema de Mongoose).
- 🚦 Pipeline de GitLab CI que valida tipos y compilación en cada Merge Request.

---

## 🛠️ Stack tecnológico

| Capa | Tecnologías |
|---|---|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS |
| **Backend** | Node.js, Express, TypeScript, Mongoose |
| **Base de datos** | MongoDB Atlas |
| **DevOps** | Git, GitLab (Issues, Merge Requests, CI/CD), Render, Netlify/Vercel |

---

## 🚀 Instalación local

**Requisitos:** Node.js 20+, Git y una cuenta gratuita de MongoDB Atlas.

```bash
# 1. Clonar el repositorio
git clone git@gitlab.com:TU-USUARIO/inventario-app.git
cd inventario-app

# 2. Backend
cd server
cp .env.example .env        # Coloca tu cadena de conexión en MONGO_URI
npm install
npm run seed                # Inserta 5 productos de ejemplo
npm run dev                 # http://localhost:5000

# 3. Frontend (en otra terminal)
cd client
npm install
npm run dev                 # http://localhost:5173
```

### Variables de entorno

| Ubicación | Variable | Descripción |
|---|---|---|
| `server/.env` | `PORT` | Puerto del backend (por defecto `5000`) |
| `server/.env` | `MONGO_URI` | Cadena de conexión de MongoDB Atlas |
| `client` (producción) | `VITE_API_URL` | URL pública de la API, terminada en `/api` |

---

## 📡 Endpoints de la API

| Método | Endpoint | Descripción | Respuesta exitosa |
|---|---|---|---|
| `GET` | `/api/health` | Estado del servidor | `200 OK` |
| `GET` | `/api/products` | Listar todos los productos | `200 OK` |
| `GET` | `/api/products/:id` | Obtener un producto por ID | `200 OK` |
| `POST` | `/api/products` | Crear un producto | `201 Created` |
| `PUT` | `/api/products/:id` | Actualizar un producto | `200 OK` |
| `DELETE` | `/api/products/:id` | Eliminar un producto | `200 OK` |

---

## 📁 Estructura del proyecto

```text
inventario-app/
├── client/                 # Frontend React + Vite + Tailwind
│   └── src/
│       ├── components/     # ProductList, ProductForm, EditModal, Navbar
│       ├── services/api.ts # Peticiones fetch a la API
│       └── types/          # Interfaces TypeScript
├── server/                 # Backend Express + Mongoose
│   └── src/
│       ├── config/         # Conexión a MongoDB Atlas
│       ├── controllers/    # Lógica CRUD
│       ├── models/         # Esquema Product
│       └── routes/         # Endpoints REST
└── .gitlab-ci.yml          # Pipeline de CI/CD
```

---

## 🔄 Flujo de trabajo

Cada funcionalidad se desarrolló siguiendo el ciclo profesional:

`Issue` → `rama feature/...` → `commits semánticos` → `Merge Request` → `Code Review` → `pipeline ✅` → `merge a main` → `despliegue automático`

---

## 👤 Autor

**Tu Nombre Completo**
- GitLab: [@TU-USUARIO](https://gitlab.com/TU-USUARIO)
- LinkedIn: [tu-perfil](https://www.linkedin.com/in/tu-perfil)

Proyecto desarrollado en el curso **MERN Stack & Git Essentials: Aprende Creando una App Real**.
