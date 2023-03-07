import { FaTicketAlt, FaLightbulb, FaChartPie } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const tabs = [
  {
    title: "home",
    image: <FaChartPie className="fs-3" />,
  },
  {
    title: "services",
    image: <FaTicketAlt className="fs-3" />,
  },
  {
    title: "about Us",
    image: <FaLightbulb className="fs-3" />,
  },
  {
    title: "contact Us",
    image: <IoIosPeople className="fs-3" />,
  },
];
export default tabs;
