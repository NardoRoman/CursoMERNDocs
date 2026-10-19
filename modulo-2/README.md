# Módulo 2 — Operación READ y Flujo de Ramas

**Rama de trabajo:** `feature/ver-inventario`
**Resultado:** la tabla muestra los productos de MongoDB Atlas.

```bash
# Antes de copiar cualquier archivo (Slide 5)
git switch main
git pull
git switch -c feature/ver-inventario
```

---

## Paso 01 · `getProducts()` con fetch — *Slides 8–9*

| | |
|---|---|
| **Archivo** | `client/src/services/api.ts` |
| **Copiar desde** | [`paso-01-getProducts/client/src/services/api.ts`](paso-01-getProducts/client/src/services/api.ts) |
| **Qué cambia** | El `TODO` de `getProducts()` se reemplaza por un `fetch` real que valida `response.ok`. Las demás funciones siguen con su `TODO`. |

> [!NOTE]
> Al guardar, la tabla **todavía no cambia**: nadie llama a `getProducts()`. Eso se hace en el Paso 02.

---

## Paso 02 · Estados, `useEffect` y alerta de error — *Slides 10–13*

| | |
|---|---|
| **Archivo** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-02-estados-useEffect-y-error/client/src/App.tsx`](paso-02-estados-useEffect-y-error/client/src/App.tsx) |
| **Qué cambia** | Importa `useEffect` y `getProducts` · estado `loading` real + estado `error` · función `loadProducts` · `useEffect(..., [])` · bloque de alerta roja con botón **Reintentar conexión** |

> [!NOTE]
> **¿Por qué las slides 10 a 13 son un solo paso?** El proyecto tiene activada la regla `noUnusedLocals` de TypeScript. Si declaras el estado `error` (slide 10) sin mostrarlo todavía en pantalla (slide 13), el proyecto no compila. Por eso se entregan juntos.

> [!TIP]
> `ProductList.tsx` **no se modifica**: la tabla con `.map()` (slide 12) ya existe en la semilla. Solo esperaba recibir productos.

**Pruébalo:**
- ✅ La tabla muestra los 5 productos de Atlas.
- ✅ Detén el backend (`Ctrl + C`), recarga la página y aparece la alerta roja. Levántalo de nuevo y presiona **Reintentar conexión**.

---

## Cierre del módulo — *Slides 14–19*

```bash
git status
git diff                                   # Revisa qué cambió (sal con q)
git add client/src/
git commit -m "feat: implementa operacion READ con fetch nativo y tabla dinamica"
git push -u origin feature/ver-inventario
# → Crear el Merge Request en GitLab y hacer Merge

git switch main
git pull origin main
git branch -d feature/ver-inventario
```
