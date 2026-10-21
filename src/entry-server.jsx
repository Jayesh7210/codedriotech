import { renderToString } from 'react-dom/server'
import App, { routePaths } from './App.jsx'
import { pages, site } from './data/site'

export { routePaths, pages, site }
export const render = (url) => renderToString(<App url={url} />)
