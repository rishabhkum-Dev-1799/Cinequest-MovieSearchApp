import * as multiFilmActionCreators from "./multiFilmsActionCreator";
import * as singleFilmActionCreators from "./singleFilmsActionCreator";

export default{
    ...multiFilmActionCreators,
    ...singleFilmActionCreators
}