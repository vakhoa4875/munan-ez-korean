import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import { useRef } from 'react';
import { avatarDropdownItems, menuItems } from './menu';

export function TopNavbar({ toggleSidebar }: any) {
    const menuRight = useRef<Menu>(null);

    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md md:flex">
            <div className="items-center flex">
                <Button icon="pi pi-bars" className="mr-2 flex standard:none btn-transparent" onClick={toggleSidebar} />
                <img alt="logo" src="/circle-logo.png" className="mr-2 h-[40px] flex-none" />
            </div>
            <div className="hidden standard:flex shrink space-x-6">
                <Menubar model={menuItems} />
            </div>
            <div className="flex items-center gap-2 ml-2">
                <InputText placeholder="Tìm kiếm..." type="text" className="w-8rem sm:w-auto" />
                <Avatar icon="pi pi-user" shape="circle" onClick={(event) => menuRight.current?.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
                <Menu model={avatarDropdownItems} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            </div>
        </div>
    );
}
