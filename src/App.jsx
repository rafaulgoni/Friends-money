import Table from "./components/table"
import Marquee from "react-fast-marquee";
import { Typewriter } from 'react-simple-typewriter'

function App() {
  const links = <>

    <li><a className={({ isActive }) => isActive ? ' font-bold border-b-4 p-2 border-[#ff1111]' : 'font-family'}> Home</a></li>
  </>
  return (
    <>
      <header className="container mx-auto">
        <div className=" container mx-auto">
          <div className="navbar fixed z-10 bg-opacity-30 bg-base-100 text-black container mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {links}
                </ul>
              </div>
              <img className="w-40" src={"https://i.ibb.co/dW3CTjb/friends-tv-logo-5-removebg-preview.png"} alt="" />
            </div>
            <div className="navbar-end gap-2">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
              </div>
              <button to="/login" className="btn btn-sm bg-[#ff1111] font-bold border-none">LogIn</button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto">
        <div>
          <img className="w-full h-[500px]" src={"https://i.ibb.co/swhVMkW/group.jpg"} alt="" />
        </div>
        <div className="mt-8">
          <div>
            <h1 style={{ margin: 'auto 0', fontWeight: '700' }}>
              {' '}
              <span style={{ color: 'rgb(255, 17, 17)', fontWeight: 'bold', fontSize: '3rem' }}>
                <Typewriter
                  words={['Please help us']}
                  loop={500}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
          <Marquee>
            <div>
              <p className="font-bold ">+88 01607-934556 Bkash personal Number --Rumon Khan</p>
              <p className="font-bold ">+88 01708-603860 Nogod personal Number --Jumon Mia</p>
            </div>
          </Marquee>
        </div>
        <div className="mt-8">
          <h1 className="text-center font-bold text-3xl"><samp className="text-[#ff1111]">~~</samp>Money counting<samp className="text-[#ff1111]">~~</samp></h1>
          <div className="mb-20" style={{
            "border-radius": "88px 88px 0px 0px"
            , "border-top": "2px solid var(--primary-700, #ff1111)"
          }}>
            <div className="pt-12">
              <Table />
            </div>
          </div>
        </div>
      </main>







      <footer>
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Friends Ltd</p>
          </aside>
        </footer>
      </footer>
    </>
  )
}

export default App
