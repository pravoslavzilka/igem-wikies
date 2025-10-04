import RegenerationAssayPoster from "./RegenerationAssayPoster";
import TAIFRComponent from "./TAIFRComponent";

import References from "../../../../components/References";
import { taifrReferences } from './references'



const TaifrMain = () => {
    return (
        <div>
            <TAIFRComponent />
            <RegenerationAssayPoster />

            <References references={taifrReferences} />

        </div>


    );


}


export default TaifrMain;