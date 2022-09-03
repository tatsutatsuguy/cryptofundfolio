import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbardrp navbar navbar-expand-md bg-custom-1 sticky-top">
      <div class="container-fluid custext">
        <a class="navbar-brand" href="/"><img src="img/bitcoinLogo.png" alt="logo" height="28" width="28" />CryptoFundFolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/#learnmore">Learn More</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#invest">Invest</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#subscribe">Subscribe</a>
            </li>
          </ul>
          <span class="navbar-text">
          <Link to="/Search">Search Crypto Markets</Link>
          </span>
        </div>
      </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;
