import { useKeycloak } from '@/contexts/KeycloakContext';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { useRef } from 'react';

interface TopNavbarProps {
    toggleSidebar: () => void;
    menuItems: MenuItem[];
    onSearch: (event: any) => void;
    avatarDropdownItems: MenuItem[];
}

export function TopNavbar({ toggleSidebar, menuItems, onSearch, avatarDropdownItems }: TopNavbarProps) {
    const { isAuthenticated, login, keycloak } = useKeycloak();
    const menuRight = useRef<Menu>(null);
    const getRightMenu = () => {
        return isAuthenticated ? (
            <>
                <Avatar icon={!keycloak.tokenParsed?.picture ? "pi pi-user" : undefined}
                    image={keycloak.tokenParsed?.picture || undefined}
                    shape="circle"
                    onClick={(event) => menuRight.current?.toggle(event)}
                    aria-controls="popup_menu_right"
                    aria-haspopup
                    className='w-10! h-10!' />
                <Menu model={avatarDropdownItems} popup ref={menuRight} id="popup_menu_right" />
            </>
        ) : (
            <Button label="Đăng nhập" icon="pi pi-google" className="p-button-outlined" onClick={login} />
        );
    };

    return (
        <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md md:flex rounded-b-md sticky top-0 z-50">
            <div className="items-center flex gap-3">
                <Button icon="pi pi-bars" className="mr-2 flex standard:none btn-transparent" onClick={toggleSidebar} />
                <img alt="logo" src="/circle-logo.png" className="mr-2 h-[40px] flex-none" />
            </div>
            <div className="hidden standard:flex shrink space-x-6">
                <Menubar model={menuItems} />
            </div>
            <div className="flex items-center gap-2 ml-2">
                <InputText placeholder="Tìm kiếm..." type="text" className="w-8rem sm:w-auto hidden standard:flex" onSubmit={(e) => onSearch(e)} />
                {getRightMenu()}
            </div>
        </div>
    );
}