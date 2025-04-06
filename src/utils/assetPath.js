// // Helper function to handle asset paths correctly in both dev and production
// export function getAssetPath(path) {
//   // Remove leading slash if present
//   const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
//   // In development, Vite serves assets from root, but in production they're relative to base
//   return import.meta.env.DEV ? `/${cleanPath}` : `${cleanPath}`;
// }