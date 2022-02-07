import { IconAngular, IconApi, IconComponent, IconJava, IconPhp, IconProject, IconReact } from "svg";

const Card = ({ project }) => {
  const { name, tag, price, language } = project;
  const bgcolor = {
    react: 'bg-blue-300',
    java: 'bg-yellow-300',
    c: 'bg-purple-300',
    angular: 'bg-red-300',
    php: 'bg-indigo-300',
  };

  const TagIcons = {
    componente: <IconComponent/>,
    proyecto: <IconProject/>,
    api: <IconApi/>
  }

  const LanguageIcons = {
    react: <IconReact/>,
    java: <IconJava/>,
    c: <IconJava/>,
    angular: <IconAngular/>,
    php: <IconPhp/>,
  };

  return (
    <div className="rounded-lg drop-shadow-lg">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </a>

                <header className="flex items-start justify-between leading-tight p-2 md:p-4 text-left">
                  <div className="flex flex-col align-start justify-start">
                    <h3 className="text-lg">{name}</h3>
                    <div className="flex items-center gap-1">
                      {LanguageIcons[language]}
                      {TagIcons[tag]}
                    </div>
                  </div>
                            
                    <p className="text-gray-700 text-sm">
                        11/1/19
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p className="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <button className="text-gray-700 hover:text-red-700">
                        <ion-icon name="heart-outline"></ion-icon>
                    </button>
                </footer>

            </article>

        </div>
  );
};

export default Card;
