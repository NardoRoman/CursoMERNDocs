# Módulo 2 — Operación READ y Flujo de Ramas

**Rama de trabajo:** `feature/ver-inventario`  
**Resultado:** la tabla muestra los productos de MongoDB Atlas y se retiran los bloques de prueba/maqueta del Módulo 1.

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
| **Qué cambia** | El `TODO` de `getProducts()` se reemplaza por un `fetch` real que valida `response.ok`. Las demás funciones siguen pendientes. |

> [!NOTE]
> Al guardar, la tabla **todavía no cambia**: nadie llama a `getProducts()`. Eso se hace en el Paso 02.

---

## Paso 02 · Estados, `useEffect`, alerta de error y tabla limpia — *Slides 10–13*

| | |
|---|---|
| **Archivo 1** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-02-estados-useEffect-y-error/client/src/App.tsx`](paso-02-estados-useEffect-y-error/client/src/App.tsx) |
| **Qué cambia en `App.tsx`** | Quita el recuadro amarillo *"Prueba del Módulo 1"* · actualiza el banner al Módulo 2 · importa `useEffect` y `getProducts` · agrega estados `loading` y `error` · función `loadProducts` + `useEffect(..., [])` · alerta roja con botón **Reintentar conexión** |
| **Archivo 2** | `client/src/components/ProductList.tsx` |
| **Copiar desde** | [`paso-02-estados-useEffect-y-error/client/src/components/ProductList.tsx`](paso-02-estados-useEffect-y-error/client/src/components/ProductList.tsx) |
| **Qué cambia en `ProductList.tsx`** | Quita el bloque de maqueta *"Inventario sin conectar / Ejemplo de fila que construirás"* y deja la tabla dinámica con badges de stock por colores (`> 10` verde, `> 0` ámbar, `0` rojo) y contador total |

> [!NOTE]
> **¿Por qué las slides 10 a 13 van en el mismo paso?** El proyecto tiene activada la regla `noUnusedLocals` de TypeScript. Si declaras el estado `error` (slide 10) sin mostrarlo todavía en pantalla (slide 13), el proyecto no compila. Por eso se entregan juntos.

**Pruébalo:**
- ✅ Ya no aparece el recuadro amarillo del Módulo 1 ni la maqueta *"Inventario sin conectar"*.
- ✅ La tabla muestra los 5 productos reales de MongoDB Atlas.
- ✅ Detén el backend (`Ctrl + C`), recarga la página y aparece la alerta roja. Levántalo de nuevo y presiona **Reintentar conexión**.

---

## Cierre del módulo — *Slides 14–19*

```bash
git status
git diff                                   # Revisa qué cambió (sal con q)
git add client/src/
git commit -m "feat: implementa operacion READ con fetch nativo y tabla dinamica"
git push -u origin feature/ver-inventario
# → Crear el Merge Request en GitLab (Target: main de TU fork) y hacer Merge

# ⚠️ OBLIGATORIO: actualizar main local antes de iniciar el Módulo 3
git switch main
git pull origin main
git branch -d feature/ver-inventario
```
