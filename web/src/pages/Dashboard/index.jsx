import { Icon, Card } from "~/components"

export const Dashboard = () => {
    return (
        <>
        <div className="w-screen h-screen">
            <header className="bg-red-500 text-white p-4">
                <div className="container max-w-3xl p-2 flex justify-between">
                    <img src="/imgs/logo.svg" className="w-28 md:40" />
                    <a href="/profile">
                        <Icon name="profile" />
                    </a>
                    
                </div>
            </header>

            <main className="space-y-6">
                <section id="header" className=" bg-red-500 text-white">
                    <div className="container max-w-3xl space-y-3 p-4">
                        <span>Olá, Jean</span>
                        <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
                    </div>
                </section>

                <section id="content" className="container p-4 max-w-3xl">

                        <div className="flex space-x-4 items-center justify-center p-4">
                            <Icon name="arrowLeft" className="w-6 text-red-500"/>
                            <span className="font-bold">24 Novembro</span>
                            <Icon name="arrowRight" className="w-6 text-red-500"/>
                        </div>


                        <div className="space-y-4">

                        <Card   
                            timeA={{ slug: 'sui'}}
                            timeB={{ slug: 'cam'}}
                            match={{ time:'7:00'}}
                        />

                        <Card
                            timeA={{ slug: 'uru'}}
                            timeB={{ slug: 'cor'}}
                            match={{ time:'7:00'}}
                        />

                        <Card
                            timeA={{ slug: 'por'}}
                            timeB={{ slug: 'gan'}}
                            match={{ time:'7:00'}}
                        />

                        <Card   
                            timeA={{ slug: 'bra'}}
                            timeB={{ slug: 'ser'}}
                            match={{ time:'7:00'}}
                        />
                        </div>
                </section>
            </main>
        </div>
        </>
    )

} 