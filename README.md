# Qurable Design System

Componentes UI, paletas de colores y repositorio de diseño para Qurable — construido con React, Tailwind CSS v4 y Vite.

## Overview

Este repositorio contiene el design system completo de Qurable, organizado como una aplicación web consultable que el equipo puede usar como fuente única de verdad para:

- **Paletas de colores** (primarias y secundarias) con funcionalidad de copiar HEX
- **22 componentes UI aislados** organizados en 7 categorías
- **Metadatos de uso** (tokens de color, páginas donde se usan)
- **Live previews interactivos** para cada componente

## Stack tecnológico

- **React 18** (con react-router)
- **Tailwind CSS v4** (vía @tailwindcss/vite)
- **Vite 6**  
- **TypeScript**  
- **Lucide Icons**  
- Shadcn UI (componentes base)

## Estructura del proyecto

```
/src
  /app
    App.tsx                  # Entry point con RouterProvider
    routes.ts                # Configuración de rutas
    /components
      Layout.tsx             # Layout principal con sidebar
      ComponentCard.tsx      # Wrapper para mostrar componentes
      ColorPaletteSection.tsx # Visualización de paletas
      /ui                    # Componentes del design system
        DSButton.tsx         # Botón (7 variantes)
        DSBadge.tsx          # Badge de estado
        DSNavItem.tsx        # Navegación lateral
        DSInput.tsx          # Search + Text inputs
        DSTabs.tsx           # Tabs horizontales
        DSMultiTag.tsx       # Multi-selector con pills
        DSPagination.tsx     # Paginación numerada
        DSStepNav.tsx        # Stepper vertical (campaign builder)
        DSStepperBar.tsx     # Barra fixed de navegación (Back/Continue/Save)
        DSTable.tsx          # Data table con acciones
        DSTemplateCard.tsx   # Template de cupones
        DSCouponPreview.tsx  # Preview card de cupón (editor)
        DSImageUpload.tsx    # Zonas de upload con modal de atributos
    /pages
      Overview.tsx           # Página principal
      PrimaryColorsPage.tsx  # Colores primarios
      SecondaryColorsPage.tsx # Colores secundarios
      ComponentsPage.tsx     # Todos los componentes UI
    /data
      colors.ts              # Definición de paletas de color
  /styles
    index.css              # Imports principales
    tailwind.css           # Tailwind v4 config
    theme.css              # Design tokens CSS
    fonts.css              # Font imports (vacío en este caso)
```

## Componentes destacados

### Navegación
- **Sidebar Item** (active/inactive) — Items de navegación lateral con estado activo (Primary 80 bg + purple ring)
- **Breadcrumb** — Navegación jerárquica
- **Step Navigation** — Stepper vertical para formularios multi-paso
- **Stepper Navigation Bar** — Barra fixed con smart-positioning (se ancla 20px debajo del contenido si no llena la pantalla)

### Botones
- **7 variantes**: Primary, Secondary, Ghost, Destructive, Success, AI, Dark
- Íconos posicionables (left/right)
- Soporte para disabled state

### Inputs
- **Search Input** — con ícono leading y botón clear
- **Text Input** — con label, helper text y error state
- **Multi-tag Selector** — Single-line pills con overflow (+N) y dropdown de checkboxes

### Data Display
- **Tabs** — Navegación horizontal con underline animado
- **Data Table** — Tabla completa con thumbnail, badges, sortable columns y acciones por fila
- **Pagination** — Numbered navigation con ellipsis

### Forms
- **Image Upload Zones** — Slots de carga con hover overlay, context menu (Edit/Delete) y modal para atributos de imagen
- **Custom Attribute Row** — Key-value inputs con botón de eliminar

### Cards
- **Template Card** — Card de selección de cupones con metadata expandida ("What it is", "When to use", "Already configured", "You customize")
- **Coupon Preview Card** — Live preview del cupón con stats grid, badges de días (D L M M J V S) y campo "Coupon book key" con copy

## Colores

### Paletas primarias
- **Gray** (0 - 100, 12 swatches)
- **Primary** (5 - 90, violet/purple brand, #6430F7)
- **Secondary** (5 - 90, lime/yellow accent, #D7FE03)
- **Destructive** (5 - 90, red, #F43F5E)
- **Warning** (5 - 90, orange, #F59E0B)
- **Success** (5 - 90, green, #22C55E)

### Paletas secundarias
- Blue, Cyan, Teal, Lime, Purple, Pink, Orange (cada una con 10 swatches del 5 al 90)

**Total**: 13 paletas, 120+ color tokens.

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build
```

## Características especiales

### Copiar HEX al portapapeles
Todos los color swatches y el campo "Coupon book key" incluyen funcionalidad de copia con fallback para entornos sandboxed (usa `document.execCommand` como alternativa a Clipboard API).

### Smart positioning (StepperBar)
El componente `DSStepperBar` detecta si el contenido del stepper llena la pantalla:
- Si **no llena** → se posiciona 20px debajo del contenido
- Si **llena/overflow** → fixed bottom: 20px

### Multi-tag con overflow inteligente
`DSMultiTag` mide dinámicamente cuántos pills caben en una línea y colapsa el resto a un badge `+N`.

### Componentes completamente interactivos
- `DSImageUpload` incluye file picker nativo, overlay de hover, menú contextual y modal de atributos
- `DSMultiTag` cierra dropdown al hacer clic fuera
- `DSTable`, `DSPagination`, `DSTabs`, `DSStepNav` — todos con estado funcional

## Brand

- **Colores de marca**: `#1E1731` (dark sidebar), `#6430F7` (primary brand)
- **Tipografías**: PP Neue Montreal, Neue Montreal
- **Border radius**: predominantly `rounded-full` / `rounded-[123px]` (pill-shaped inputs)

## Licencia

Propiedad de Qurable. Uso interno.

---

**Autor**: Design System Team  
**Última actualización**: Febrero 2026