import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { routes } from './routes/index'

const Blogs = lazy(() => import('./containers/Blogs/index'))
const BlogDetail = lazy(() => import('./containers/BlogDetail/index'))

const RedirectToBlogs = () => <Redirect to={routes.BLOGS} />

const Routes = () => {
  return (
    <Suspense fallback={<div className="spinner-border" />}>
      <Router>
        <Switch>
          <Route exact path={routes.HOME} component={RedirectToBlogs} />
          <Route exact path={routes.BLOGS} component={Blogs} />
          <Route exact path={routes.BLOG_DETAIL} component={BlogDetail} />
          <Route path="*" component={RedirectToBlogs} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Routes
