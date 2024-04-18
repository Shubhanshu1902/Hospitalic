import Report from "./Report";
import Msgbox from "./Msgbox";
import { DicomLoader } from "./DicomLoader";

const ReportContainer = (props) => {
    return (
        <div className="reportCont">
            <DicomLoader viewerProps = {props.viewerProps}/>
            <Msgbox controllers= {props.controllers} reportProps = {props.reportProps}/>
        </div>
    );
}

export default ReportContainer;