export const getPublicUrl = (path) => {
  // Extraemos la URL base configurada en vite.config.js
  const baseUrl = import.meta.env.BASE_URL;

  // Limpiamos la ruta original para evitar dobles slashes (//) si baseUrl ya termina en '/'
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${baseUrl}${cleanPath}`;
};
