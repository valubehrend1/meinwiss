#!/bin/bash

# Script para limpiar el proyecto y mantener solo los componentes del widget del chat

# Crear directorio para backup
mkdir -p backup
timestamp=$(date +%Y%m%d_%H%M%S)
backup_dir="backup/pre_cleanup_$timestamp"
mkdir -p $backup_dir

# Lista de directorios y archivos a mantener
declare -a keep_files=(
  # Componentes principales
  "src/components/Chat/InteractiveChat/ChatWidget.tsx"
  "src/components/Chat/InteractiveChat/ChatWidgetStyles.tsx"
  "src/components/Chat/InteractiveChat/ScrollableMessagesContainer.tsx"

  # Componentes específicos del widget
  "src/components/Chat/InteractiveChat/Widget"

  # Componentes compartidos necesarios
  "src/components/pages/shared/SharedSearchBar"
  "src/components/Chat/ErrorModal"

  # Contexto y Hooks
  "src/context/WebSocketContext.tsx"
  "src/hooks/useWebSocket.ts"

  # Configuración Redux
  "src/config/features/ChatSlice.tsx"
  "src/config/features/ErrorSlice.ts"

  # Archivos de ejemplo e integración
  "public/widget-example.html"
  "WIDGET_INTEGRATION.md"

  # Archivos esenciales del proyecto
  "package.json"
  "tsconfig.json"
  "vite.config.ts"
  "index.html"
  "public"
  "src/assets"
  "src/main.tsx"
  "src/vite-env.d.ts"
  "src/types"
  "src/theme.tsx"
  "src/config/i18next.config.tsx"
  "src/store.ts"
)

# Respaldo de archivos importantes
echo "Creando respaldo de archivos importantes..."
for file in "${keep_files[@]}"; do
  if [ -e "$file" ]; then
    # Crear directorio en el backup si es necesario
    mkdir -p "$backup_dir/$(dirname "$file")"
    cp -r "$file" "$backup_dir/$(dirname "$file")/"
  fi
done

# Crear un archivo con la lista de archivos y directorios que se mantienen
echo "Lista de archivos y directorios que se mantienen:" > "$backup_dir/kept_files.txt"
printf '%s\n' "${keep_files[@]}" >> "$backup_dir/kept_files.txt"

echo "Respaldo creado en $backup_dir"
echo "Ejecuta 'rm -rf src && mkdir src && cp -r $backup_dir/src/* src/' para restaurar en caso de error"

# Mensaje final
echo "==================================="
echo "Script completado. Se ha creado un respaldo de seguridad en $backup_dir."
echo "Este script NO elimina archivos, solo crea un respaldo."
echo "Para eliminar archivos manualmente, usa la lista en $backup_dir/kept_files.txt como referencia."
echo "==================================="
