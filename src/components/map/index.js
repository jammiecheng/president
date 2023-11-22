import { useContext } from "react";
import ReactSvgZoomMap from "react-svg-zoom-map";
import { locationContext } from "../../App";

export default function Map() {
  const { area, setArea } = useContext(locationContext);

  return (
    <div className="mt-[var(--spacing-4)] rounded-[var(--spacing-4)] bg-[var(--color-primary-1)] p-[var(--spacing-7)] hidden xl:block">
      <ReactSvgZoomMap
        countyJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-county.json"
        townJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-town.json"
        villageJsonSrc="https://cybermumu.github.io/react-svg-zoom-map/example/topojsons/taiwan-village.json"
        county={area[0]}
        town={area[1]}
        village={area[2]}
        onAreaClick={(newArea, e) => setArea(newArea)}
        // onPinClick={console.log}
        // pins={[
        //   {
        //     id: 1,
        //     title: "台北101",
        //     county: "臺北市",
        //     town: "信義區",
        //     village: "西村里",
        //     location: [25.034, 121.56467],
        //   },
        //   {
        //     id: 2,
        //     title: "台灣最南點",
        //     county: "屏東縣",
        //     town: "恆春鎮",
        //     village: "鵝鑾里",
        //     location: [21.89775, 120.857921],
        //   },
        //   {
        //     id: 3,
        //     title: "貓鼻頭燈塔",
        //     county: "新北市",
        //     town: "瑞芳區",
        //     village: "鼻頭里",
        //     location: [25.129217, 121.923449],
        //   },
        // ]}
      />
    </div>
  );
}
