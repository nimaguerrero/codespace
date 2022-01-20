const Card = ({ project }) => {
  const { name, tag, price, language } = project;

  const miscolores = {
    react: '#3B86F2',
    java: '#F49C2B',
    // c: '#626BEC',
    c: '#7D2ECA',
    angular: '#ED4347',
    php: '#51618A',
  };

  const fillcolor = {
    react: '#6da3fb',
    java: '#f3c06b',
    c: '#a17cf3',
    angular: '#d3d3d3',
    php: '#8494BD',
  };

  const icons = {
    react: 'assets/icons/react.png',
    java: 'assets/icons/java.png',
    c: 'assets/icons/c.png',
    angular: 'assets/icons/angular.png',
    php: 'assets/icons/php.png',
  };

  return (
    <div
      className="text-left relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      style={{ backgroundColor: miscolores[language] }}
    >
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
      >
        <rect
          x="159.52"
          y={175}
          width={152}
          height={152}
          rx={8}
          transform="rotate(-45 159.52 175)"
          fill={fillcolor[language]}
        ></rect>
        <rect
          y="107.48"
          width={152}
          height={152}
          rx={8}
          transform="rotate(-45 0 107.48)"
          fill={fillcolor[language]}
        ></rect>
      </svg>

      <img
        alt="moto"
        src={icons[language]}
        className="absolute inset-y-0 right-0 mr-2 h-10 w-10"
      />

      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
        <picture>
          <source srcSet="https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <source srcSet="https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img
            className="relative w-60 h-40 object-cover"
            src="https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="shopping item"
          />
        </picture>
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{tag}</span>
        <div className="flex justify-between">
          <span className="font-semibold text-xl truncate">{name}</span>
          <span
            className="bg-white rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center"
            style={{ color: miscolores[language] }}
          >
            ${price}.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
