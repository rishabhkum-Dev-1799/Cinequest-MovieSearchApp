import * as multiFilmActionCreators from "./multiFilmsActionCreator";
import * as singleFilmActionCreators from "./singleFilmsActionCreator";
import * as authenticationActionCreators from "./authenticationActionsCreator";
import * as watchListActionCreators from "./watchListActionsCreator";

export default{
    ...multiFilmActionCreators,
    ...singleFilmActionCreators,
    ...authenticationActionCreators,
    ...watchListActionCreators
}