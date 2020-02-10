type Data = {
  [key: string]: any
} | null

type UrlParams = {
  [key: string]: string | number
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}