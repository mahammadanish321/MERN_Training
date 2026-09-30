// Keeping release metadata in one module lets health/version endpoints expose
// the same application version without duplicating these values.
const APP_VERSION = '2.0.0';
const DEPLOYED_AT = new Date().toISOString();

// Export both constants as named properties for CommonJS destructuring imports.
module.exports = { APP_VERSION, DEPLOYED_AT }