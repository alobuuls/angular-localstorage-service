# 🚀 Angular LocalStorage Service

Aplicación desarrollada en **Angular 16** que implementa un servicio reutilizable para manejar LocalStorage mediante prefijos configurables y pipes personalizadas.

El proyecto encapsula operaciones de almacenamiento para evitar acceso directo a `localStorage`.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- 📦 **Node.js:** `v18+` *(preferiblemente v18.10.0)*
- 📦 **npm:** `v9+`
- 🅰️ **Angular CLI:** `v16.x`

---

## 🔍 Verificar versiones instaladas

Ejecuta:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar repositorio

```bash
git clone <URL_DEL_REPO>
cd angular-localstorage-service
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar proyecto

```bash
ng serve
```

Luego abre:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

El proyecto centraliza acceso a LocalStorage usando un servicio compartido.

### 📦 LocalstorageService

Permite:

- Guardar valores
- Obtener valores
- Limpiar storage
- Configurar prefijos
- Evitar colisiones entre claves

---

## 📦 LocalstoragePipe

Pipe personalizada para obtener valores almacenados directamente desde templates:

```html
{{ 'clave1' | localstorage }}
```

---

## ⚙️ Funcionalidades principales

- 💾 Guardar información en LocalStorage
- 🔍 Obtener datos mediante pipe
- 🧹 Limpiar almacenamiento por prefijo
- ⚙️ Configuración inicial con APP_INITIALIZER
- 🧩 Servicio reutilizable

---

## 🛠️ Tecnologías utilizadas

- 🅰️ Angular 16
- ⚡ TypeScript
- 🧠 Angular Pipes
- 💾 Browser LocalStorage API
- 🔧 APP_INITIALIZER

---

## 📁 Estructura del proyecto

```bash
src/app/
├── localstorage/
│   └── localstorage.module.ts
├── localstorage.pipe.ts
├── localstorage.service.ts
├── app.module.ts
├── app.component.ts
```

---

## 🔥 Buenas prácticas implementadas

- Encapsulación del acceso a LocalStorage
- Configuración inicial con APP_INITIALIZER
- Reutilización mediante servicios
- Separación de responsabilidades
- Uso de pipes personalizadas

---

## 📄 Licencia

Este proyecto es de uso educativo y forma parte de un portafolio personal.
