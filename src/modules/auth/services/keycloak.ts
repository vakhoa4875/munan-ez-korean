import Keycloak from 'keycloak-js';

// Khởi tạo Keycloak instance
const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL || 'https://your-keycloak-server/auth',
  realm: import.meta.env.VITE_KEYCLOAK_REALM || 'your-realm',
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'your-client-id',
};

// Tạo instance Keycloak
const keycloakInstance = new Keycloak(keycloakConfig);

export default keycloakInstance;