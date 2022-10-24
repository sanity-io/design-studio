import {CogIcon} from '@sanity/icons'
import {StructureResolver} from 'sanity/desk'

const STRUCTURE_CUSTOM_TYPES = ['settings']

export const structure: StructureResolver = (S) => {
  // The `Settings` root list item
  const settingsListItem = S.listItem()
    .title('Settings')
    .icon(CogIcon)
    .child(S.editor().id('settings').schemaType('settings').documentId('settings'))

  // The default root list items (except custom ones)
  const defaultListItems = S.documentTypeListItems().filter((listItem) => {
    const id = listItem.getId()

    if (!id) return true

    return !STRUCTURE_CUSTOM_TYPES.includes(id)
  })

  return S.list()
    .title('Content')
    .items([settingsListItem, S.divider(), ...defaultListItems])
}
