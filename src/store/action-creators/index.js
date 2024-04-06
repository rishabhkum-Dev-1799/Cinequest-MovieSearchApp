import * as multiFilmActionCreators from "./multiFilmsActionCreator";
import * as singleFilmActionCreators from "./singleFilmActionCreator";

export default{
    ...multiFilmActionCreators,
    ...singleFilmActionCreators
}