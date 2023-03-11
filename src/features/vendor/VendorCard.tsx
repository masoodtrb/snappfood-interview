import React from "react";
import PartyIcon from "./PartyIcon";
import { VendorData } from "./vendorType";

interface Props {
  data: VendorData;
}

function VendorCard({ data }: Props) {
  return (
    <div className="vendor-card">
      <div className="vendor-card__top">
        <img
          className="vendor-card__cover"
          src={data.backgroundImage}
          alt={data.title}
        />
        <img
          className="vendor-card__logo"
          src={data.defLogo}
          alt={data.title}
        />
        {data.best_coupon && (
          <p className="vendor-card__best_coupon">{data.best_coupon}</p>
        )}
      </div>
      <div className="vendor-card__bottom">
        <div className="vendor-card__bottom__item vendor-card__bottom__item--right">
          <p className="vendor-card__title">
            <span>{data.title}</span>
            &nbsp;
            {data.discountValueForView > 0 && (
              <span>تا {data.discountValueForView}٪</span>
            )}
            &nbsp;
            {data.is_food_party && (
              <span className="vendor-card__isParty">
                <PartyIcon />
              </span>
            )}
          </p>
          <p className="vendor-card__description">{data.description}</p>
          <p className="vendor-card__delivery_type">
            <span>{data.isZFExpress ? "ارسال اکسپرس" : "ارسال فروشنده"}:</span>
            &nbsp;
            <span>{data.deliveryFee} تومان</span>
          </p>
        </div>
        <div className="vendor-card__bottom__item vendor-card__bottom__item--left">
          <div className="vendor-card__rate">
            <span>{data.rate}</span>&nbsp;
            <span>{`(${data.voteCount})`}</span>
          </div>
          {data.eta > -1 && (
            <div className="vendor-card__eta">تا {data.eta} دفیفه</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VendorCard;
