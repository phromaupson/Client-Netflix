import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                 Home
            </div>
        <video
        className="video"
        autoPlay
        progress
        controls
        src="https://nungkub.com/images/banners/K4LA4HjIhz1Uk3FBypj27UH1SRgJDqbtrim.C9F6B61C-2712-4056-B3C6-278128875269.MOV"
        />
      </div>
    );
}
