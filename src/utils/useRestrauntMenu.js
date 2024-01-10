import {useState, useEffect} from "react"

const useRestaurantMenu = (resId) =>{
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
    return resInfo;
}

export default useRestaurantMenu;