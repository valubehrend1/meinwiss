# Estructura del Proyecto del Widget de Chat

Este documento explica la estructura del proyecto después de la limpieza, enfocándose sólo en los componentes necesarios para el Widget de Chat.

## Problema resuelto: Componente `Chat.tsx` faltante

**Descripción del problema:**
El archivo `routes.tsx` estaba importando y utilizando un componente `Chat.tsx` que no existe en el proyecto. Esto generaba un error 404 (Not Found) cuando se intentaba cargar la ruta `/chat`.

**Solución implementada:**
1. Se eliminó la importación del componente `Chat` que no existía
2. Se modificó la ruta `/chat` para utilizar el componente `ChatWidget` en su lugar

Estos cambios mantienen la funcionalidad del chat en ambas rutas:
- La ruta `/chat` ahora utiliza el componente `ChatWidget`
- La ruta `/widget` ya estaba usando correctamente el componente `ChatWidget`

## Componentes Principales

### `/components/Chat/InteractiveChat/ChatWidget.tsx`
Componente principal del widget que maneja la lógica de chat, comunicación con WebSocket y renderiza la interfaz.

### `/components/Chat/InteractiveChat/ChatWidgetStyles.tsx`
Estilos específicos para el widget, incluyendo el contenedor, cabecera, área de mensajes y botones.

### `/components/Chat/InteractiveChat/ScrollableMessagesContainer.tsx`
Contenedor para los mensajes con funcionalidad de scroll.

## Componentes Específicos del Widget

### `/components/Chat/InteractiveChat/Widget/WidgetUserQuestion.tsx`
Renderiza las preguntas del usuario en el chat.

### `/components/Chat/InteractiveChat/Widget/WidgetLupaiAnswer.tsx`
Renderiza las respuestas del asistente, incluyendo estados de carga y errores.

### `/components/Chat/InteractiveChat/Widget/WidgetLupaiResources.tsx`
Muestra las fuentes de información utilizadas en las respuestas.

### `/components/Chat/InteractiveChat/Widget/WidgetMessageStyles.tsx`
Estilos específicos para los mensajes del widget.

## Componentes Compartidos Necesarios

### `/components/pages/shared/SharedSearchBar/SharedSearchBar.tsx`
Barra de búsqueda compartida utilizada para enviar mensajes.

### `/components/Chat/ErrorModal/ErrorModal.tsx`
Modal para mostrar errores en el chat.

## Contexto y Hooks

### `/context/WebSocketContext.tsx`
Contexto para gestionar la conexión WebSocket en toda la aplicación.

### `/hooks/useWebSocket.ts`
Hook personalizado para acceder al contexto WebSocket.

## Configuración Redux

### `/config/features/ChatSlice.tsx`
Slice de Redux para gestionar el estado del chat.

### `/config/features/ErrorSlice.ts`
Slice de Redux para gestionar errores.

## Archivos de Ejemplo e Integración

### `/public/widget-example.html`
Ejemplo HTML de integración del widget en una página web.

### `/WIDGET_INTEGRATION.md`
Documentación sobre cómo integrar el widget en otras aplicaciones.

## Rutas

El widget está disponible en dos rutas:

1. `/widget`: Diseñado para ser embebido en un iframe (sin navegación ni footer)
2. `/chat`: La misma funcionalidad pero dentro del layout principal de la aplicación

## Flujo de Datos

1. **Inicialización**:
   - `WebSocketContext` establece la conexión WebSocket
   - `ChatWidget` se suscribe a los mensajes mediante `useWebSocket`

2. **Envío de Mensajes**:
   - Usuario escribe en `SharedSearchBar` y envía un mensaje
   - `ChatWidget` recibe el mensaje y lo envía a través de WebSocket
   - El estado de Redux se actualiza con `addUserMessage`

3. **Recepción de Respuestas**:
   - `ChatWidget` recibe mensajes del WebSocket
   - Las respuestas se procesan y se almacenan en Redux con `setAssistantResponse`
   - Los componentes `WidgetLupaiAnswer` renderizan las respuestas

4. **Exportación PDF**:
   - `ChatWidget` incluye la funcionalidad para exportar la conversación como PDF
   - Utiliza la biblioteca jsPDF para generar el documento

## Integración en Otras Aplicaciones

Para integrar este widget en otras aplicaciones, consulta `WIDGET_INTEGRATION.md` para detalles completos y `public/widget-example.html` para un ejemplo práctico.
