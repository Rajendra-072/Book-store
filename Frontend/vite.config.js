import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import React from 'react'

export default defineConfig({

   darkMode: "class",
  theme: {
    extend: {},
  },

  plugins: [
     tailwindcss(),
  ],
})


