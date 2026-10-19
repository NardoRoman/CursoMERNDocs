# 🧩 Código Paso a Paso — MERN Stack & Git Essentials

Repositorio de apoyo para el proyecto **inventario-app**. Contiene **el archivo completo en cada momento del curso**: cuando un archivo se modifica varias veces, aquí encontrarás una versión por cada paso. Así puedes copiar, pegar y ver el resultado al instante, sin perder tiempo en errores de dedo.

> [!IMPORTANT]
> Este repositorio **no reemplaza** a `inventario-app`. Tu proyecto sigue siendo tu fork de `inventario-app`. De aquí solo **copias archivos** hacia él.

---

## 📖 Cómo usarlo

1. Ubica el **módulo** y el **paso** en el que va la clase (la diapositiva lo indica).
2. Dentro de la carpeta del paso, la ruta del archivo es **la misma que en tu proyecto**:

   ```text
   codigo-paso-a-paso/modulo-2/paso-01-getProducts/client/src/services/api.ts
                                                   └──────────┬──────────────┘
   inventario-app/                                 client/src/services/api.ts
   ```

3. Abre el archivo, selecciona todo (`Ctrl + A`), cópialo y **reemplaza todo el contenido** del archivo con la misma ruta en tu proyecto.
4. Guarda (`Ctrl + S`). Vite actualizará el navegador automáticamente.
5. **Antes de hacer commit, revisa con `git diff` qué cambió.** Esa es la parte que debes entender.

> [!TIP]
> Cada archivo es **acumulativo**: incluye todo lo de los pasos anteriores. Si te atrasaste, copia el paso actual y quedarás al corriente.

> [!WARNING]
> Sigue el orden de los pasos. Un paso puede depender de un archivo de un paso anterior. Por ejemplo, el formulario del Módulo 3 usa `createProduct()` de `api.ts`.

---

## 🗺️ Índice de pasos

| Módulo | Paso | Archivo que reemplazas | Qué cambia | Slides |
|---|---|---|---|---|
| **1** | [paso-01-prueba-hmr](modulo-1/README.md) | `client/src/App.tsx` | Texto del recuadro de prueba (se descarta con `git restore`) | 18 |
| **2** | [paso-01-getProducts](modulo-2/README.md) | `client/src/services/api.ts` | `getProducts()` con `fetch` | 8–9 |
| **2** | [paso-02-estados-useEffect-y-error](modulo-2/README.md) | `client/src/App.tsx` | Estados, `loadProducts`, `useEffect` y alerta de error | 10–13 |
| **3** | [paso-01-createProduct](modulo-3/README.md) | `client/src/services/api.ts` | `createProduct()` con `POST` | 8 |
| **3** | [paso-02-formulario-controlado](modulo-3/README.md) | `client/src/components/ProductForm.tsx` | Estado `formData`, `handleChange` e inputs conectados | 9–10 |
| **3** | [paso-03-handleSubmit-y-feedback](modulo-3/README.md) | `client/src/components/ProductForm.tsx` | `handleSubmit`, validación y mensajes visuales | 11–13 |
| **4** | [paso-01-deleteProduct](modulo-4/README.md) | `client/src/services/api.ts` | `deleteProduct()` con `DELETE` | 5 |
| **4** | [paso-02-handleDeleteProduct](modulo-4/README.md) | `client/src/App.tsx` | Botón Eliminar conectado (`confirm` + `.filter()`) | 6–7 |
| **4** | [paso-03-updateProduct](modulo-4/README.md) | `client/src/services/api.ts` | `updateProduct()` con `PUT` (el modal cobra vida) | 8–9 |
| **4** | [paso-04-conflicto-rama-azul](modulo-4/README.md) | `client/src/components/ProductList.tsx` | Botón Eliminar azul (rama A) | 13 |
| **4** | [paso-05-conflicto-rama-verde](modulo-4/README.md) | `client/src/components/ProductList.tsx` | Botón Eliminar verde (rama B) | 13 |
| **4** | [paso-06-conflicto-resuelto](modulo-4/README.md) | `client/src/components/ProductList.tsx` | Ejemplo de resolución (sin marcadores) | 16–18 |
| **5** | [paso-01-pipeline-rojo](modulo-5/README.md) | `client/src/App.tsx` | ❌ Error de tipos intencional | 9 |
| **5** | [paso-02-pipeline-verde](modulo-5/README.md) | `client/src/App.tsx` | ✅ Error corregido | 10 |
| **5** | [paso-03-readme-portafolio](modulo-5/README.md) | `README.md` (raíz) | Plantilla de README para portafolio | 16 |

---

## 📊 Historial de cada archivo

Qué versión de cada archivo existe después de cada módulo:

| Archivo | Semilla | Mód. 1 | Mód. 2 | Mód. 3 | Mód. 4 | Mód. 5 |
|---|---|---|---|---|---|---|
| `services/api.ts` | TODOs | — | M2-P01 | M3-P01 | M4-P01 → M4-P03 | — |
| `App.tsx` | semilla | M1-P01 → *restore* | M2-P02 | — | M4-P02 | M5-P01 → M5-P02 |
| `components/ProductForm.tsx` | maqueta | — | — | M3-P02 → M3-P03 | — | — |
| `components/ProductList.tsx` | semilla | — | — | — | M4-P04 / P05 → P06 | — |
| `README.md` | semilla | — | — | — | — | M5-P03 |

> [!NOTE]
> Archivos que **no se modifican** en el curso porque ya vienen listos en la semilla: `types/product.ts`, `components/EditModal.tsx`, `components/Navbar.tsx` y todo el backend (`server/`).

---

## ✅ Verificación

Todos los pasos se probaron aplicándolos **en orden** sobre una copia limpia de la rama `main` de `inventario-app`, ejecutando `npx tsc --noEmit` después de cada uno:

- Todos los pasos compilan sin errores, excepto `modulo-5/paso-01-pipeline-rojo`, que **falla a propósito**.
- El estado final pasa `npm run build`, el mismo comando que ejecuta el pipeline de GitLab.
