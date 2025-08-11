import userSeed from "./seed.route.js";
const routes = [
  {
    path: "/api/seed/users",
    handler: userSeed,
  },
];

const setAllRoute = (app) => {
  routes.forEach((r) => {
    if (r.path === "/") {
      app.get(r.path, r.handler);
    } else {
      app.use(r.path, r.handler);
    }
  });
};

export default setAllRoute;
