import microsoftLogo from './assets/icon-microsoft.svg'
import googleLogo from './assets/icon-google.svg'
import logo from './assets/logo.svg'
import banner from './assets/banner.svg'
import bg from './assets/bg.svg'

export function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-12 relative overflow-hidden">
      <img
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10"
        src={bg}
        alt="Ilustração de grid"
      />

      <div className="w-full max-w-4xl flex items-center md:justify-between justify-center">
        <div className="w-full max-w-sm flex-col relative md:flex hidden">
          <img
            className="absolute -top-6 -right-[12%] hidden lg:block"
            src={banner}
            alt="Cursores de mouse com nome de um usuário abaixo do cursor"
          />

          <span className="flex items-center gap-1 text-4xl leading-6 font-semibold">
            <img className="w-16" src={logo} alt="Logo da Eraser" />
            eraser
          </span>

          <h1 className="my-6 text-3xl font-bold">
            The Whiteboard for Engineering Teams
          </h1>

          <ul className="list-inside list-disc font-light text-zinc-600 leading-7">
            <li>Collaborate on technical design</li>
            <li>Document your systems</li>
            <li>Diagram-as-code</li>
            <li>Github Integration</li>
            <li>Easy UI mockups</li>
          </ul>

          <span className="mt-8 text-sm">
            Learn more at{' '}
            <a href="" className="text-blue-600 underline">
              eraser.io
            </a>
          </span>
        </div>

        <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow-3xl">
          <div className="w-full max-w-[280px] mx-auto">
            <span className="flex items-center justify-center gap-2 mb-8 leading-8 text-zinc-600">
              <img className="w-8" src={logo} alt="Logo da Eraser" />
              Sign In
            </span>

            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center gap-2 h-8 px-4 rounded border border-zinc-400 text-xs hover:border-zinc-600">
                <img className="w-4" src={googleLogo} alt="Logo do Google" />
                Sign In with Google
              </button>

              <button className="flex items-center justify-center gap-2 h-8 px-4 rounded border border-zinc-400 text-xs hover:border-zinc-600">
                <img
                  className="w-4"
                  src={microsoftLogo}
                  alt="Logo da Microsoft"
                />
                Sign In with Microsoft
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 my-4 text-zinc-400">
              <span className="w-full h-px bg-gradient-to-l from-zinc-400" />
              OR
              <span className="w-full h-px bg-gradient-to-r from-zinc-400" />
            </div>

            <form>
              <div className="flex">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="flex-1 h-9 px-3 bg-zinc-50 rounded text-sm placeholder:text-zinc-500 placeholder:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="flex mt-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="flex-1 h-9 px-3 bg-zinc-50 rounded text-sm placeholder:text-zinc-500 placeholder:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <button
                className="w-full mt-3 flex items-center justify-center gap-2 h-8 px-4 text-sm text-blue-600 rounded"
                type="button"
              >
                Forgot my password
              </button>

              <button
                className="w-full mt-4 flex items-center justify-center gap-2 h-8 px-4 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                type="submit"
              >
                Sign In
              </button>
            </form>

            <a href="" className="block mt-8 text-sm text-blue-600 text-center">
              New to Eraser? Sign up for free.
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
