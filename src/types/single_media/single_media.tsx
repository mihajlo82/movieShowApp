export interface SingleObject {
    id?: number | string,
    title?: string,
    overview?: string,
    name?: string,
    poster_path?: string 
    poster?: string,
    altName?: string
  }
 
  export interface DetailsProp {
    item?: SingleObject
  }