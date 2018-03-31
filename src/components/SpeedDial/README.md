# Props SpeedDial Component

prop|type|default|required|description
---- | :----: | :-------: | :--------: | -----------
**children** | `(props: @see RenderProps) => React$Node` |  | ✔ | render function
**renderButton** | `(props: @see RenderButtonProps, propsIcon: @see RenderButtonIconProps) => React$Node` |  | ✔ | render function for the `<Button />` visible in closed state (or always if no renderOpenedButton function is defined)
**renderOpenedButton** | `(props: @see RenderOpenedButtonProps, propsIcon: @see RenderOpenedButtonIconProps) => React$Node` |  |  | render function for the `<Button />` visible in opened state
**renderOuterRimButton** | `(props: @see RenderOuterRimButtonProps, propsIcon: @see RenderOuterRimButtonIconProps) => React$Node` |  |  | render function for the `<Button />` which is visible above the SpeedDial Button (@see renderButton) in closed state [demo](https://smollweide.github.io/material-ui-speed-dial/#/example-outer-rim-button)
**renderList** | `(props: @see RenderListProps) => React$Node` |  | ✔ | render function for wrapping the `<SpeedDialItem />`’s.
**renderBackdrop** | `(props: @see RenderBackdropProps) => React$Node` |  |  | render function for the `<SpeedDialBackdrop />` component.
**preset** | `{[key: string]: string}` |  |  | for some behaviours [presets](https://github.com/smollweide/material-ui-speed-dial/tree/master/src/presets) are defined.
**isOpen** | `boolean` |  |  | if this props is defined with an boolean the speed dial will work in controlled mode see [demo](https://smollweide.github.io/material-ui-speed-dial/#/example-controlled) and it’s source code for details.
**className** | `string` |  |  |
**animationDelay** | `number` | 500 |  | defines the animation speed in milliseconds


### RenderProps

prop|type|description
---- | :----: | -----------
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |
**preset** | `{[key: string]: string}` |  |
**handleClose** | `Function` | will close speed dial on execution |

### RenderButtonProps

prop|type|description
---- | :----: | -----------
**key** | `string` | the iteration key |
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |
**onClick** | `(event: Event) => void` | handles the button onClick |

### RenderButtonIconProps

prop|type|description
---- | :----: | -----------
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |

### RenderOpenedButtonProps

prop|type|description
---- | :----: | -----------
**key** | `string` | the iteration key |
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |
**onClick** | `(event: Event) => void` | handles the button onClick |

### RenderOpenedButtonIconProps

prop|type|description
---- | :----: | -----------
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |

### RenderOuterRimButtonProps

prop|type|description
---- | :----: | -----------
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |

### RenderOuterRimButtonIconProps

prop|type|description
---- | :----: | -----------
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |

### RenderListProps

prop|type|description
---- | :----: | -----------
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |
**children** | `React$Node` | |

### RenderBackdropProps

prop|type|description
---- | :----: | -----------
**state** | `'closed' | 'opening' | 'opened' | 'closing'` | detailed current state of the speed dial (also correct in controlled mode) |
**className** | `string` | |
**onClick** | `(event: SyntheticMouseEvent<HTMLDivElement>) => void` | handle click on backdrop |
