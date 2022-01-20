import Card from './Card';

function Cards({ projects }) {
  return (
    // <div className="flex flex-wrap items-center justify-center">
    <div className="cards">
      {projects.length > 0 &&
        projects.map((project, i) => <Card key={i} project={project} />)}
    </div>
  );
}

export default Cards;
