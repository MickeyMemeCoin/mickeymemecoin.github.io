import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="demo_main">
      {/* <!-- holly wood section --> */}
      {/* <section className="banner_section">
        <div className="email_div">
          <input type="text" placeholder="Enter Your Email Address" />
          <button>Get Started</button>
        </div>
      </section> */}

      {/* <!-- mickey section --> */}
      <section className="section2">
        <div className="section2_parentDiv">
          <div className="section2_firstChild">
            <div>
              <h1>$MICKEY</h1>
              <Image src="/images/coin.png" alt="Italian Trulli" />
            </div>
            <p>Introducing Mickey&apos;s Movie Meme Coin:</p>
            <p>Your Ultimate Entertainment Experience Utility Coin!</p>
          </div>
          <div className="section2_secondChild">
            <div className="section2_secondChild_firstSibling">
              <div className="mickey_box">
                <div className="mickey_box_innerdiv">
                  <h1>$MICKEY</h1>
                  <h6>BUY OUR $MICKEY (ERC-20) UTILITY COIN</h6>
                  <div className="micky_box_p_div">
                    <p>// Gain access to our Discord</p>
                    <p>// Be the first to claim benefits</p>
                  </div>

                  <div className="mickey_box_inputsdiv">
                    <a
                      href="https://app.uniswap.org/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0x7391a131ccb43a571a34e09f986080d117b4313c"
                      target="_blank"
                      rel="norefer"
                      type="button"
                      className="mickey_box_button text-center"
                    >
                      BUY $MICKEY
                    </a>
                    <input type="text" className="mickey_box_input" />
                  </div>
                </div>
              </div>
            </div>
            <div className="section2_secondChild_secondSibling">
              <Image src="/images/updatedMickey.png" alt="Mickey" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- public domain section  --> */}

      <section className="public_domain_sectiondiv">
        <div className="public_domain_imgdiv">
          <Image src="/images/mugImg.png" alt="Coffee Mug" />
        </div>
        <div className="public_domain_textdiv">
          <h1>Public Domain</h1>
          <p>
            The world&apos;s most iconic animation character, Mickey Mouse, is falling
            into the public domain 100 years after its creation.
          </p>
        </div>
      </section>

      {/* <!-- about popcorn section --> */}
      <section className="about_popcorn_sectiondiv">
        <div className="public_domain_textdiv">
          <h1>ABOUT</h1>
          <div className="about_popcorn_pdiv">
            <p className="about_sction_p">
              To celebrate, a fraternity of highly-experienced filmmakers, of over 50 feature films, in concert with accomplished web3 blockchain developers and marketeers, have launched the perfect meme coin with genuine real-world utility. Now, holders can participate in feature films, TV shows and many other forms of entertainment, simply by owning the token.
            </p>

            <p>
              Our mission is to deploy one of the most significant meme coins ever devised, to mimic the longevity and endurance of the character of Mickey Mouse, to maintain, grow and build solidity for its holders, whilst providing incredible movie, TV & entertainment utility.
            </p>
          </div>
        </div>
        <div className="about_popcorn_imgdiv">
          <Image src="/images/popCornImg.png" alt="Popcorn" />
        </div>
      </section>

      {/* <!-- qualify as extra sectoin --> */}

      <section className="qualify_section">
        <h1>Qualify as an Extra, for Speaking Parts and even Star Roles</h1>
        <p>
          This unique entertainment utility coin allows for its holders to
          actively participate in film, TV and entertainment projects that are
          either in production right now, in pre-production, or in planning for
          the near future. Next year alone we will make up to 10 feature films.
        </p>

        <div className="redBoxes_div">
          <div className="redBox">
            <div>
              <h4>
                Highlights include:
              </h4>
              <ul className="custom-ul">
                <li>
                  A movie in production now, in Miami.
                </li>
                <li>
                  A highly-innovative fast-paced thriller set in Dubai for early 2024.
                </li>
                <li>
                  A family & kids, faith-based, Christmas movie to be shot in the USA in winter.
                </li>
                <li>
                  One of our partners is a production company with a 33-year multi-award-winning history.
                </li>
                <li>
                  With a 100% distribution record.
                </li>

              </ul>
            </div>
          </div>


          <div className="redBox">
            <div>
              <h4>
                Forthcoming movies feature:
              </h4>
              <ul className="custom-ul">
                <li>
                  An award-winning scriptwriter.
                </li>
                <li>
                  An in-house film studio.
                </li>
                <li>
                  A queue of contacts lining-up to have their products featured in the movie.
                </li>
                <li>
                  A host of stars and influencers willing to be involved, and thus publicise & promote.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- video section
      <section className="qualify_section">
        <div className="video_section_div">
          <h1>One of our partners is called Posterity Entertainment and their showreel is here:</h1>
        </div>
        <div className="video_div">
          <video width="100%" height="100%" controls>
            <source src="https://player.vimeo.com/video/873859634" type="video/mp4">
              Your browser does not support the video tag.
          </video>
        </div>
      </section> --> */}

      {/* <!-- Forthcoming movies --> */}
      <section className="qualify_section">
        <div className="video_section_div">
          <h1>
            Forthcoming movies
          </h1>
          <p>
            One of our forthcoming movies for early 2024 is a high-octane, glossy, A-list cast, big budget crypto heist thriller set in Dubai. It’s perfect serendipity. The movie will feature the Mickey Meme Coin throughout and, when it is released globally next year, will act as a two-hour promotional advertisement for our token.
          </p>
        </div>
        <Image src="/images/airplane.png" alt="Airplane" className="airplane_img" />
      </section>


      {/* <!-- aim div --> */}

      <section className="aim_section">
        <div className="aim_div">
          <h1>AIM</h1>
          <p>
            We aim to launch one of the most long-lasting Meme Coins using this iconic character whilst providing incredible movie & entertainment utility.
          </p>
        </div>
        <div className="aim_points_div">
          <div className="aim_points_img">
            <Image src="/images/aimDivimg.png" alt="Mickey Steering the Ship" />
          </div>
          <div className="aim_div_points_parent_div">
            <div className="aim_single_div">
              <h1>Preserve value & Wealth</h1>
              <p>
                By launching with immediate benefits and then adding greater benefits over time, with more movie, TV and entertainment productions coming on stream globally, we aim to preserve value and generational wealth for all our token holders.
              </p>
            </div>
            <div className="aim_single_div">
              <h1>Win Speaking Movie Roles.</h1>
              <p>
                This unique entertainment utility coin allows for its holders to actively become involved in film and entertainment projects in production right now.
              </p>
            </div>
            <div className="aim_single_div">
              <h1>Movie Meme Winners</h1>
              <p>
                The 5 holders with the most $Mickey in two weeks’ time will win walk-on roles, speaking roles, film credits and other rewards and perks in “The Heckler”, which is currently in production in Miami, Florida.
              </p>
            </div>
          </div>
        </div>

      </section>


      {/* <!-- awards section --> */}

      <section className="awards_section">
        <h1>
          Our Awards
        </h1>
        <div className="awards_section_parent_div">
          <div className="awards_section_left_div">
            <h6>Participant companies’ awards to date include:</h6>
            <ul>
              <li>
                Winner Raindance (London)
              </li>
              <li>
                Winner BIFA (London)
              </li>
              <li>
                3x UK BAFTA awards.
              </li>
              <li>
                Won the Grand Prize at The Rhode Island Film Festival.
              </li>
              <li>
                ‘Best’ prizes at the LA and NYC Film Festivals.
              </li>
              <li>
                Won the Soho Film Festival.
              </li>
              <li>
                Winner NYC International Film Festival.
              </li>

            </ul>
          </div>
          <div className="awards_section_right_div">
            <Image src="/images/awards_mickey.png" alt="Steamboat Willie" />
          </div>
        </div>
      </section>


      {/* <!-- heckler movie production --> */}

      <section className="heckler_section">
        <div>
          <h1 >
            The Heckler Movie Production

          </h1>
          <p>
            <i>The Heckler</i> is an independent comedy and homage to stand-up comedians. It revolves around a character who goes off the rails, following a heart-breaking split, only to redeem himself through a number of comical situations and characters. The production is set for release in 2024 and has signed LOIs from influencers with a combined following of 20m+.
          </p>
        </div>
        <Image src="/images/hecklerframe.png" alt="Movie Equipment" />
      </section>

      {/* <!-- video section --> */}
      <section className="qualify_section">
        <div className="video_section_div">
          <h1>One of our partners is called Posterity Entertainment and their showreel is here:</h1>
        </div>
        <div className="video_div">
          <iframe className="vimeo-video" src="https://player.vimeo.com/video/879011096?h=de5474c6c4" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      {/* <!-- image gallery --> */}
      <section className="image-gallery-section">
        <h1 className="gallery-header">Example Previous & Current Productions</h1>
        {/* <!-- <a href="#home" className="more-details">Click here for more details</a> --> */}

        <div className="image-gallery-parent">
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage1.svg"
              alt="Image1"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage2.svg"
              alt="Image2"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage3.svg"
              alt="Image3"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage4.svg"
              alt="Image4"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage5.svg"
              alt="Image5"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage6.svg"
              alt="Image6"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage7.svg"
              alt="Image7"
              className="large-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage8.svg"
              alt="Image8"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage9.svg"
              alt="Image9"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage10.svg"
              alt="Image10"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage11.svg"
              alt="Image11"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage12.svg"
              alt="Image12"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage13.svg"
              alt="Image13"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage14.svg"
              alt="Image14"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage15.svg"
              alt="Image15"
              className="small-image"
            />
          </div>
          <div className="image-gallery-child">
            <Image
              src="/images/GalleryImage16.svg"
              alt="Image16"
              className="small-image"
            />
          </div>
        </div>
      </section>

      {/* <!-- discord section --> */}

      <section className="discord-section">
        <Image src="/images/Discord-updated.svg" alt="discord" />
        <div className="joinnow-section">
          <button type="button" className="joinnow-btn">Join Now</button>
          <Image src="/images/Join-Now-btn-svg.svg" alt="joinnow" className="joinnow-img" />
        </div>
      </section>

      {/* <!-- twitter section --> */}

      <section className="twitter-section">
        <Image src="/images/Twitterbg.svg" alt="Twitter" />
        <div className="joinnow-section">
          <div className="blue-bg">
            <button type="button" className="joinnow-btn">Follow Us</button>
          </div>
          <Image src="/images/Join-Now-btn-svg.svg" alt="joinnow" className="joinnow-img" />
        </div>
      </section>

      <section className="buycrypto">
        <div className="crypto_video_section_div">
          <h1 className="buycrypto-header">watch how to buy crypto</h1>
        </div>
        <div className="crypto_video_div">
          <div className="crypto-video">
            <iframe className="video" src="https://www.youtube.com/embed/OtoymxLYQYU?si=-jIwFYmRmcSlTOan" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="crypto-video">
            <iframe className="video" src="https://www.youtube.com/embed/q9uG6Ra-w54?si=Jv8n07hZcDXY-wk8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* <!-- powered by --> */}

      <section className="powered-by-section">
        <h1 className="poweredby-header">Powered By</h1>

        <div className="poweredby-parent">
          <div className="poweredby-child">
            <Image src="/images/poweredby1.svg" alt="poweredby1" />
          </div>
          <div className="poweredby-child">
            <Image src="/images/poweredby2.svg" alt="poweredby2" />
          </div>
          <div className="poweredby-child rimage">
            <Image src="/images/R_Image.png" alt="poweredby3" />
          </div>
        </div>
      </section>

      {/* <!-- contactus --> */}
      <section className="contact-us">
        <div className="contact-logo-section">
          <Image src="/images/BlackMickeyLogo.svg" alt="MickeyLogo" />
          <Image src="/images/MickeySmily.svg" alt="MickeyLogo" />
        </div>
        <h1 className="contact-header">
          Your Ultimate Entertainment Experience Utility
        </h1>
        <a className="contactus-btn" href="mailto:hello@micketmeme.com">Contact Us</a>
        <div className="social-icons">
          <Image src="/images/fb.svg" alt="fb-icon" />
          <Image src="/images/dc.svg" alt="discord-icon" />
          <Image src="/images/twitter.svg" alt="twitter-icon" />
          <Image src="/images/telegram.svg" alt="telegram-icon" />
          <Image src="/images/insta.svg" alt="insta-icon" />
        </div>
      </section>

      <section className="buyMickey-section-main">
        <div className="mickey-mouse-section">
          <Image
            src="/images/MickeyMouse.svg"
            alt="MickeyMouse"
            className="mickyMouse"
          />
        </div>
        <h1 className="buyMickey-header">
          $MICKEY <br />
          <span className="buyMickey-header-span">
            BUY OUR $MICKEY (ERC-20) <br />
            UTILITY COIN
          </span>
        </h1>
        <p className="buyMickey-text">
          Buy today, at launch, with more reveals later, including celebrity
          endorsements, adding more and more value, utility and demand, as we grow
          as a community and carefully and deftly increase and maintain the value
          of the Mickey token …
        </p>
        <div className="buyMickey-btn-section">
          <a
            href="https://app.uniswap.org/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0x7391a131ccb43a571a34e09f986080d117b4313c"
            target="_blank"
            rel="norefer"
            type="button"
            className="buyMickey-btn"
          >
            Buy $MICKEY
          </a>
          <a
            href="https://app.uniswap.org/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0x7391a131ccb43a571a34e09f986080d117b4313c"
            target="_blank"
            rel="norefer"
            type="button"
            className="buyMickey-btn2"
          >
            1
          </a>
        </div>
      </section>

      <section className="copyright">
        <p className="copyright-text">
          {/* Copyright 2023 M&G Reservations Group Ltd | All Rights Reserved */}
        </p>
      </section>
    </main>
  )
}
