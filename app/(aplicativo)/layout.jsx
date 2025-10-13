import SideBar from "../components/SideBar"


export default function AppLayout({children}){
    return (
     <div className="flex  font-inter ">
       <SideBar />

     

      <div className="w-full  ">
        {children}
      </div>
    </div>
    )
}