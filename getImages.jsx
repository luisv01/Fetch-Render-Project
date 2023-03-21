function App() {
  const { Container } = ReactBootstrap;
  const { useState, useEffect } = React;

  console.log('Rendering App');

  function refreshPage() {
    window.location.reload(false);
  }

  function random() {
    let num = Math.floor(Math.random() * 123);
    return num;
  }

  function images() {
    let url = 'https://randomfox.ca/images/';
    const a = [];
    for (let index = 0; index < 10; index++) {
      a.push(`${url}${random()}.jpg`);
    }
    return a;
  }

  const imgs = images();
  const imgs2 = images();

  return (
    <div className="container text-center">
      <button onClick={refreshPage} className="btn btn-primary">
        get more images
      </button>
      <div className="row">
        <div className="col">
          {imgs.map((item) => (
            <img
              className="img-thumbnail"
              src={item}
              width="400"
              height="400"
            ></img>
          ))}
        </div>
        <div className="col">
          {imgs2.map((item) => (
            <img
              className="img-thumbnail"
              src={item}
              width="400"
              height="400"
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
