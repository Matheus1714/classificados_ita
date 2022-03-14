import { Switch , Route } from "react-router-dom";

import { HOME } from 'navigation/constants'
import Home from '../pages/Home'
import { NotFound } from "./NotFound";

export const RouterConfig = () => {
    return (
        <Switch>
            <Route exact path={HOME} component={Home}/>
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default RouterConfig