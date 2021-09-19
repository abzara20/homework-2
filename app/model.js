var MODEL = (function () {
  // here are the variables for the pages

  var _homePage = `<div class="home">
  <div class="home__child top">
    <div class="top__img-container"></div>

    <div class="top__text-container">
      <h1>Why, hello there Cupcake ;)</h1>
      <h6>Happy to see you!</h6>
    </div>
  </div>

  <div class="home__child bottom">
    <div class="bottom__header">
      <h2>Our Featured Bakes</h2>
      <hr />
    </div>
    <div class="bottom__featured">
      <div
        class="bottom__featured__item bottom__featured__item--cobbler"
      >
        <p>Peach Cobbler</p>
      </div>
      <div
        class="bottom__featured__item bottom__featured__item--donut"
      >
        <p>Artisan Donuts</p>
      </div>
      <div
        class="bottom__featured__item bottom__featured__item--puff"
      >
        <p>Peach Puff Pastry</p>
      </div>
    </div>
  </div>
</div>`;

  var _aboutPage = `<div class="about">
  <div class="header">
    <h1>ABOUT</h1>
    <!-- <img src="images/bakeery.jpg" alt="bakery image" /> -->
  </div>
  <div class="text">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
      obcaecati beatae optio voluptates? Aspernatur impedit sunt
      error, est consequatur iusto, omnis quas voluptas, excepturi
      repellendus temporibus sapiente libero ipsam nostrum.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Blanditiis quasi amet, quae libero alias adipisci quibusdam
      repudiandae sunt cupiditate quam esse culpa suscipit numquam
      vitae, totam repellendus non aspernatur expedita unde.
      Repellendus nisi ab saepe iure vitae, asperiores at sapiente
      voluptatum ipsum tempora soluta maxime, nesciunt illum? Odit
      quod, deleniti officia blanditiis provident ducimus officiis
      accusamus eius asperiores mollitia quia? Id, libero. Iste magni
      dicta debitis perferendis nisi. Quas nulla est quisquam delectus
      sapiente reiciendis culpa magni! Aspernatur eveniet, vero
      ducimus ipsam modi accusantium laboriosam. Fugit assumenda sequi
      necessitatibus amet dicta quidem quisquam? Eligendi ipsa esse,
      fugit aperiam accusantium optio.
    </p>
  </div>
</div>`;

  var _contactPage = ` <div class="contact">
  <div class="header">
    <h1>CONTACT</h1>
  </div>
  <div class="contact__container contact__container--map">
    <h2>Our Location</h2>

    <img src="images/map.jpg" alt="map" />
  </div>

  <div class="contact__container">
    <h3>Address:</h3>
    <p>6363 W Ohio St</p>
  </div>

  <div class="contact__container">
    <h3>Email:</h3>
    <p>contact@peachpuffpastry.com</p>
  </div>
  <div class="contact__container">
    <h3>Phone:</h3>
    <p>(317)123-4567</p>
  </div>
</div>`;

  var _productsPage = `
  <div class="products">
            <div class="header">
              <h1>PRODUCTS</h1>
            </div>
            <div class="products__container">
              <div class="products__container__item">
                <div class="image-container image-container--bun"></div>
                <div class="text-container">
                  <div class="text-container__name">Bunuelos</div>
                  <div class="text-container__desc">
                    This sweet treat is made from a fried tortilla that is
                    sprinkled with sugar and cinnamon, crunchy and delicious!
                  </div>
                </div>
              </div>

              <div class="products__container__item">
                <div class="image-container image-container--cupcake"></div>
                <div class="text-container">
                  <div class="text-container__name">Cupcakes</div>
                  <div class="text-container__desc">
                    Artistic and tasty cupcakes of all flavors and designs, we
                    also accept custom orders for this product
                  </div>
                </div>
              </div>

              <div class="products__container__item">
                <div class="image-container image-container--cookie"></div>
                <div class="text-container">
                  <div class="text-container__name">Cookies</div>
                  <div class="text-container__desc">
                    A product that needs no description, we have all kinds of
                    types of cookies baked fresh daily!
                  </div>
                </div>
              </div>

              <div class="products__container__item">
                <div class="image-container image-container--cobbler"></div>
                <div class="text-container">
                  <div class="text-container__name">Peach Cobbler</div>
                  <div class="text-container__desc">
                    One of our featured products, our sweet and delicious peach
                    cobbler is a very popular product here at Peach Puff
                    Pastries
                  </div>
                </div>
              </div>

              <div class="products__container__item">
                <div class="image-container image-container--puff"></div>
                <div class="text-container">
                  <div class="text-container__name">Peach Puff Pastry</div>
                  <div class="text-container__desc">
                    Our namesake product, these peach puff pastries are light
                    and flaky, and very addicting.
                  </div>
                </div>
              </div>

              <div class="products__container__item">
                <div class="image-container image-container--tiramisu"></div>
                <div class="text-container">
                  <div class="text-container__name">Tiramisu</div>
                  <div class="text-container__desc">
                    Made with lady fingers baked in house, this tiramisu cake
                    has a very lovable bittersweet flavor
                  </div>
                </div>
              </div>
            </div>
          </div>`;

  var _getPageInfo = function (btn) {
    let pageName = "_" + btn + "Page";
    $("#content").html(eval(pageName));
  };

  return {
    getPageInfo: _getPageInfo,
  };
})();
