import { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Features', icon: 'pi pi-star' },
        { label: 'Projects', icon: 'pi pi-search' },
        { label: 'Contact', icon: 'pi pi-envelope' }
    ];

    return (
        <div>
            {/* Top Navbar */}
            <div className="flex justify-between items-center p-4 bg-white shadow-md md:flex">
                <div className="items-center flex">
                    <Button icon="pi pi-bars" className="mr-2 flex md:none transparent-button" onClick={toggleSidebar} />
                    <img alt="logo" src="/circle-logo.png" className="mr-2 h-[40px]" />
                </div>
                <div className="hidden md:flex space-x-6">
                    {items.map((item, index) => (
                        <a key={index} href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:hidden p-4`}>
                <Button icon="pi pi-times" className="absolute top-2 right-2 transparent-button" onClick={toggleSidebar} />
                <div className="mt-10">
                    {items.map((item, index) => (
                        <a key={index} href="#" className="block p-3 border-b hover:bg-gray-100">
                            <i className={item.icon}></i>
                            <span className="ml-2">{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
