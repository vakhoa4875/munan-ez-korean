import React, { useEffect, useState } from 'react';
import { useKeycloak } from '../contexts/KeycloakContext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

interface UserInfo {
  name?: string;
  email?: string;
  preferred_username?: string;
  sub?: string;
  picture?: string;
}

const UserProfile: React.FC = () => {
  const { keycloak, logout } = useKeycloak();
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  useEffect(() => {
    // Lấy thông tin người dùng từ Keycloak
    if (keycloak.authenticated) {
      keycloak.loadUserProfile()
        .then(profile => {
          setUserInfo(profile as UserInfo);
        })
        .catch(error => {
          console.error('Failed to load user profile:', error);
        });
    }
  }, [keycloak]);

  return (
    <div className="p-6">
      <Card title="User Profile" className="max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          {userInfo.picture && (
            <div className="flex justify-center">
              <img 
                src={userInfo.picture} 
                alt="Profile" 
                className="rounded-full w-24 h-24"
              />
            </div>
          )}
          <div>
            <h3 className="font-semibold">Name</h3>
            <p>{userInfo.name || 'N/A'}</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>{userInfo.email || 'N/A'}</p>
          </div>
          <div>
            <h3 className="font-semibold">Username</h3>
            <p>{userInfo.preferred_username || 'N/A'}</p>
          </div>
          <Button 
            label="Logout" 
            icon="pi pi-sign-out" 
            className="p-button-danger mt-4"
            onClick={logout}
          />
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;