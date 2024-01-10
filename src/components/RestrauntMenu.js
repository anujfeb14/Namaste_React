import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const [resInfo, SetResInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/bangalore/kfc-koramangala-6th-block/order&location=&isMobile=0"
    );
    const response = await data.json();
    SetResInfo(response);
  };

  if (resInfo.length === 0) return <Shimmer />;

  const { menus } = resInfo?.page_data?.order?.menuList;
  return (
    <div className="menu">
      <h1>{resInfo?.page_data?.sections?.SECTION_BASIC_INFO?.name}</h1>
      <h4>
        {resInfo?.page_data?.sections?.SECTION_BASIC_INFO?.cuisine_string}
      </h4>
      <h2>Menu</h2>
      <ul>
        {menus.map((menuItem) => (
          <li key={menuItem.menu.id}>{menuItem.menu.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
