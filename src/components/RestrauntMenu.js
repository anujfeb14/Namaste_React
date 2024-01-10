import useRestaurantMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

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
