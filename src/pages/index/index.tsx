import DownloadList from "./components/download-list/index";
import OfferList from "./components/offer-list/index";
import { Divider } from "antd";
const Index: React.FC = () => {
  return (
    <div className="app-container">
      <h2>Offers</h2>
      <OfferList></OfferList>
      <Divider />
      <DownloadList />
    </div>
  );
};

export default Index;
