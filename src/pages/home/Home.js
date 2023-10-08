import "./Home.css";
import cake1 from "../../images/cake1.png";
import img1_2 from "../../images/img1_2.png";
import img1_3 from "../../images/img1_3.png";
import bc from "../../images/bc.png";
import arrow1 from "../../images/arrow1.png";
import ac from "../../images/ac.png";
import arrow2 from "../../images/arrow2.png";
import wc from "../../images/wc.png";
import arrow3 from "../../images/arrow3.png";
import sc from "../../images/sc.png";
import arrow4 from "../../images/arrow4.png";
import img2_1 from "../../images/img2_1.png";
import img2_2 from "../../images/img2_2.png";
import img4 from "../../images/img4.png";
import bg1 from "../../images/bg1.png";

export default function Home() {
  return (
    <>
      {/* <div>
        <img src={bg1} className="bgimg" />
      </div> */}
      <div className="wrapper">
        <section>
          <div className="part1-home">
            <div className="content1">
              <h2 className="special" width="495px" height="160px">
                Special Mango cake
              </h2>
              <content className="content-home">
                A double layer chocolate cake base, lightly covered with a mango
                buttercream. Then topped with fresh mango slices.
              </content>
              <div>
                <button className="button">Order Now!</button>
              </div>
              <div className="customers">Our Happy Customers</div>
            </div>
            <div className="parent2">
              <img className="img1_1" src={cake1} />
              <img className="img1_2" src={img1_2} />
              <img className="img1_3" src={img1_3} />
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
              <img className="cakeimg" src={bc} />
              <div className="cake_type1">Birthday Cakes</div>
              <div className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <img className="arrow1" src={arrow1} />
            </div>

            <div className="ac">
              <img className="cakeimg" src={ac} />
              <div className="cake_type2">Anniversary Cakes</div>
              <div className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <img className="arrow1" src={arrow2} />
            </div>

            <div className="wc">
              <img className="cakeimg" src={wc} />
              <div className="cake_type3">Wedding Cakes</div>
              <div className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <img className="arrow1" src={arrow3} />
            </div>

            <div className="sc">
              <img className="cakeimg" src={sc} />
              <div className="cake_type4">Special Cakes</div>
              <div className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <img className="arrow1" src={arrow4} />
            </div>
          </nav>
        </section>

        <section className="part3">
          <div className="parent">
            <img className="img2-home" src={img2_1} />
            <img className="img3-home" src={img2_2} />
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
          <img className="img4-home" src={img4} />
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
