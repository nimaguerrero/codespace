function CarouselProject() {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to={1}
          aria-label="Slide 1"
        />
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to={2}
          aria-label="Slide 1"
        />
      </div>
      {/* Inner */}
      <div className="carousel-inner relative w-full overflow-hidden">
        {/* Single item */}
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://images.pexels.com/photos/4889055/pexels-photo-4889055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="block w-full"
            alt="Motorbike Smoke"
          />
        </div>
        {/* Single item */}
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://images.pexels.com/photos/10832155/pexels-photo-10832155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="block w-full"
            alt="Mountaintop"
          />
        </div>
        {/* Single item */}
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://images.pexels.com/photos/10832155/pexels-photo-10832155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="block w-full"
            alt="Woman Reading a Book"
          />
        </div>
      </div>
      {/* Inner */}
      {/* Controls */}
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselProject;
