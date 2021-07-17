import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';
 export default function Navbar(){
   return (
     <>
     <ProSidebar>
  <SidebarHeader>
    <h1>Choose the file</h1>
  </SidebarHeader>
  <SidebarContent>
    
    <h4>index.css</h4>
    <h4>index.js</h4>
  </SidebarContent>
  
</ProSidebar>
     </>
   )
 }
