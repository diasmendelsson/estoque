
import Image from "next/image";

import Auth from "./components/Auth";

import { getSession } from "./lib/session";
import pulo from "./db/autenticacao";

import { decrypt } from "./lib/session";
import { cookies } from "next/headers";

export default async function Home() {

  const session = await getSession();

  // Corrigindo o acesso
 const userId = session?.user?.id;

  

  return (
    <div className="">



      
      <main className="pt-16">
     
      
       

      </main>
    
    </div>
  );
}
