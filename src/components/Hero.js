const Hero = () => {
    return (
            <div class="card">
      <div id="myCarousel" class="carousel slide navbardrp" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/ltc.png" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />

          <div class="container">
            <div class="carousel-caption text-start">
                <div class="bg-custom-2">
                <h1>Purchase Crypto at Binance</h1>
                <p><div class="bkshadow"><i>Sign up for an account at Binance.com and you can be buying, selling and trading crypto instantly!</i></div></p>
                <p><a class="btn btn-lg btn-primary" href="https://www.binance.com/en" target="_blank">Sign up today</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="img/nft-1.png"  width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />

          <div class="container">
            <div class="carousel-caption text-start">
              <div class="bg-custom-2">
                <h1>NFT Investment</h1>
                <p><div class="bkshadow"><i>Have you heard of Non Fungible Tokens?  These are some of the hottest investments in crypto.  Read about it here on Coinbase.</i></div></p>
                <p><a class="btn btn-lg btn-primary" href="https://www.coinbase.com/learn/crypto-basics/how-to-buy-nft" target="_blank">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="img/btc.png" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />

          <div class="container">
            <div class="carousel-caption text-start">
              <div class="bg-custom-2">
              <h1>Coinbase</h1>
              <p><div class="bkshadow"><i>One of the world's most trusted and secure crypto purchasing sites.  Using Coinbase is the easiest way to acquire digital currency.</i></div></p>
              <p><a class="btn btn-lg btn-primary" href="http://coinbase.com" target="_blank">Buy Crypto</a></p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
            </div> 
    )
  };
  
  export default Hero;