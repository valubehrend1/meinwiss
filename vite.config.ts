import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/lupai": {
                target: "ws://190.16.250.34:8001",
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
