# ISTU · Propuesta de rediseño

Web institucional con estética universitaria contemporánea, desarrollada en HTML, CSS y JavaScript sin dependencias de ejecución.

## Abrir localmente

Desde esta carpeta ejecutá:

```powershell
npm start
```

Abrí http://localhost:4173. Para cambiar el puerto, definí la variable `PORT` antes de iniciar. También se puede abrir `dist/index.html` directamente; algunas funciones del navegador, como el portapapeles, funcionan mejor desde localhost.

## Funciones

- Cinco carreras con búsqueda por nombre/intereses y filtros por área.
- Comparación de hasta tres carreras, guardada en el navegador.
- Guía de orientación de tres preguntas con afinidades calculadas.
- Catálogo de doce cursos, búsqueda y fichas individuales.
- Buscador global de carreras, cursos y aula virtual.
- Checklist de seis documentos con progreso persistente.
- Preparación de consultas con texto copiable y descarga `.txt`.
- Menú adaptable, diálogos accesibles, FAQ y enlaces reales a teléfonos, ubicación y campus.

## Publicar

`dist/` contiene el sitio completo y puede subirse a cualquier hosting estático. No requiere instalar paquetes ni ejecutar un proceso en el servidor. `npm run build` verifica sintaxis, recursos, IDs y enlaces internos; los archivos de publicación ya están en `dist/`.

El servidor Node incluido es para la vista previa local. La publicación remota no se realizó: no hay herramientas de hosting Sites disponibles en esta sesión.

## Contenido y alcance

Información contrastada con https://istu.edu.ar/ y el registro provincial. Ver `ANALISIS.md`. No se afirman fechas de inscripción, aranceles, duración, modalidad ni resoluciones sin documentación oficial. La guía por intereses tiene carácter orientativo.

El formulario prepara una consulta; **no realiza una inscripción ni envía mensajes al instituto**. No hay backend de admisiones. El checklist y la selección del comparador permanecen en `localStorage` de cada navegador; el nombre y la consulta no se guardan. Las fotografías son ilustrativas, con fuentes en `dist/assets/SOURCES.md`. La marca gráfica es una propuesta de identidad para este rediseño.

Las fuentes usan Google Fonts con alternativas locales. Para funcionamiento totalmente desconectado se utilizan las tipografías alternativas.
