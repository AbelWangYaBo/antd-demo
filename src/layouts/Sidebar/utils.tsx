import React, { Suspense } from "react";
// TODO: only import need icons
import * as AntIcon from "@ant-design/icons/lib/icons";
import { Loading3QuartersOutlined, AppstoreOutlined } from "@ant-design/icons";
import { MENU_LIST } from "@/constants";

type MenuItem = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: "group";
  iconkey?: string;
};

const filterMenus = (menuItemList: MenuItem[]) => {
  menuItemList.forEach((item: MenuItem) => {
    if (item.children && item.children.length) {
      filterMenus(item.children);
    }
    let ICON = AppstoreOutlined;
    if (item.iconkey && (AntIcon as AnyObject)[item.iconkey]) {
      ICON = (AntIcon as AnyObject)[item.iconkey];
    }
    item.icon = ICON ? (
      <Suspense fallback={<Loading3QuartersOutlined />}>
        <ICON />
      </Suspense>
    ) : (
      ""
    );
  });
  return menuItemList;
};

filterMenus(MENU_LIST);
export { MENU_LIST as MENUS };
