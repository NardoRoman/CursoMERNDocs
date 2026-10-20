# Módulo 4 — UPDATE, DELETE, Merge Conflicts y Rediseño Final (`design`)

**Rama de trabajo inicial:** `feature/editar-eliminar`  
**Resultado:** CRUD 100% completo, un conflicto de Git resuelto sin desincronizar las ramas y el rediseño final de la interfaz (`design`).

```bash
# Slide 3 — Antes de empezar, asegúrate de que main tenga los cambios del Módulo 3
git switch main
git pull origin main
git switch -c feature/editar-eliminar
```

---

## Parte 1 · Completar el CRUD (`DELETE` y `PUT`)

### Paso 01 · `deleteProduct()` — *Slide 5*

| | |
|---|---|
| **Archivo** | `client/src/services/api.ts` |
| **Copiar desde** | [`paso-01-deleteProduct/client/src/services/api.ts`](paso-01-deleteProduct/client/src/services/api.ts) |
| **Qué cambia** | Se implementa `deleteProduct()` con `method: 'DELETE'`. `updateProduct()` sigue con su `TODO`. |

### Paso 02 · Conectar botones de la tabla y `handleDeleteProduct` — *Slides 6–7*

| | |
|---|---|
| **Archivo 1** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-02-handleDeleteProduct/client/src/App.tsx`](paso-02-handleDeleteProduct/client/src/App.tsx) |
| **Qué cambia en `App.tsx`** | Importa `deleteProduct` · `handleDeleteProduct` reemplaza el `alert()` por `window.confirm` + `deleteProduct(id)` + `.filter()` · actualiza el banner al Módulo 4 |
| **Archivo 2** | `client/src/components/ProductList.tsx` |
| **Copiar desde** | [`paso-02-handleDeleteProduct/client/src/components/ProductList.tsx`](paso-02-handleDeleteProduct/client/src/components/ProductList.tsx) |
| **Qué cambia en `ProductList.tsx`** | Deja conectados los botones **Editar** (`onEditProduct(product)`) y **Eliminar** (`onDeleteProduct(product._id)`) con el botón rojo `bg-red-600 hover:bg-red-700` |

**Pruébalo:** elimina un producto. Debe pedir confirmación y desaparecer de la tabla al instante.

### Paso 03 · `updateProduct()` — *Slides 8–9*

| | |
|---|---|
| **Archivo** | `client/src/services/api.ts` |
| **Copiar desde** | [`paso-03-updateProduct/client/src/services/api.ts`](paso-03-updateProduct/client/src/services/api.ts) |
| **Qué cambia** | Se implementa `updateProduct()` con `method: 'PUT'`. `api.ts` queda **100% completo**. |

**Pruébalo:** edita el precio y el stock desde el botón **Editar**, recarga la página y confirma que el cambio persiste en MongoDB Atlas.

---

## 🔒 CHECKPOINT CRÍTICO: Integrar el CRUD a `main` antes del Conflicto — *Slide 11*

> [!CAUTION]
> **¡No te saltes este paso!**  
> Si creas `feature/boton-azul` y `feature/boton-verde` desde `main` **sin haber fusionado antes `feature/editar-eliminar` y sin haber hecho `git pull origin main`**, tu rama `main` local seguirá en un estado viejo y **se te desvinculará todo el CRUD** cuando cambies de rama.

Ejecuta exactamente esta secuencia:

```bash
# 1. Confirmar y subir el CRUD completo en feature/editar-eliminar
git add client/src/
git commit -m "feat: implementa operaciones UPDATE y DELETE finalizando el CRUD"
git push -u origin feature/editar-eliminar
```

2. Ve a **GitLab**, crea el **Merge Request** de `feature/editar-eliminar` → `main` (de tu propio fork) y presiona **Merge**.
3. Regresa a tu terminal y **actualiza `main` local**:

```bash
git switch main
git pull origin main
git branch -d feature/editar-eliminar

# ✅ Verificación obligatoria: el primer commit de la lista DEBE ser el del Módulo 4
git log --oneline -n 3
# Debe mostrar:
#   xxxxxxx feat: implementa operaciones UPDATE y DELETE finalizando el CRUD
#   xxxxxxx feat: implementa formulario de creacion de productos con POST...
#   xxxxxxx feat: implementa operacion READ con fetch nativo...
```

---

## Parte 2 · Dinámica de Conflicto de Merge — *Slides 13–18*

Los pasos 04 a 06 parten del `ProductList.tsx` que ya está en `main` con el CRUD completo y modifican **únicamente una línea**: el color del botón **Eliminar**.

| Paso | Rama | Clase del botón Eliminar (línea 104) |
|---|---|---|
| Base actual | `main` | `bg-red-600 hover:bg-red-700` |
| [`paso-04-conflicto-rama-azul`](paso-04-conflicto-rama-azul/client/src/components/ProductList.tsx) | `feature/boton-azul` | `bg-blue-600 hover:bg-blue-700` |
| [`paso-05-conflicto-rama-verde`](paso-05-conflicto-rama-verde/client/src/components/ProductList.tsx) | `feature/boton-verde` | `bg-emerald-600 hover:bg-emerald-700` |
| [`paso-06-conflicto-resuelto`](paso-06-conflicto-resuelto/client/src/components/ProductList.tsx) | `feature/boton-verde` (resuelto) | `bg-emerald-600 hover:bg-emerald-700` |

### Paso 04 · Crear `feature/boton-azul` (desde `main`)

```bash
# 1. Asegúrate de estar en main actualizado
git switch main

# 2. Crea la primera rama
git switch -c feature/boton-azul
```
- Copia [`paso-04-conflicto-rama-azul/client/src/components/ProductList.tsx`](paso-04-conflicto-rama-azul/client/src/components/ProductList.tsx) en `client/src/components/ProductList.tsx` y guarda.
```bash
git commit -am "style: cambia boton eliminar a azul"
git push -u origin feature/boton-azul
```

### Paso 05 · Crear `feature/boton-verde` (regresando primero a `main`)

```bash
# 1. ⚠️ IMPORTANTE: regresar a main para que ambas ramas partan del mismo punto
git switch main

# 2. Crea la segunda rama
git switch -c feature/boton-verde
```
- Copia [`paso-05-conflicto-rama-verde/client/src/components/ProductList.tsx`](paso-05-conflicto-rama-verde/client/src/components/ProductList.tsx) en `client/src/components/ProductList.tsx` y guarda.
```bash
git commit -am "style: cambia boton eliminar a verde"
git push -u origin feature/boton-verde
```

### Provocar y traer el conflicto (Slides 14–15)

1. En **GitLab**, abre un Merge Request para `feature/boton-azul` → `main` y otro para `feature/boton-verde` → `main`.
2. **Fusiona primero `feature/boton-azul`**. Se integrará sin problemas.
3. Mira el MR de `feature/boton-verde`: aparecerá bloqueado con **"Merge blocked: merge conflicts must be resolved"**.
4. Trae el conflicto a tu computadora:

```bash
# 1. Actualizar main local (ahora main ya tiene el botón azul)
git switch main
git pull origin main

# 2. Cambiarte a la rama en conflicto y fusionar main dentro de ella
git switch feature/boton-verde
git merge main
# CONFLICT (content): Merge conflict in client/src/components/ProductList.tsx
```

Al abrir `client/src/components/ProductList.tsx` en VS Code verás los marcadores en la línea del botón Eliminar:

```tsx
<<<<<<< HEAD
                    className="px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition"
=======
                    className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition"
>>>>>>> main
```

### Paso 06 · Resolver el conflicto y cerrar el ciclo — *Slides 17–18*

- Haz clic en **Accept Current Change** en VS Code (o copia el archivo limpio desde [`paso-06-conflicto-resuelto/client/src/components/ProductList.tsx`](paso-06-conflicto-resuelto/client/src/components/ProductList.tsx)) y guarda.

```bash
# 1. Marcar el conflicto como resuelto y confirmar
git add client/src/components/ProductList.tsx
git commit -m "fix: resuelve conflicto de color en boton eliminar"
git push

# 2. En GitLab: el MR de feature/boton-verde ya se desbloqueó → presiona Merge

# 3. Sincronizar main local y limpiar ramas
git switch main
git pull origin main
git branch -d feature/boton-azul feature/boton-verde
```

---

## Parte 3 · Paso 07 · Rediseño Final de Interfaz (Rama `design`)

Una vez dominado todo el CRUD y resuelto el conflicto, limpiamos todos los carteles pedagógicos (*"Módulo 2 / Módulo 3 / Módulo 4"*) y aplicamos el diseño final de producción (estilo Apple UI con `lucide-react`, tarjetas de métricas de inventario, buscador en tiempo real y filtro de categorías).

```bash
# 1. Crear la rama de diseño desde main actualizado
git switch main
git pull origin main
git switch -c design
```

| Archivo que reemplazas en tu proyecto | Copiar desde `paso-07-rediseno-final-design/` | Qué incorpora |
|---|---|---|
| `client/package.json` | [`client/package.json`](paso-07-rediseno-final-design/client/package.json) | Agrega la dependencia de íconos `lucide-react` |
| `client/package-lock.json` | [`client/package-lock.json`](paso-07-rediseno-final-design/client/package-lock.json) | Lockfile actualizado para que `npm ci` funcione en GitLab CI/CD |
| `client/src/index.css` | [`client/src/index.css`](paso-07-rediseno-final-design/client/src/index.css) | Tipografía SF Pro / System y fondo `#f5f5f7` |
| `client/src/App.tsx` | [`client/src/App.tsx`](paso-07-rediseno-final-design/client/src/App.tsx) | Dashboard con 3 tarjetas de métricas (Productos, Stock total y Valor en USD) y botón Sincronizar |
| `client/src/components/Navbar.tsx` | [`client/src/components/Navbar.tsx`](paso-07-rediseno-final-design/client/src/components/Navbar.tsx) | Barra superior translúcida (`backdrop-blur-xl`) |
| `client/src/components/ProductForm.tsx` | [`client/src/components/ProductForm.tsx`](paso-07-rediseno-final-design/client/src/components/ProductForm.tsx) | Formulario limpio sin etiquetas de *"Módulo 3"* e íconos de estado |
| `client/src/components/ProductList.tsx` | [`client/src/components/ProductList.tsx`](paso-07-rediseno-final-design/client/src/components/ProductList.tsx) | Buscador en tiempo real (`useMemo`), filtro por categoría y badges semánticos |
| `client/src/components/EditModal.tsx` | [`client/src/components/EditModal.tsx`](paso-07-rediseno-final-design/client/src/components/EditModal.tsx) | Modal estilo *Apple Sheet* con desenfoque de cristal |

Después de copiar los archivos, instala `lucide-react` en `client/` y confirma los cambios:

```bash
# 2. Instalar la librería de íconos en client/
cd client
npm install
cd ..

# 3. Confirmar, subir e integrar a main en GitLab
git add client/
git commit -m "style: rediseno visual de interfaz con dashboard de metricas y buscador"
git push -u origin design
# → Crear MR de design hacia main en GitLab y hacer Merge

# 4. Dejar main local actualizado para el Módulo 5
git switch main
git pull origin main
```
