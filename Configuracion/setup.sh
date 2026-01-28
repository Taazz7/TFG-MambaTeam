#!/bin/bash

# Script de setup para Mamba Team Vue

echo "🏀 Configurando Mamba Team Vue..."
echo ""

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: Ejecuta este script desde el directorio vue-mamba/"
    exit 1
fi

# 2. Instalar dependencias
echo -e "${YELLOW}📦 Instalando dependencias...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias"
    exit 1
fi

echo -e "${GREEN}✅ Dependencias instaladas${NC}"
echo ""

# 3. Crear directorios necesarios
echo -e "${YELLOW}📁 Creando estructura de directorios...${NC}"
mkdir -p public/img
mkdir -p public/fonts
mkdir -p src/assets/img

echo -e "${GREEN}✅ Directorios creados${NC}"
echo ""

# 4. Información sobre assets
echo -e "${YELLOW}⚠️  IMPORTANTE: Copia tus assets${NC}"
echo ""
echo "Necesitas copiar manualmente:"
echo "  1. Imágenes: copia ./img/* a ./public/img/"
echo "  2. Fuente: copia Jersey25-Regular.ttf a ./public/fonts/"
echo ""
echo "Comandos sugeridos:"
echo "  cp -r ../img/* ./public/img/"
echo "  cp ../Jersey25-Regular.ttf ./public/fonts/"
echo ""

# 5. Crear archivo de ejemplo para assets faltantes
cat > public/img/.gitkeep << EOF
# Coloca aquí las imágenes del proyecto original
# Archivos necesarios:
# - logo.png
# - slider1.jpg, slider2.jpg, slider3.jpg
# - a1.png, a2fem.png, 3a.png
# - 1.png hasta 12.png (jugadores)
# - 4-removebg-preview.png
EOF

cat > public/fonts/.gitkeep << EOF
# Coloca aquí la fuente Jersey25-Regular.ttf
EOF

# 6. Mostrar siguiente paso
echo -e "${GREEN}✅ Setup completado!${NC}"
echo ""
echo "🚀 Próximos pasos:"
echo ""
echo "  1. Copia los assets (imágenes y fuente) como se indicó arriba"
echo "  2. Ejecuta: npm run dev"
echo "  3. Abre http://localhost:5173/ en tu navegador"
echo ""
echo "📚 Lee README.md y MIGRATION_GUIDE.md para más información"
echo ""