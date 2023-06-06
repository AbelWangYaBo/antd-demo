import { useLocation, useMatches } from "react-router-dom";
import { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
const BreadCrumb = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemType[]>([]);
  const location = useLocation();
  const matches = useMatches();
  useEffect(() => {
    const items = matches
      .map((m) => {
        const { title, href } = (m.handle || {}) as {
          title: string;
          href?: string;
        };
        return {
          title,
          href: href == location.pathname ? undefined : href,
        };
      })
      .filter((m) => m.title);
    if (items.length) {
      document.title = `${items[items.length - 1].title}-MMIOMS`;
    } else {
      document.title = `MMIOMS`;
    }
    setBreadcrumbs(items);
  }, [location.pathname, matches]);
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <Breadcrumb items={breadcrumbs} />
    </div>
  );
};

export default BreadCrumb;
