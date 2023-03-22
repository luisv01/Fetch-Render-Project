const Image = () => {
  const { useState } = React;
  const [numOfImages, setNumOfImages] = useState(0);

  const handleSubmit = (event) => {
    setNumOfImages(numOfImages);
    event.preventDefault();
  };

  const maxImageHandle = (event) => {
    setNumOfImages(Number(event.target.value));
  };

  console.log(`nuOfImages: ${numOfImages}`);
  console.log(`from handleSubmit: ${numOfImages}`);
  const imageUrls = (numOfImages) => {
    const url = 'https://randomfox.ca/images/';
    return Array(numOfImages)
      .fill(url)
      .map((item, index) => `${item}${index + 1}.jpg`);
  };

  return (
    <div className="col">
      <form onSubmit={handleSubmit}>
        <label className="display-4">Enter the number of fox images you want to see (Max 123)</label>
        <br/>
        <input
          className="input-group input-group-lg"
          type="number"
          placeholder="Max Number of Images"
          min="0"
          max="123"
          onChange={maxImageHandle}
        ></input>
      </form>
      {imageUrls(numOfImages).map((item) => (
        <img
          key={item}
          className="img-thumbnail"
          src={item}
          width="600"
          height="400"
        ></img>
      ))}
    </div>
  );
};

function App() {
  const { Fragment, useState } = React;

  console.log('Rendering App');

  return (
    <Fragment>
      <div className="container text-center">
        <div className="row">
          <Image  />
        </div>
      </div>
    </Fragment>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
