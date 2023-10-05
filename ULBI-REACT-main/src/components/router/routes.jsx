import About from '../../pages/about'
import Blogpage from '../../pages/Blogpage'
import Login from '../../pages/Login'
import NotFound from '../../pages/NotFound'
import PostPage from '../../pages/PostPage'
import SinglePage from '../../pages/singlePage'

export const PrivateRoutes = [
	{ path: 'about', component: About },
	{ path: 'postpage/:id', component: PostPage },
	{ path: 'singlepage', component: Blogpage },
	{ path: 'singlepage/:id', component: SinglePage },
	{ path: '*', component: NotFound },
]

export const PublicRoutes = [{ path: 'Login', component: Login }]
