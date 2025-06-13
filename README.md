# 🛒 CRUD Product API

CRUD completo para gestión de productos, desarrollado con **Node.js**, **Express** y **MongoDB**. Esta API permite crear, leer, actualizar y eliminar productos fácilmente, ideal para cualquier sistema de inventario, tienda online o backend administrativo.

---

## 📦 Características

- ➕ Crear productos
- 📄 Ver todos o un producto específico
- ✏️ Actualizar productos por ID
- ❌ Eliminar productos por ID
- 📦 MongoDB como base de datos
- 📬 Respuestas JSON estructuradas

---

## 🛠️ Tecnologías utilizadas

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **Postman** (para pruebas)

---

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/kleyderBackend/crud-product.git
Entra al directorio:
cd crud-product
Instala las dependencias:
npm install
Crea un archivo .env con tu URI de MongoDB:

env
MONGODB_URI=mongodb://localhost:27017/tu_base_de_datos
PORT=3000
Inicia el servidor:
npm run dev


---
## 🔍 Endpoints principales
Método	Ruta	Descripción
GET	/products	Obtener todos los productos
GET	/products/:id	Obtener producto por ID
POST	/products	Crear un nuevo producto
PUT	/products/:id	Actualizar producto
DELETE	/products/:id	Eliminar producto

---

## 🧪 Pruebas
Puedes utilizar Postman, Insomnia o cualquier cliente HTTP para probar los endpoints. Asegúrate de que tu base de datos esté corriendo.

---

## 📁 Estructura del proyecto
crud-product/
├── models/
│   └── Product.js
├── routes/
│   └── product.routes.js
├── controllers/
│   └── product.controller.js
├── .env
├── app.js
├── package.json

---

## ✍️ Autor
Kleyder Dávila
📍 Backend Developer en formación
🔗 GitHub - @kleyderBackend
