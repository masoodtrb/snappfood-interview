import React, { useEffect, useState } from "react";
import { useGetVendorQuery } from "./vendorApi";
import VendorCard from "./VendorCard";
import { VendorData } from "./vendorType";

import "./Vendor.scss";

interface Props {}

function Vendor(props: Props) {
  const [page, setPage] = useState(0);

  const { data, isLoading, isSuccess, isFetching } = useGetVendorQuery({
    page,
    page_size: 10
  });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <div className="vendor">
      {!isLoading && isSuccess && (
        <ul className="vendor__list">
          {data.map(
            (item) =>
              item.type === "VENDOR" && (
                <li key={(item.data as VendorData).id} className="vendor__item">
                  <VendorCard data={item.data as VendorData} />
                </li>
              )
          )}
        </ul>
      )}
      {isLoading && <p>در حال بارگزاری</p>}
    </div>
  );
}

export default Vendor;
