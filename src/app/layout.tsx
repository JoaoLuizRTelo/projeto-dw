"use client";
import "./globals.css";
import { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="pt-br">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-black text-white py-4 relative">
            {!isHomePage && (
              <div>
                <button
                  onClick={() => router.push("/")}
                  className="hidden absolute lg:left-4 lg:top-1/2 -translate-y-1/2 bg-white text-indigo-900 hover:bg-indigo-100 font-bold py-2 px-4 pl-2 rounded-full lg:flex items-center"
                >
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
            
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
                        fill="#312c85"
                      />
                    </svg>
                  </span>{" "}
                  Voltar
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="lg:hidden ml-3 bg-white text-indigo-900 hover:bg-indigo-100 font-bold py-2 px-2 rounded-full flex items-center"
                >
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
                        fill="#312c85"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            )}
            <div className="container text-center">
              <h1 className="text-4xl font-bold">Arcade de Jogos</h1>
              <p className="text-lg">
                Diversão garantida com jogos rápidos e interativos!
              </p>
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="bg-gray-800 text-white text-center py-4">
            <p>
              &copy; {new Date().getFullYear()} Arcade de Jogos. Todos os
              direitos reservados.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
