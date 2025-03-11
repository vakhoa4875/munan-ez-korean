
import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar } from 'primereact/sidebar';
import { menuItems } from './menu';

export function RightSideBar({ visible, toggleSidebar }: any) {
    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={toggleSidebar}>
                <div className="card flex justify-content-center">
                    <PanelMenu model={menuItems} className="w-full md:w-20rem" />
                </div>
            </Sidebar>
        </div>
    )
}
