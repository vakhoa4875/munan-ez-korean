
import { InputText } from 'primereact/inputtext';
import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar } from 'primereact/sidebar';
import { menuItems } from './menu';

export function RightSideBar({ visible, toggleSidebar }: any) {
    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={toggleSidebar} header={<InputText placeholder="Tìm kiếm..." type="text" className="w-8rem sm:w-auto mr-1!" />}>
                <div className="card flex justify-content-center">
                    <PanelMenu model={menuItems} className="w-full md:w-20rem" />
                </div>
            </Sidebar>
        </div>
    )
}
