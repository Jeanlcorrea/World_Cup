import { Icon, Input } from "~/components"

export const Signup = () => {
    return (
        <div className="w-screen">
        <header className="flex justify-center p-4 border-b-2 border-red-300">
            <div>
            <img
                src="/imgs/NaTrave.svg"
                alt="Logo"
                className="w-32 md:w-40"
            />
            </div>
        </header>
    
        <main className="container max-w-xl p-4">
            <div className="p-4 flex items-center space-x-4">
            <a href="/">
                <Icon name="back" className="w-6" />
            </a>
            <h2 className="text-xl font-bold">Crie sua conta</h2>
            </div>
    
            <form action="" className="space-y-6 p-3">
            <Input
                type="text"
                name="nome"
                label="Seu nome"
                placeholder="Digite seu nome"
            />
            <Input
                type="text"
                name="usernam"
                label="Usuário"
                placeholder="Digite seu nome de usuário"
            />
            <Input
                type="text"
                name="email"
                label="Seu e-mail"
                placeholder="Digite seu e-mail"
            />
            <Input
                type="password"
                name="password"
                label="Sua senha"
                placeholder="Digite sua senha"
            />
    
            <a href="/dashboard" className="w-full block text-center bg-red-300 text-white  px-6 py-3 rounded-2xl">
                Criar
            </a >
            </form>
        </main>
        </div>
    );
}