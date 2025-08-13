# Integración del Chat como Widget

Este documento explica cómo integrar el chat como un widget flotante en una página web externa.

## Descripción General

El chat ha sido refactorizado para permitir su uso como un widget flotante que puede integrarse en cualquier sitio web mediante un iframe. El widget se coloca típicamente en la esquina inferior derecha de la página y puede minimizarse/maximizarse según sea necesario.

## Implementación Básica

### 1. Añadir el iframe a su HTML

```html
<iframe
    id="chatWidget"
    src="https://tu-dominio.com/widget"
    style="position: fixed; bottom: 20px; right: 20px; width: 450px; height: 500px; border: none; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); z-index: 1000;"
    title="Chat Widget">
</iframe>
```

### 2. Añadir estilos CSS (opcional)

```css
.chat-widget-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 450px;
    height: 500px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.chat-widget-minimized {
    height: 50px;
}
```

### 3. Añadir JavaScript para la comunicación

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const chatFrame = document.getElementById('chatWidget');

    // Escuchar mensajes del iframe
    window.addEventListener('message', function(event) {
        // Verificar origen por seguridad (reemplazar con tu dominio)
        if (event.origin !== 'https://tu-dominio.com') return;

        // Manejar eventos del chat
        if (event.data.type === 'CHAT_WIDGET_TOGGLE') {
            if (event.data.isMinimized) {
                chatFrame.classList.add('chat-widget-minimized');
            } else {
                chatFrame.classList.remove('chat-widget-minimized');
            }
        }
    });
});
```

## Funcionalidades avanzadas

### Controlar el widget desde la página principal

Puedes enviar comandos al widget usando la API `postMessage`:

```javascript
// Minimizar el chat
function minimizeChat() {
    const chatFrame = document.getElementById('chatWidget');
    chatFrame.contentWindow.postMessage({
        type: 'PARENT_COMMAND',
        command: 'minimize'
    }, 'https://tu-dominio.com');
}

// Maximizar el chat
function maximizeChat() {
    const chatFrame = document.getElementById('chatWidget');
    chatFrame.contentWindow.postMessage({
        type: 'PARENT_COMMAND',
        command: 'maximize'
    }, 'https://tu-dominio.com');
}

// Reiniciar la conversación
function resetChat() {
    const chatFrame = document.getElementById('chatWidget');
    chatFrame.contentWindow.postMessage({
        type: 'PARENT_COMMAND',
        command: 'reset'
    }, 'https://tu-dominio.com');
}
```

### Implementación con Botón Flotante (Alternativa)

También puedes implementar un botón flotante que muestre/oculte el widget:

```html
<div id="chat-container" class="chat-container">
    <iframe id="chat-iframe" src="https://tu-dominio.com/widget" frameborder="0"></iframe>
</div>
<button id="toggle-chat-btn" class="chat-toggle-btn hidden">💬</button>
```

```css
.chat-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 450px;
    height: 500px;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    border-radius: 10px;
    overflow: hidden;
}

.chat-container iframe {
    width: 100%;
    height: 100%;
    border: none;
}

.chat-container.minimized {
    height: 50px;
}

.chat-toggle-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #00301e;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.hidden {
    display: none;
}
```

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    const chatIframe = document.getElementById('chat-iframe');
    const toggleButton = document.getElementById('toggle-chat-btn');
    let isChatVisible = true;

    // Función para mostrar/ocultar el chat
    function toggleChat() {
        if (isChatVisible) {
            chatContainer.classList.add('hidden');
            toggleButton.classList.remove('hidden');
        } else {
            chatContainer.classList.remove('hidden');
            toggleButton.classList.add('hidden');
        }
        isChatVisible = !isChatVisible;
    }

    // Asignar el evento al botón
    toggleButton.addEventListener('click', toggleChat);

    // Escuchar mensajes desde el iframe
    window.addEventListener('message', function(event) {
        // Verificar origen por seguridad en producción
        // if (event.origin !== "https://tu-dominio.com") return;

        if (event.data.type === 'CHAT_WIDGET_TOGGLE') {
            if (event.data.isMinimized) {
                chatContainer.classList.add('minimized');
            } else {
                chatContainer.classList.remove('minimized');
            }
        }
    });
});
```

### Personalización

El widget se puede personalizar a través de parámetros de URL:

- **Tema**: `?theme=dark` o `?theme=light`
- **Idioma**: `?lang=es` o `?lang=en` o `?lang=de`

Ejemplo:
```html
<iframe src="https://tu-dominio.com/widget?theme=dark&lang=es" ...></iframe>
```

## Ejemplo completo

Consulta el archivo `public/widget-example.html` para ver un ejemplo completo de integración.

## Consideraciones de seguridad

- Asegúrate de validar el origen en los mensajes `postMessage` para prevenir ataques XSS.
- Considera habilitar CORS adecuadamente en tu servidor.
- Si necesitas pasar información sensible, considera usar autenticación por token o similar.

## Consideraciones Técnicas

1. **Rendimiento**: El iframe carga toda la aplicación de chat, lo que puede afectar al rendimiento si la página principal ya es pesada. Considera cargar el iframe de forma diferida si es necesario.

2. **Responsividad**: El widget está diseñado para ser responsivo, pero es posible que necesites ajustar los estilos CSS para adaptarlo a dispositivos móviles o a diseños específicos.

## Soporte

Si encuentras algún problema con la integración del widget, por favor contacta con el equipo de desarrollo.
