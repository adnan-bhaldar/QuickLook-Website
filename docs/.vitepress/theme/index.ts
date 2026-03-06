import DefaultTheme from 'vitepress/theme'
import './custom.css'

import FeatureGrid from './components/FeatureGrid.vue'
import FormatTable from './components/FormatTable.vue'
import PluginCard from './components/PluginCard.vue'
import InstallTabs from './components/InstallTabs.vue'
import ShortcutRow from './components/ShortcutRow.vue'
import StatsBanner from './components/StatsBanner.vue'
import HomeHero from './components/HomeHero.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FeatureGrid', FeatureGrid)
    app.component('FormatTable', FormatTable)
    app.component('PluginCard', PluginCard)
    app.component('InstallTabs', InstallTabs)
    app.component('ShortcutRow', ShortcutRow)
    app.component('StatsBanner', StatsBanner)
    app.component('HomeHero', HomeHero)
  },
}