import style from './Navbar.module.css';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa"
import DarkMode from './DarkMode';

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Comprar",
    link: "/#shop",
  },
  {
    id: 3,
    name: "Sobre",
    link: "#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "#blogs",
  },
]

const DropdownLinks = [
  {
    id: 1,
    name: "Produtos em alta",
    link: "/#",
  },
  {
    id: 2,
    name: "Mais vendido",
    link: "/#",
  },
  {
    id: 3,
    name: "Mais votado",
    link: "#",
  }
]

const Navbar = () => {
  return (
    <div className="bg-white
    dark:bg-gray-900 
    dark:text-white
      duration-250
      relative z-40">
        <div className='py-4'>
            <div className={style.navbarContainer}>
              <div className={style.navbarLogoLinkSection}>
                <a href="#" className={style.navbarLogo}>ESHOP</a>
                <div className={style.navbarMenuItems}>
                  <ul className={style.navbarListItems}>
                    {
                      MenuLinks.map((data, index) => (
                        <li key={index}>
                          <a href={data.link} className="inline-block px-4 font-semibold 
                            text-gray-500 hover:text-black
                            dark:hover:text-white duration-200"> 
                            {data.name} 
                          </a>
                        </li>
                      ))
                    }
                    {/* Dropdwon */}
                      <li className="relative cursor-pointer group">
                        <a href="#" className="flex items-center gap-[2px]
                          font-semibold text-gray-500 dark:hover:text-white py-2">
                          Links Rápidos
                          <span>
                            <FaCaretDown className="group-hover:rotate-180 
                              duration-300" />
                          </span>
                        </a>
                      {/* dropdown links */}
                      <div className="absolute z-[9999] hidden
                        group-hover:block w-[200px] rounded-md
                        bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                        <ul className="space-y-2">
                          {
                            DropdownLinks.map((data, index) => (
                              <li key={index}>
                                <a className="text-gray-500 dark:hover:text-white 
                                  duration-200 inline-block w-full p-2 
                                  hover:bg-primary/20 rounded-md font-semibold"
                                  href={data.link}>
                                  {data.name}
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                      </div>

                      </li>
                  </ul>
                </div>
              </div>
              <div className={style.navbarRightSection}>
                <div className="relative group hidden sm:block">
                  <input 
                    type="text" 
                    placeholder='Pesquisar' 
                    className="search-bar"
                    />
                    <IoMdSearch className={style.navbarSearchIcon} /> 
                </div>
                <button className={style.orderbuttonSection}>
                  <FaCartShopping className={style.buttonSectionIcon} />
                  <div className="w-4 h-4 bg-red-500 text-white
                      rounded-full absolute top-0 right-0 flex 
                      items-center justify-center text-xs;">4</div>
                </button>

                <div>
                  <DarkMode />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;