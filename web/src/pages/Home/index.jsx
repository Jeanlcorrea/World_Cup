

export function Home () {
    return (

        <div className="bg-red-700 min-h-screen w-screen p-6 flex flex-col items-center text-white space-y-6">

            <header className="container max-w-4xl p-4 flex justify-center">
                <img src="/imgs/logo.svg" className="w-40 "/>
            </header>

            <div className=" container max-w-4xl flex-1 items-center md:flex-row flex flex-col space-y-4 md:space-y-0 md: space-x-6">

                <div className="md:flex-1 flex justify-center">
                    <img src="/imgs/photo.png" className="w-full max-w-sm" />
                </div>

                <div className="md:flex-1 flex flex-col space-y-6">
                    <h1 className="text-3xl text-center md:text-left">Dê o seu palpite na Copa do Mundo do Catar 2022! </h1>
        
                    <a href="/signup" className="text-center text-red-700 bg-white text-xl px-6 py-3 rounded-xl">
                        Criar minha conta
                    </a>

                    <a href="/login" className="text-center border-white text-white text-xl px-6 py-3 rounded-xl">
                        Fazer Login
                    </a>

                </div>
            </div>
        </div>
    )
}