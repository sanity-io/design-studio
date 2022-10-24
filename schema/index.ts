import {article} from './article'
import {nav, navItem} from './nav'
import {screen, screenSections} from './screen'
import {seo} from './seo'
import {settings} from './settings'

export const schema = {
  name: 'sanity-design-studio',
  types: [article, nav, navItem, ...screenSections, screen, seo, settings],
}
