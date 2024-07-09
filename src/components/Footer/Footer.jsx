import { FaInstagram, FaLocationArrow, FaMobileAlt, FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
    
]

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* Detalhes da Companhia */}
                <div className="py-8 px-4">
                    <a 
                        href="#"
                        className="text-primary font-semibold
                            tracking-widest text-2xl uppercase sm:text-3xl">
                        ESHOP
                    </a>
                    <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum.  
                    </p>
                    <p className="text-gray-500 mt-4">
                        Feito por Pedro Cezar
                    </p>
                    <a href="https://meu-portifolio-lime.vercel.app/"
                        target='_black'
                        className="inline-block bg-primary/90 text-white
                            py-2 px-4 mt-4 text-sm rounded-full">
                        Visite meu Potifólio
                    </a>
                </div>
                {/* Footer |Links */}
                <div className="col-span-2 grid grid-cols-2 
                    sm:grid-cols-3 md:pl-10">
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold sm:text-left mb-3">
                            Links Importantes
                        </h1>
                        <ul className="space-y-3">
                           {
                            FooterLinks.map((data, index) => (
                                <li key={index} >
                                    <a href={data.link}
                                    className="text-gray-600 hover:text-black dark:text-gray-400
                                        hover:dark:text-white duration-300">
                                        {data.title}
                                    </a>
                                </li>
                            ))
                           } 
                        </ul>
                    </div>
                    {/* links da segunda coluna */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold sm:text-left mb-3">
                            Links Rápidos
                        </h1>
                        <ul className="space-y-3">
                           {
                            FooterLinks.map((data, index) => (
                                <li key={index} >
                                    <a href={data.link}
                                    className="text-gray-600 hover:text-black dark:text-gray-400
                                        hover:dark:text-white duration-300">
                                        {data.title}
                                    </a>
                                </li>
                            ))
                           } 
                        </ul>
                    </div>

                    {/* Endereço da companhia */}
                    <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className="text-xl font-bold sm:text-left mb-3">
                            Links Contato
                        </h1>
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Marco zero, Recife/PE</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt />
                                <p>81 985964761</p>
                            </div>
                            {/* Links sociais */}
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaInstagram className="text-3xl
                                        hover:text-primary duration-200"/>
                                </a>
                                <a href="#">
                                    <FaWhatsapp className="text-3xl
                                        hover:text-primary duration-200"/>
                                </a>
                                <a href="#">
                                    <FaLinkedinIn className="text-3xl
                                        hover:text-primary duration-200"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer