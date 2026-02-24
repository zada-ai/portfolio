import { type RouteConfig, route } from "@react-router/dev/routes";

export default [

route("/", "./routes/home.tsx"),
route("/about", "./routes/about.tsx"),
route("/skills", "./routes/skills.tsx"),
route("/projects", "./routes/projects.tsx"),
route("/contact", "./routes/contact.tsx"),

// project detail pages under /projects
route("/projects/wordpress", "./projects/wordpress.tsx"),
route("/projects/fullstack", "./projects/fullstack.tsx"),
route("/projects/figma", "./projects/figma.tsx"),

] satisfies RouteConfig;