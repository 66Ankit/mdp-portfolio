<div className="hero-image">
  <h1>Our Proud Team</h1>
  <div className="upper-image">
    <img src={img1} alt="img1" />
  </div>
  <div className="lower-image">
    <img src={img2} alt="img2" />
    <img src={img3} alt="img3" />
  </div>
</div>;


.hero-image{
    display: flex;
    flex-direction: column;
    /* background-color: antiquewhite; */
    width: 50%;
    justify-content: center;
    align-items: center;
}

.lower-image{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.hero-image h1{
    color: rgb(187,
                173,
                146);
}