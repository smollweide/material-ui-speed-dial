# Props SpeedDialItem Component

prop|type|default|required|description
---- | :----: | :-------: | :--------: | -----------
**children** | `(props: @see RenderLabelProps) => React$Node` |  | ✔ | render function
**renderAvatar** | `(props: @see RenderAvatarProps) => React$Node` |  |  | render function for the `<Avatar />` component which is visible beside the item.
**preset** | `{[key: string]: string}` |  |  | for some behaviours [presets](https://github.com/smollweide/material-ui-speed-dial/tree/master/src/presets) are defined.
**state** | `'closed' | 'opening' | 'opened' | 'closing'` |  | ✔ | detailed current state of the speed dial (also correct in controlled mode) |
**onClick** | `(event: SyntheticMouseEvent<HTMLDivElement>) => void` | | | handle click on item |
**className** | `string` | | |

### RenderLabelProps

prop|type|description
---- | :----: | -----------
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |

### RenderAvatarProps

prop|type|description
---- | :----: | -----------
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |
