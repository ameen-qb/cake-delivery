import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <section>
          <div className="part1-home">
            <div className="content1">
              <h2 className="special" width="495px" height="160px">
                Special Mango cake
              </h2>
              <content className="content">
                A double layer chocolate cake base, lightly covered with a mango
                buttercream. Then topped with fresh mango slices.
              </content>
              <div>
                <button className="button">Order Now!</button>
              </div>
              <div className="customers">Our Happy Customers</div>
            </div>
            <div className="parent2">
              <img className="img1_1" src="cake1.png" />
              <img className="img1_2" src="img1_2.png" />
              <img className="img1_3" src="img1_3.png" />
            </div>
          </div>
        </section>

        <section className="part2">
          <div className="assortment">ASSORTMENT</div>
          <div className="different" width="558px" height="120px">
            Different Categories For Any Occasion
          </div>
          <nav className="cakes">
            <div className="bc">
              <img className="cakeimg" src="bc.png" />
              <div className="cake_type1">Birthday Cakes</div>
              <div className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <img className="arrow1" src="arrow1.png" />
            </div>

            <div className="ac">
              <img className="cakeimg" src="ac.png" />
              <div className="cake_type2">Anniversary Cakes</div>
              <div className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <img className="arrow1" src="arrow2.png" />
            </div>

            <div className="wc">
              <img className="cakeimg" src="wc.png" />
              <div className="cake_type3">Wedding Cakes</div>
              <div className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <img className="arrow1" src="arrow3.png" />
            </div>

            <div className="sc">
              <img className="cakeimg" src="sc.png" />
              <div className="cake_type4">Special Cakes</div>
              <div className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <img className="arrow1" src="arrow4.png" />
            </div>
          </nav>
        </section>

        <section className="part3">
          <div className="parent">
            <img src="img2_1.png" className="img2" />
            <img src="img2_2.png" className="img3" />
            <div className="rectangle"></div>
          </div>
          <div className="content3">
            <div className="cod">CAKE OF THE DAY</div>
            <div className="delightful">Delightful Donuts Cake</div>
            <div className="dollar">$15</div>
            <div className="donutsandcakes">
              Donuts and cakes are very much related but both have a distinct
              taste. Sometimes we get confused whether to go for a donut or a
              cake. With this Half Kg Cake, you can enjoy the light donuts and
              rich cake at the same time.
            </div>
            <button className="button">Order Now!</button>
          </div>
        </section>

        <section className="part4">
          <img src="img4.png" className="img4" />
          <div className="content4">
            <div className="nh">Need Help?</div>
            <div className="lorem2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </div>
            <button className="button">Contact Us</button>
          </div>
        </section>
      </div>
    </>
  );
}
