import { Brand, Nav } from "./base";

export interface Landing {
  header: Header;
  hero: Hero;
}

export interface Header {
  brand?: Brand;
  nav?: Nav;
}

export interface Footer {
  brand?: Brand;
  nav?: Nav;
}

export interface Hero {
  title: string;
}
