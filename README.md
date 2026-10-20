# 🧩 Código Paso a Paso — MERN Stack & Git Essentials

Repositorio de apoyo para el proyecto **inventario-app**. Contiene **el archivo completo en cada momento del curso**, evolucionando la interfaz exactamente igual que las ramas del proyecto (`main` → `feature/ver-inventario` → `feature/agregar-producto` → `feature/editar-eliminar` → `design`). Así los alumnos pueden copiar, pegar y ver el resultado al instante sin perder tiempo en errores de dedo.

> [!IMPORTANT]
> Este repositorio **no reemplaza** a `inventario-app`. Tu proyecto sigue siendo tu fork de `inventario-app`. De aquí solo **copias archivos** hacia él.

---

## 📖 Cómo usarlo

1. Ubica el **módulo** y el **paso** en el que va la clase.
2. Dentro de la carpeta del paso, la ruta del archivo es **exactamente la misma que en tu proyecto**:

   ```text
   codigo-paso-a-paso/modulo-2/paso-01-getProducts/client/src/services/api.ts
                                                   └──────────┬──────────────┘
   inventario-app/                                 client/src/services/api.ts
   ```

3. Abre el archivo, selecciona todo (`Ctrl + A`), cópialo y **reemplaza todo el contenido** del archivo equivalente en tu proyecto.
4. Guarda (`Ctrl + S`). Vite actualizará el navegador automáticamente.
5. **Antes de hacer commit, revisa con `git diff` qué cambió.**

> [!WARNING]
> **Regla de Oro para no desvincular el CRUD entre módulos:**  
> Al terminar cada módulo (Módulos 2, 3 y 4), después de hacer **Merge** de tu Merge Request en GitLab, **siempre** debes ejecutar en tu terminal:
> ```bash
> git switch main
> git pull origin main
> ```
> Si creas la rama del siguiente módulo desde un `main` local sin actualizar, partirás de código viejo y parecerá que se borraron o desvincularon las funciones anteriores.

---

## 🗺️ Índice completo de pasos

| Módulo | Paso | Archivo(s) que reemplazas | Qué cambia en el código y en la interfaz | Slides |
|---|---|---|---|---|
| **1** | [`paso-01-prueba-hmr`](modulo-1/README.md) | `client/src/App.tsx` | Cambia el recuadro *"Prueba del Módulo 1"* de ámbar 🧪 a verde 🚀 (se descarta con `git restore`) | 18 |
| **2** | [`paso-01-getProducts`](modulo-2/README.md) | `client/src/services/api.ts` | Implementa `getProducts()` con `fetch` nativo | 8–9 |
| **2** | [`paso-02-estados-useEffect-y-error`](modulo-2/README.md) | `client/src/App.tsx`<br>`client/src/components/ProductList.tsx` | Quita el recuadro de prueba del Módulo 1 y la maqueta *"Inventario sin conectar"* · agrega `useEffect`, estados y tabla dinámica | 10–13 |
| **3** | [`paso-01-createProduct`](modulo-3/README.md) | `client/src/services/api.ts` | Implementa `createProduct()` con `POST` | 8 |
| **3** | [`paso-02-formulario-controlado`](modulo-3/README.md) | `client/src/components/ProductForm.tsx` | Quita el aviso *"Pendiente de Implementar (Módulo 3)"* · conecta `formData` y `handleChange` | 9–10 |
| **3** | [`paso-03-handleSubmit-y-feedback`](modulo-3/README.md) | `client/src/components/ProductForm.tsx`<br>`client/src/App.tsx` | `handleSubmit` con validación, POST, alertas verde/roja y banner esmeralda del Módulo 3 | 11–13 |
| **4** | [`paso-01-deleteProduct`](modulo-4/README.md) | `client/src/services/api.ts` | Implementa `deleteProduct()` con `DELETE` | 5 |
| **4** | [`paso-02-handleDeleteProduct`](modulo-4/README.md) | `client/src/App.tsx`<br>`client/src/components/ProductList.tsx` | Conecta `handleDeleteProduct` (`confirm` + `.filter()`), banner violeta del Módulo 4 y botones **Editar / Eliminar** activos | 6–7 |
| **4** | [`paso-03-updateProduct`](modulo-4/README.md) | `client/src/services/api.ts` | Implementa `updateProduct()` con `PUT` (`api.ts` y `EditModal` 100% activos) | 8–9 |
| **4** | [`paso-04-conflicto-rama-azul`](modulo-4/README.md) | `client/src/components/ProductList.tsx` | Botón Eliminar azul (`bg-blue-600`) en `feature/boton-azul` | 13 |
| **4** | [`paso-05-conflicto-rama-verde`](modulo-4/README.md) | `client/src/components/ProductList.tsx` | Botón Eliminar verde (`bg-emerald-600`) en `feature/boton-verde` | 13 |
| **4** | [`paso-06-conflicto-resuelto`](modulo-4/README.md) | `client/src/components/ProductList.tsx` | Archivo resuelto limpio sin marcadores `<<<<<<<` | 16–18 |
| **4** | [`paso-07-rediseno-final-design`](modulo-4/README.md) | `client/package.json` · `client/src/index.css`<br>`client/src/App.tsx` · `client/src/components/*.tsx` | **Interfaz final (`design`):** retira todas las etiquetas de *"Módulo X"*, agrega `lucide-react`, tarjetas de métricas, buscador en tiempo real y filtro por categorías | Final M4 |
| **5** | [`paso-01-pipeline-rojo`](modulo-5/README.md) | `client/src/App.tsx` | ❌ Introduce `const totalProductos: number = 'cinco';` para romper el pipeline | 9 |
| **5** | [`paso-02-pipeline-verde`](modulo-5/README.md) | `client/src/App.tsx` | ✅ Elimina el error de tipos para pasar el pipeline a verde | 10 |
| **5** | [`paso-03-readme-portafolio`](modulo-5/README.md) | `README.md` (raíz) | Plantilla profesional de `README.md` para portafolio | 16 |

---

## 📊 Evolución de cada archivo por módulo

| Archivo | Semilla (`main`) | Mód. 1 | Mód. 2 (`feature/ver-inventario`) | Mód. 3 (`feature/agregar-producto`) | Mód. 4 (`feature/editar-eliminar` → `design`) | Mód. 5 (CI/CD) |
|---|---|---|---|---|---|---|
| `services/api.ts` | TODOs | — | **M2-P01** (`GET`) | **M3-P01** (`POST`) | **M4-P01** (`DELETE`) → **M4-P03** (`PUT`) | Completo |
| `App.tsx` | Semilla + Cuadro M1 | **M1-P01** → *restore* | **M2-P02** (Quita cuadro M1, agrega READ) | **M3-P03** (Banner M3) | **M4-P02** (DELETE) → **M4-P07** (Dashboard `design`) | **M5-P01** ❌ → **M5-P02** ✅ |
| `components/ProductList.tsx` | Maqueta desconectada | — | **M2-P02** (Quita maqueta, tabla dinámica) | — | **M4-P02** → **M4-P04/05/06** (Conflicto) → **M4-P07** (Buscador + Filtros `design`) | Completo |
| `components/ProductForm.tsx` | Maqueta deshabilitada | — | — | **M3-P02** → **M3-P03** (`POST` activo) | **M4-P07** (Rediseño `design`) | Completo |
| `components/Navbar.tsx` | Semilla | — | — | — | **M4-P07** (Navbar translúcida `design`) | Completo |
| `components/EditModal.tsx` | Semilla (espera `PUT`) | — | — | — | Cobra vida en **M4-P03** → **M4-P07** (Apple Sheet `design`) | Completo |
| `index.css` & `package.json` | Semilla | — | — | — | **M4-P07** (`lucide-react` + estilos Apple UI) | Completo |
| `README.md` (raíz) | Guía semilla | — | — | — | — | **M5-P03** (Portafolio) |
