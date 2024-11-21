import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",
        proxy: {
            "/lupai": {
                // target: "ws://190.16.250.34:8001",
                target: "ws://localhost:8001",
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
