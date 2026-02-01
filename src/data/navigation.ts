export interface NavLink {
  title: string;
  url: string;
  external?: boolean;
}

export const navigation: NavLink[] = [
  { title: "Curriculum", url: "/cv/" },
  { title: "Perspectives", url: "/perspectives/" },
  { title: "Publications", url: "/publications/" },
  { title: "Code", url: "/code/" },
  { title: "Blog", url: "/blog/" },
  { title: "Photography", url: "/photography/" },
  { title: "Certifications", url: "/certifications/" }
];
