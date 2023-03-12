import React, { useEffect, useState } from "react";

import { useGetVendorQuery } from "./vendorApi";
import VendorCard from "./VendorCard";
import { VendorData } from "./vendorType";
import VirtualizedList from "features/VirtualizedList";

import "./Vendor.scss";

function Vendor() {
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
    <>
      {!isLoading && isSuccess && (
        <VirtualizedList
          className="vendor__list"
          itemHeight={264}
          windowHeight={1325}
          numItems={data.filter((item) => item.type === "VENDOR").length}
          renderItem={({ index, style }) => {
            const item = data.filter((item) => item.type === "VENDOR")[index];
            return (
              <li
                key={(item.data as VendorData).id}
                className="vendor__item"
                style={style}
              >
                <VendorCard data={item.data as VendorData} />
              </li>
            );
          }}
        />
      )}
      {isLoading && <p>در حال بارگزاری</p>}
    </>
  );
}

export default Vendor;
