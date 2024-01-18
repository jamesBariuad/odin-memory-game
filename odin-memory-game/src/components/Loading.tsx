const Loading = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden"></span>
      </div>
      <div>Loading Pokemons Please Wait...</div>
    </div>
  );
};

export default Loading;
