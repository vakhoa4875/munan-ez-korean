import { InputText } from 'primereact/inputtext';
import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar } from 'primereact/sidebar';
import { MenuItem } from 'primereact/menuitem';

interface RightSideBarProps {
    visible: boolean;
    toggleSidebar: () => void;
    menuItems: MenuItem[];
    onSearch: (event: any) => void;
}

export function RightSideBar({ visible, toggleSidebar, menuItems, onSearch }: RightSideBarProps) {
    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={toggleSidebar} header={<InputText placeholder="Tìm kiếm..." type="text" className="w-8rem sm:w-auto mr-1!" onSubmit={(e) => onSearch(e)} />}>
                <div className="card flex justify-content-center">
                    <PanelMenu model={menuItems} className="w-full md:w-20rem" />
                </div>
            </Sidebar>
        </div>
    )
}