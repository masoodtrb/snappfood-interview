/* eslint-disable react-hooks/exhaustive-deps */
import {
  FunctionComponent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

interface VirtualizedListProps extends Pick<HTMLUListElement, "className"> {
  numItems: number;
  itemHeight: number;
  renderItem: (arg: {
    index: number;
    style: Record<string | number, string & {}>;
  }) => ReactElement;
  windowHeight: number;
}

const VirtualizedList: FunctionComponent<VirtualizedListProps> = ({
  numItems,
  itemHeight,
  renderItem,
  windowHeight,
  className
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const innerHeight = numItems * itemHeight;

  const startIndex = useMemo(
    () => Math.floor(scrollTop / itemHeight),
    [scrollTop, itemHeight]
  );
  const endIndex = useMemo(
    () =>
      Math.min(
        numItems - 1,
        Math.floor((scrollTop + windowHeight) / itemHeight)
      ),
    [numItems, scrollTop, windowHeight, itemHeight]
  );

  const items = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`
        }
      })
    );
  }

  const onScroll = useCallback(() => {
    setScrollTop(window.scrollY);
  }, [scrollTop]);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="vendor">
      <ul
        className={className}
        style={{ position: "relative", height: `${innerHeight}px` }}
      >
        {items}
      </ul>
    </div>
  );
};

export default VirtualizedList;
