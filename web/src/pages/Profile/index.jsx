import { Icon, Card, DateSelect } from "~/components"


export const Profile = () => {
    return (
        <>
        <div className="w-screen h-screen">
            <header className="bg-red-500 text-white p-4">

                <div className="container max-w-3xl p-2 flex justify-between">
                    <img src="/imgs/logo.svg" className="w-28 md:40" />
                
                </div>
            </header>

            <main className="spaace-y-6">
                <section id="header" className=" bg-red-500 text-white">
                    <div className="container max-w-3xl space-y-3 p-4">
                        <a href="/dashboard"><Icon name="back" className="w-10"/></a>
                        <h3 className="text-2xl font-bold">Jean Correa</h3>
                    </div>
                </section>

                <section id="content" className="container p-4 max-w-3xl space-y-4">

                        <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>
                    
                        <DateSelect/>

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