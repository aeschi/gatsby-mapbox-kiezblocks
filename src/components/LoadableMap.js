import Loadable from "@loadable/component"

const LoadableMap = Loadable(() => import('./mapReal'))

export default LoadableMap