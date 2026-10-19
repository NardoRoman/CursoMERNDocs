# Módulo 4 — UPDATE, DELETE y Merge Conflicts

**Rama de trabajo:** `feature/editar-eliminar`
**Resultado:** CRUD completo y un conflicto de Git resuelto.

```bash
# Slide 3
git switch main
git pull
git switch -c feature/editar-eliminar
```

---

## Paso 01 · `deleteProduct()` — *Slide 5*

| | |
|---|---|
| **Archivo** | `client/src/services/api.ts` |
| **Copiar desde** | [`paso-01-deleteProduct/client/src/services/api.ts`](paso-01-deleteProduct/client/src/services/api.ts) |
| **Qué cambia** | Se implementa `deleteProduct()` con `method: 'DELETE'`. `updateProduct()` sigue con su `TODO`. |

## Paso 02 · Conectar el botón Eliminar — *Slides 6–7*

| | |
|---|---|
| **Archivo** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-02-handleDeleteProduct/client/src/App.tsx`](paso-02-handleDeleteProduct/client/src/App.tsx) |
| **Qué cambia** | Importa `deleteProduct` · `handleDeleteProduct` reemplaza el `alert()` por `window.confirm` + `deleteProduct(id)` + `.filter()` |

**Pruébalo:** elimina un producto. Debe pedir confirmación y desaparecer de la tabla.

## Paso 03 · `updateProduct()` — *Slides 8–9*

| | |
|---|---|
| **Archivo** | `client/src/services/api.ts` |
| **Copiar desde** | [`paso-03-updateProduct/client/src/services/api.ts`](paso-03-updateProduct/client/src/services/api.ts) |
| **Qué cambia** | Se implementa `updateProduct()` con `method: 'PUT'`. `api.ts` queda **completo**. |

> [!TIP]
> `EditModal.tsx` y `ProductList.tsx` **no se modifican**: ya llaman a `updateProduct()` y a los props `onEditProduct`/`onDeleteProduct`. Con este paso, el modal de edición empieza a funcionar.

**Pruébalo:** edita el precio y el stock, recarga la página y confirma que el cambio persiste.

```bash
# Slide 11 — Commit, MR y merge del CRUD
git add client/src/
git commit -m "feat: implementa operaciones UPDATE y DELETE finalizando el CRUD"
git push -u origin feature/editar-eliminar
# → Crear MR y hacer Merge
git switch main
git pull origin main
git branch -d feature/editar-eliminar
```

---

## Dinámica de conflicto — *Slides 13–18*

Los pasos 04 a 06 modifican **una sola línea** de `client/src/components/ProductList.tsx`: la clase del botón **Eliminar**.

| Paso | Rama | Línea del botón |
|---|---|---|
| Semilla | `main` | `bg-red-600 hover:bg-red-700` |
| [paso-04-conflicto-rama-azul](paso-04-conflicto-rama-azul/client/src/components/ProductList.tsx) | `feature/boton-azul` | `bg-blue-600 hover:bg-blue-700` |
| [paso-05-conflicto-rama-verde](paso-05-conflicto-rama-verde/client/src/components/ProductList.tsx) | `feature/boton-verde` | `bg-emerald-600 hover:bg-emerald-700` |
| [paso-06-conflicto-resuelto](paso-06-conflicto-resuelto/client/src/components/ProductList.tsx) | `feature/boton-verde` (tras el merge) | `bg-emerald-600 hover:bg-emerald-700` |

```bash
# Paso 04 — Rama A (azul)
git switch -c feature/boton-azul
#   → pega paso-04 en ProductList.tsx
git commit -am "style: cambia boton eliminar a azul"
git push -u origin feature/boton-azul

# Paso 05 — Rama B (verde), creada desde main
git switch main
git switch -c feature/boton-verde
#   → pega paso-05 en ProductList.tsx
git commit -am "style: cambia boton eliminar a verde"
git push -u origin feature/boton-verde

# En GitLab: Merge del MR azul → el MR verde queda bloqueado por conflicto

# Traer el conflicto a local (Slide 15)
git switch main
git pull origin main
git switch feature/boton-verde
git merge main          # ← CONFLICT en ProductList.tsx
```

Así se verá el archivo en conflicto (Slide 16):

```tsx
<<<<<<< HEAD
                      className="px-3 py-1.5 text-xs rounded-lg text-white bg-emerald-600 hover:bg-emerald-700"
=======
                      className="px-3 py-1.5 text-xs rounded-lg text-white bg-blue-600 hover:bg-blue-700"
>>>>>>> main
```

**Paso 06:** resuelve el conflicto en VS Code con **Accept Current Change** (verde) o pega el archivo `paso-06`, que ya no tiene marcadores. Después cierra el merge:

```bash
git add client/src/components/ProductList.tsx
git commit -m "fix: resuelve conflicto de color en boton eliminar"
git push
```

> [!IMPORTANT]
> **Intenta resolverlo primero en VS Code.** El paso 06 es solo un respaldo, por si alguien se atora o borra mal los marcadores. Cualquier color es una resolución válida: el paso 06 usa el verde como ejemplo y es idéntico al paso 05.
