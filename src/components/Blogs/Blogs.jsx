import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";
import PropTypes from 'prop-types';

const BlogData = [
    {
        id: 1,
        title: "How to choose perfect smartwatch",
        subtitle: "Um Bugatti Chiron, um dos veículos mais caros e desejados do mundo, foi visto rodando em São Paulo no último final de semana. A unidade foi importada pela Paíto Motors, uma importadora independente de veículos de luxo.",
        published: "Jan 20, 2024 by Dilshad",
        image: Img1,
        aosDelay: "0",
    },
    {
        id: 2,
        title: "How to choose perfect smartwatch",
        subtitle: "Um Bugatti Chiron, um dos veículos mais caros e desejados do mundo, foi visto rodando em São Paulo no último final de semana. A unidade foi importada pela Paíto Motors, uma importadora independente de veículos de luxo.",
        published: "Jan 20, 2024 by Dilshad",
        image: Img2,
        aosDelay: "200",
    },
    {
        id: 3,
        title: "How to choose perfect smartwatch",
        subtitle: "Um Bugatti Chiron, um dos veículos mais caros e desejados do mundo, foi visto rodando em São Paulo no último final de semana. A unidade foi importada pela Paíto Motors, uma importadora independente de veículos de luxo.",
        published: "Jan 20, 2024 by Dilshad",
        image: Img3,
        aosDelay: "400",
    },
];

const Blogs = () => {
  return (
    <div className="my-12">
        <div className="container">
            {/* Header section */}
            <Heading title={"Notícicas Recentes"}
                subtitle={"Explore nossos Blogs"}
            />

            {/* Clog section */}
            <div className="grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {/* Blog card */}
                {
                    BlogData.map((data) => (
                        <div data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id} className="bg-white dark:bg-gray-900" >
                            {/* image section */}
                            <div className="overflow-hidden rounded-2xl mb-2" >
                                <img src={data.image} alt=""
                                className="w-full h-[220px] object-cover rounded-2xl
                                    hover:scale-105 duration-500" />
                            </div>
                            {/* content section */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500" >{data.published}</p>
                                <p className="font-bold line-clamp-1">{data.title}</p>
                                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                                    {data.subtitle}
                                </p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

Blogs.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        published: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        aosDelay: PropTypes.string.isRequired,
      })
    ).isRequired,
};

export default Blogs;