import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

const typography = new Typography({
    ...Wordpress2016,
    baseFontSize: "18px",
    baseLineHeight: 1.666,
})

if (process.env.NODE_ENV !== "production") {
    typography.injectStyles()
}

export default typography
export const scale = typography.scale

