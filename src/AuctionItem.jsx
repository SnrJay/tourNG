function AuctionItem() {
  return (
    <li className="auction-item">
      <div>
        <a className="hero" href="">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="bid-details">
            <div className="time"></div>
            <div className="value"></div>
          </div>
        </a>
      </div>
      <div>
        <h3>YEAR-MAKE-MODEL-SPEC</h3>
        <p>some important details about the car</p>
        <p>LOCATION</p>
      </div>
    </li>
  );
}

export default AuctionItem;
