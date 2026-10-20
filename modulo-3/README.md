# Módulo 3 — Operación CREATE, Issues y Code Review

**Rama de trabajo:** `feature/2-agregar-producto` *(o `feature/agregar-producto`, usa el número de tu Issue)*  
**Resultado:** el formulario registra productos que aparecen al instante en la tabla y se retira el aviso de *"Pendiente de Implementar (Módulo 3)"*.

```bash
# Después de crear el Issue en GitLab (Slides 4–6)
git switch main
git pull
git switch -c feature/2-agregar-producto
```

---

## Paso 01 · `createProduct()` con POST — *Slide 8*

| | |
|---|---|
| **Archivo** | `client/src/services/api.ts` |
| **Copiar desde** | [`paso-01-createProduct/client/src/services/api.ts`](paso-01-createProduct/client/src/services/api.ts) |
| **Qué cambia** | El `TODO` de `createProduct()` se reemplaza por un `fetch` con `method: 'POST'`, encabezado `Content-Type` y `JSON.stringify()`. `getProducts()` se conserva del Módulo 2. |

---

## Paso 02 · Formulario controlado — *Slides 9–10*

| | |
|---|---|
| **Archivo** | `client/src/components/ProductForm.tsx` |
| **Copiar desde** | [`paso-02-formulario-controlado/client/src/components/ProductForm.tsx`](paso-02-formulario-controlado/client/src/components/ProductForm.tsx) |
| **Qué cambia** | Quita el badge amarillo *"Pendiente de Implementar (Módulo 3)"* · estado `formData` tipado con `CreateProductDTO` · un único `handleChange` que usa el atributo `name` · los 4 campos habilitados y conectados (categoría como `<select>`) |

**Pruébalo:** llena los campos y presiona **Guardar Producto (Probar)**. Una alerta mostrará el objeto `formData` capturado. Esto demuestra que React ya controla los inputs, aunque todavía **no se envía nada** al servidor.

---

## Paso 03 · `handleSubmit`, validación, feedback y banner del Módulo 3 — *Slides 11–13*

| | |
|---|---|
| **Archivo 1** | `client/src/components/ProductForm.tsx` |
| **Copiar desde** | [`paso-03-handleSubmit-y-feedback/client/src/components/ProductForm.tsx`](paso-03-handleSubmit-y-feedback/client/src/components/ProductForm.tsx) |
| **Qué cambia en `ProductForm.tsx`** | Importa `createProduct` · estados `loading`, `errorMessage` y `successMessage` · `handleSubmit` con validaciones, POST, limpieza del formulario y `setTimeout` · mensajes verde y rojo · botón deshabilitado mientras guarda |
| **Archivo 2** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-03-handleSubmit-y-feedback/client/src/App.tsx`](paso-03-handleSubmit-y-feedback/client/src/App.tsx) |
| **Qué cambia en `App.tsx`** | Actualiza el banner superior al color esmeralda del Módulo 3 (*"Módulo 3: Operación CREATE Implementada"*) |

> [!NOTE]
> Las slides 11 y 12 van juntas por la misma razón que en el Módulo 2: `noUnusedLocals` no permite declarar `errorMessage` sin mostrarlo.

**Verifica los criterios de aceptación (Slide 14):**
- ✅ Sin nombre → error de validación.
- ✅ Precio 0 → error de validación.
- ✅ Producto válido → mensaje verde y aparece al inicio de la tabla.
- ✅ Al recargar sigue ahí, y se ve en **Browse Collections** de Atlas.

---

## Cierre del módulo — *Slides 15–19*

```bash
git add client/src/
git commit -m "feat: implementa formulario de creacion de productos con POST. Closes #2"
git push -u origin feature/2-agregar-producto
# → MR con Reviewer → Code Review → Approve → Merge en GitLab

# ⚠️ OBLIGATORIO: actualizar main local antes de iniciar el Módulo 4
git switch main
git pull origin main
git branch -d feature/2-agregar-producto
```
