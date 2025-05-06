import keycloakInstance from '@/modules/auth/services/keycloak';
import { confirmDialog } from 'primereact/confirmdialog';
import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';

interface KeycloakContextProps {
  keycloak: typeof keycloakInstance;
  initialized: boolean;
  isAuthenticated: boolean;
  login: (path?: string) => Promise<void>;
  logout: () => void;
  getToken: () => Promise<string | undefined>;
  getRoles: () => string[];
}

const KeycloakContext = createContext<KeycloakContextProps | undefined>(undefined);

interface KeycloakProviderProps {
  children: ReactNode;
}

export const KeycloakProvider: React.FC<KeycloakProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // Sử dụng useRef để theo dõi trạng thái khởi tạo
  const isInitializing = useRef<boolean>(false);

  useEffect(() => {
    const initKeycloak = async () => {
      // Kiểm tra xem đã đang khởi tạo chưa
      if (isInitializing.current) {
        return;
      }

      // Đánh dấu đang khởi tạo
      isInitializing.current = true;

      try {
        // Kiểm tra xem đã được khởi tạo chưa
        if (!keycloakInstance.authenticated) {
          const authenticated = await keycloakInstance.init({
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            pkceMethod: 'S256',
            checkLoginIframe: false,
            enableLogging: true,
          });

          // Thiết lập token refresh tự động
          if (authenticated) {
            setupTokenRefresh();
          }

          setIsAuthenticated(authenticated);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Keycloak initialization failed:', error);
      } finally {
        setInitialized(true);
        // Đánh dấu đã hoàn thành khởi tạo
        isInitializing.current = false;
      }
    };

    initKeycloak();

    // Cleanup function
    return () => {
      // Nếu cần, thêm logic cleanup ở đây
    };
  }, []);

  // Thiết lập token refresh tự động
  const setupTokenRefresh = () => {
    // Kiểm tra token mỗi 30 giây
    const refreshInterval = setInterval(() => {
      if (keycloakInstance.authenticated) {
        keycloakInstance.updateToken(70)
          .then((refreshed) => {
            if (refreshed) {
              console.log('Token refreshed successfully');
            }
          })
          .catch(() => {
            console.error('Failed to refresh token, logging out...');
            clearInterval(refreshInterval); // Xóa interval trước khi logout
            keycloakInstance.logout();
          });
      }
    }, 30000);

    // Cleanup interval khi component unmount
    return () => clearInterval(refreshInterval);
  };

  // Hàm login với popup
  const login = async (path?: string): Promise<void> => {
    try {
      await keycloakInstance.login({
        // Sử dụng popup thay vì redirect
        action: 'login',
        prompt: 'login',
        redirectUri: path ? window.location.origin + path : window.location.origin + '/',
        scope: 'openid profile email',
        // Chỉ hiển thị Google login
        idpHint: 'google',
        // display: 'popup',
      });
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Hàm logout
  const logout = () => {
    confirmDialog({
      message: 'Bạn có chắc chắn muốn đăng xuất?',
      header: 'Xác nhận đăng xuất',
      icon: 'pi pi-exclamation-triangle',
      rejectClassName: 'p-button-outlined',
      acceptClassName: 'btn-primary ml-3!',
      accept: () => {
        keycloakInstance.logout({ redirectUri: window.location.origin });
        setIsAuthenticated(false);
      },
      reject: () => {
      },
    });
  };

  // Hàm lấy token
  const getToken = async (): Promise<string | undefined> => {
    try {
      // Cố gắng refresh token nếu gần hết hạn (70 giây)
      await keycloakInstance.updateToken(70);
      return keycloakInstance.token;
    } catch (error) {
      console.error('Failed to get token:', error);
      // Nếu không refresh được, logout
      logout();
      return undefined;
    }
  };

  // Hàm lấy roles của user
  const getRoles = (): string[] => {
    try {
      // Lấy roles từ realm_access của keycloak
      const roles = keycloakInstance.realmAccess?.roles || [];
      return roles;
    } catch (error) {
      console.error('Failed to get roles:', error);
      return [];
    }
  };

  const value = {
    keycloak: keycloakInstance,
    initialized,
    isAuthenticated,
    login,
    logout,
    getToken,
    getRoles,
  };

  return (
    <KeycloakContext.Provider value={value}>
      {children}
    </KeycloakContext.Provider>
  );
};

// Hook để sử dụng Keycloak context
export const useKeycloak = (): KeycloakContextProps => {
  const context = useContext(KeycloakContext);
  if (!context) {
    throw new Error('useKeycloak must be used within a KeycloakProvider');
  }
  return context;
};