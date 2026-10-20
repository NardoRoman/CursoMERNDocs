# Módulo 5 — CI/CD, Despliegue y Portafolio

**Resultado:** comprobar cómo el pipeline de GitLab CI/CD bloquea un error de tipos y vuelve a verde al corregirlo, desplegar en la nube y documentar el portafolio.

```bash
# Slide 9 — Partimos de main con el rediseño final ya integrado
git switch main
git pull origin main
git switch -c test/pipeline-rojo
```

---

## Paso 01 · Pipeline en rojo ❌ — *Slide 9*

| | |
|---|---|
| **Archivo** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-01-pipeline-rojo/client/src/App.tsx`](paso-01-pipeline-rojo/client/src/App.tsx) |
| **Qué cambia** | Conserva toda la interfaz final (`design`) y agrega únicamente la línea `const totalProductos: number = 'cinco';` (línea 22) dentro de `App` |

> [!WARNING]
> **Este archivo NO compila a propósito.** VS Code lo marcará en rojo y el job `build:client` fallará en GitLab con estos errores:
> - `TS2322: Type 'string' is not assignable to type 'number'`
> - `TS6133: 'totalProductos' is declared but its value is never read`

```bash
git commit -am "test: introduce error de tipos para probar el pipeline"
git push -u origin test/pipeline-rojo
# → Abrir MR hacia main y observar cómo falla el pipeline ❌
```

---

## Paso 02 · Pipeline en verde ✅ — *Slide 10*

| | |
|---|---|
| **Archivo** | `client/src/App.tsx` |
| **Copiar desde** | [`paso-02-pipeline-verde/client/src/App.tsx`](paso-02-pipeline-verde/client/src/App.tsx) |
| **Qué cambia** | Se elimina la línea `const totalProductos: number = 'cinco';` (regresa al estado limpio de `design`) |

```bash
git commit -am "fix: corrige error de tipos detectado por el pipeline"
git push
# → El pipeline se ejecuta de nuevo automáticamente y pasa a ✅
# → Hacer Merge en GitLab y actualizar main local:
git switch main
git pull origin main
git branch -d test/pipeline-rojo
```

---

## Paso 03 · README de portafolio — *Slide 16*

| | |
|---|---|
| **Archivo** | `README.md` (en la **raíz** de `inventario-app`, no dentro de `client/`) |
| **Copiar desde** | [`paso-03-readme-portafolio/README.md`](paso-03-readme-portafolio/README.md) |
| **Qué cambia** | Reemplaza el README de la semilla por una plantilla profesional de portafolio |

Después de pegarlo, reemplaza `TU-USUARIO`, `Tu Nombre Completo`, los enlaces del demo y la captura de pantalla.

```bash
git switch main
git pull origin main
git switch -c docs/readme-portafolio
git add README.md
git commit -m "docs: agrega README de portafolio"
git push -u origin docs/readme-portafolio
# → MR y Merge en GitLab
```

> [!NOTE]
> El despliegue en **Render** y **Netlify / Vercel** y la creación del tag/Release `v1.0.0` (slides 11–15) se realizan directamente en las plataformas web y con `git tag -a v1.0.0`.
