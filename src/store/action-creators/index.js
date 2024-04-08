import * as multiFilmActionCreators from "./multiFilmsActionCreator";
import * as singleFilmActionCreators from "./singleFilmsActionCreator";
import * as authenticationActionCreators from "./authenticationActionsCreator";

export default{
    ...multiFilmActionCreators,
    ...singleFilmActionCreators,
    ...authenticationActionCreators
}