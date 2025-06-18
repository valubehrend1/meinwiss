import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",
         proxy: {
             "/lupai": {
                 target: "ws://lupai-api:8000",
                 changeOrigin: true,
                 secure: false,
                 ws: true,
             },
         },
    },
    preview: {
        port: 4174,
    },
})
