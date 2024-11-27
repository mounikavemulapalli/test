import React from "react";
import "./SuperBanner.css";

function SuperBanner() {
  return (
    <div class="super-banner">
      <img
        id="superBannerSmallScreen"
        src="https://www.uptodd.com/images/newWebsite/great_indian_festival_mobile.webp"
        onerror="this.onerror=null; this.src='/images/newWebsite/great_indian_festival_mobile.png'"
        alt="Great Indian Parenting Festival Day Offer"
      />
      <img
        id="superBannerLargeScreen"
        src="https://www.uptodd.com/images/newWebsite/great_indian_festival_large_screen.webp"
        onerror="this.onerror=null; this.src='/images/newWebsite/great_indian_festival_large_screen.png'"
        alt="Great Indian Parenting Festival Day Offer"
      />
    </div>
  );
}

export default SuperBanner;
