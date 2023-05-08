function Welcome({changePage}) {
  const enterShop = () => {
    changePage('shop');
  }
  const enterGallery = () => {
    changePage('gallery');
  }
  return (
    <div className="login">
      <h1 className="login__header">Welcome to Art Offishal!</h1>
      <h2 className="login__text">Are you interested in:</h2>
      <div className="login__buttons">
        <button className="login__button" onClick={enterShop}>Buying Art</button>
        <button className="login__button" onClick={enterGallery}>Viewing/Downloading Art</button>
      </div>
    </div>
  )
}

export default Welcome;