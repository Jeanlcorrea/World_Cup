import { Icon } from "./../../components"

const Input = ( {name, label, ...props} ) => (
    <div className="flex flex-col">
        <label className="text-sm font-bold text-grey-500 mb-2" htmlFor={name}>{label}</label>
        <input className="p-3 border border-gray-600 rounded-xl focus:outline focus:outline-2" {...props} name={name} id={name} />
    </div>
)

/*export function Login() {
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
                <Icon name="arrowLeft" className="w-6" />
            </a>
            <h2 className="text-xl text-red-700 font-bold">Entre na sua conta</h2>
            </div>

            <form action="" className="space-y-6 p-4">
            <Input
                type="email"
                name="email"
                label="Seu email"
                placeholder="Digite seu email"
            />
            <Input
                type="password"
                name="password"
                label="Sua senha"
                placeholder="Digite sua senha"
            />

            <button className="w-full text-center bg-red-300 text-white  px-6 py-3 rounded-2xl">
                Entrar
            </button>
            </form>
        </main>
        </div>
    );
}*/

export function Login() {
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
              <Icon name="arrowLeft" className="w-6" />
            </a>
            <h2 className="text-xl font-bold">Entre na sua conta</h2>
          </div>
  
          <form action="" className="space-y-6 p-4">
            <Input
              type="email"
              name="email"
              label="Seu email"
              placeholder="Digite seu email"
            />
            <Input
              type="password"
              name="password"
              label="Sua senha"
              placeholder="Digite sua senha"
            />
  
            <button className="w-full text-center bg-red-300 text-white  px-6 py-3 rounded-2xl">
              Entrar
            </button>
          </form>
        </main>
      </div>
    );
  }