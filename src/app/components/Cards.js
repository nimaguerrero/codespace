import Card from './Card';

function Cards({ projects }) {
  return (
    // <div className="grid-columns-[repeat(auto-fill,_minmax(min(100%,_22rem)))] gap-12 p-16 grid-flow-row-dense auto-rows-auto">
    <div className="cards">
      {projects.length > 0 &&
        projects.map((project, i) => <Card key={i} project={project} />)}
    </div>
  );
}

export default Cards;
