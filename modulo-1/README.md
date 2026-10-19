# Módulo 1 — Repositorio Semilla y Entorno

En este módulo **no se programa ninguna funcionalidad**. Solo hay un paso, y sirve para comprobar que el entorno compila y que Git detecta los cambios.

---

## Paso 01 · Prueba de Hot Module Reload — *Slide 18*

| | |
|---|---|
| **Archivo** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-01-prueba-hmr/client/src/App.tsx`](paso-01-prueba-hmr/client/src/App.tsx) |
| **Qué cambia** | Solo el recuadro "Prueba del Módulo 1": pasa de ámbar 🧪 a verde 🚀 con un texto nuevo |

**Requisito:** frontend corriendo con `npm run dev` en `http://localhost:5173`.

1. Pega el archivo y guarda. **Observa cómo el recuadro cambia sin recargar la página** (HMR de Vite).
2. Comprueba que Git detectó el cambio y luego descártalo:

```bash
git status
#   modified:   client/src/App.tsx

git restore client/src/App.tsx

git status
#   nothing to commit, working tree clean
```

> [!IMPORTANT]
> **Este paso NO se confirma con commit.** Es una prueba y debe terminar con `git restore`. El Módulo 2 parte del `App.tsx` original de la semilla.
