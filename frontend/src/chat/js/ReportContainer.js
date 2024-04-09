import Report from "./Report";
import Msgbox from "./Msgbox";
import { DicomLoader } from "./DicomLoader";

const ReportContainer = () => {
    return (
        <div className="reportCont">
            <DicomLoader />
            <Msgbox />
        </div>
    );
}

export default ReportContainer;