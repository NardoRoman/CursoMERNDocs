# Módulo 5 — CI/CD, Despliegue y Portafolio

**Resultado:** ver el pipeline fallar y repararse, y dejar un README de portafolio.

```bash
# Slide 9
git switch main
git pull
git switch -c test/pipeline-rojo
```

---

## Paso 01 · Pipeline en rojo ❌ — *Slide 9*

| | |
|---|---|
| **Archivo** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-01-pipeline-rojo/client/src/App.tsx`](paso-01-pipeline-rojo/client/src/App.tsx) |
| **Qué cambia** | Agrega la línea `const totalProductos: number = 'cinco';` dentro de `App` |

> [!WARNING]
> **Este archivo NO compila a propósito.** VS Code lo marcará en rojo y el job `build:client` fallará en GitLab con estos errores:
> - `TS2322: Type 'string' is not assignable to type 'number'`
> - `TS6133: 'totalProductos' is declared but its value is never read`

```bash
git commit -am "test: introduce error de tipos para probar el pipeline"
git push -u origin test/pipeline-rojo
# → Abrir MR hacia main y observar el pipeline ❌
```

## Paso 02 · Pipeline en verde ✅ — *Slide 10*

| | |
|---|---|
| **Archivo** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-02-pipeline-verde/client/src/App.tsx`](paso-02-pipeline-verde/client/src/App.tsx) |
| **Qué cambia** | Se elimina la línea con el error (queda igual que al final del Módulo 4) |

```bash
git commit -am "fix: corrige error de tipos detectado por el pipeline"
git push
# → El pipeline se ejecuta de nuevo y pasa a ✅
```

---

## Paso 03 · README de portafolio — *Slide 16*

| | |
|---|---|
| **Archivo** | `README.md` (en la **raíz** de `inventario-app`, no dentro de `client/`) |
| **Copiar desde** | [`paso-03-readme-portafolio/README.md`](paso-03-readme-portafolio/README.md) |
| **Qué cambia** | Reemplaza el README de la semilla por una plantilla de portafolio |

Después de pegarlo, reemplaza `TU-USUARIO`, `Tu Nombre Completo`, los enlaces del demo y la captura de pantalla.

```bash
git switch main
git pull
git switch -c docs/readme-portafolio
git add README.md
git commit -m "docs: agrega README de portafolio"
git push -u origin docs/readme-portafolio
# → MR y Merge
```

> [!NOTE]
> El despliegue (Render y Netlify/Vercel) y el Release `v1.0.0` (slides 11–15) se configuran en las plataformas web y no requieren modificar archivos del proyecto.
