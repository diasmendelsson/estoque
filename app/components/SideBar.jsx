'use client'
import { sideBarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { MdInventory } from "react-icons/md";

export default function SideBar(){

    const pathname = usePathname();

    return(
        <aside className="flex h w-fit flex-col  justify-between border-r border-gray-300 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 w-[355px]">

             
            <nav className="flex flex-col gap-4">
               <Link href="/" className="w-full flex mb-12 text-[20px] cursor-pointer items-center justify-center gap-2 text-black ">
                
                    <h1 className="font-ibm-plex-serif   font-bold max-xl:hidden">Estoque Online</h1>
                    <MdInventory />
                </Link>
               

                {sideBarLinks.map((item) => {

                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    
                    return(
                        <Link 
                          className={cn('p-8 border h-12 flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start',{'bg-blue-400': isActive})} 
                          href={item.route}
                          key={item.label}
                        >
                            <div className="relative size-6">
                                <Image
                                  src={item.imgUrl}
                                  alt={item.label}
                                fill
                                  className={cn({'brightness-[4] invert-0': isActive})}/>
                            </div>
                            <p className={cn(' text-16 font-semibold text-gray-600 max-xl:hidden', {'!text-white' : isActive})}>{item.label}</p>
                        </Link>
                    )

                })

                }
            </nav>
      </aside>
    )
}