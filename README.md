# movie-track
# 📦 DEPENDENCIAS DEL PROYECTO

El proyecto está dividido en:

- Frontend → React
- Backend → Node.js + Express + MongoDB

---

# 🎨 FRONTEND

## 1️⃣ Entrar al frontend

```bash
cd frontend
```

---

## 2️⃣ Instalar dependencias

```bash
npm install react-router-dom axios
```

---

## 📚 Dependencias frontend

### react-router-dom

Se usa para:

- Navegar entre páginas
- Crear rutas
- Redirecciones

Ejemplos:

- `/login`
- `/register`
- `/movie/:id`

---

### axios

Se usa para:

- Hacer peticiones al backend
- Enviar y recibir datos

Ejemplos:

- Login
- Registro
- Obtener películas
- Crear reviews

---

# ⚙️ BACKEND

## 1️⃣ Entrar al backend

```bash
cd backend
```

---

## 2️⃣ Instalar dependencias principales

```bash
npm install express mongoose cors dotenv bcryptjs jsonwebtoken multer
```

---

## 3️⃣ Instalar dependencia de desarrollo

```bash
npm install nodemon --save-dev
```

---

# 📚 Dependencias backend

### express

Servidor backend y rutas API.

---

### mongoose

Conexión y manejo de MongoDB.

---

### cors

Permite conectar frontend con backend.

---

### dotenv

Manejo de variables de entorno (`.env`).

---

### bcryptjs

Encriptar contraseñas.

---

### jsonwebtoken

Autenticación con JWT.

---

### multer

Subida de imágenes/archivos.

---

### nodemon

Reinicia el backend automáticamente al guardar cambios.

---

# 🔐 ARCHIVO .env

Dentro de:

```bash
backend/.env
```

Crear:

```env
MONGO_URI=tu_uri_mongodb
JWT_SECRET=peliculas123
PORT=5000
```

---

# ▶️ EJECUTAR PROYECTO

## Frontend

```bash
cd frontend
npm run dev
```

Esto abre React normalmente en:

```txt
http://localhost:5173
```

---

## Backend

```bash
cd backend
npm run dev
```

Esto inicia Express normalmente en:

```txt
http://localhost:5000
```

---

# 🌱 SEED DE PELÍCULAS

Para insertar películas automáticamente en MongoDB:

```bash
cd backend
node seed.js
```

---

# ✅ FUNCIONALIDADES

- Registro de usuarios
- Login
- JWT
- MongoDB Atlas
- CRUD de películas
- Reviews
- Likes/dislikes
- Filtros
- Búsqueda
- Dashboard ready
- Seed masivo de películas


