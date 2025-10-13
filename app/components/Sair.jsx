    <form
          className="flex ml-6 mt-28 border h-94"
          action={async () => {
            'use server';
            await logout();
          }}
        >
          <button className="flex items-center justify-center gap-2 rounded-md  cursor-pointer w-26">
            <div className="flex items-center gap-2 font-bold text-gray-600  hover:text-blue-400 py-1">Sair</div>
          </button>
        </form>
 