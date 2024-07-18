import Button from '../Shared/Button';
import PropTypes from 'prop-types';

const ProductCard = ({ data }) => {

    const handleClick = () => {
        // Implementar a lógica de clique aqui
      };

  return (
    <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            gap-5 place-items-center">
            {/* card section */}
            { data.map((data) => (
                    <div data-aos="fade-up"
                        data-aos-delay={data.aosDelay} 
                        className="group" key={data.id}>
                        <div className="relative">
                            <img src={data.img} 
                                alt="" 
                                className="h-[180px] w-[260px] object-cover
                                rounded-md" 
                            />
                            {/* hover button */}
                            <div className="hidden group-hover:flex absolute 
                                top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
                                h-full w-full text-center group-hover:backdrop-blur-sm 
                                justify-center items-center duration-200">
                                <Button 
                                    text={"Add ao Carrinho"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                    handler={handleClick}
                                 />
                            </div>
                        </div>
                        <div className="leading-7">
                            <h2 className="font-semibold">{data.title}</h2>
                            <h2 className="font-bold">{data.price}</h2>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  );
};

ProductCard.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        aosDelay: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ProductCard;