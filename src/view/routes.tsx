const privateRoutes = [
  {
    path: "/",
    loader: () => import("../view/Home/Home"),
  },
].filter(Boolean);
const publicRoutes = [
  {
    path: "/auth/signup",
    loader: () => import("../view/Auth/SignupPage"),
  },
  {
    path: "/auth/signin",
    loader: () => import("../view/Auth/SigninPage"),
  },
 
];

const simpleRoutes = [ {
  path: '/403',
  loader: () =>
    import('../view/shared/errors/Error403Page'),
},
{
  path: '/500',
  loader: () =>
    import('../view/shared/errors/Error500Page'),
},
{
  path: '**',
  loader: () =>
    import('../view/shared/errors/Error404Page'),
},].filter(Boolean);
export default {
  privateRoutes,
  publicRoutes,
  simpleRoutes
};
