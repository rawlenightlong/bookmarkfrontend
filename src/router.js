import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import { createAction, updateAction, deleteAction } from "./actions"
import App from "./App"
import Index from "./pages/index"
import Show from "./pages/Show"
import { bookmarkLoader, bookmarksLoader } from "./loaders"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element= {<App/>}>
            <Route path="" element={<Index/>} loader={bookmarksLoader}/>
            <Route path=":id" element={<Show/>} loader={bookmarkLoader}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    )
)

export default router