---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: false
---
# Tabs 标签页
内容组之间进行导航切换
## 何时使用
- 内容组之间进行导航切换
- 当前内容需要分成同层级结构的组，进行内容切换展示，用在表单或者标准列表界面的顶部

## 注意事项

- 目前仅支持一个页面中使用一次 **Tabs** 组件；
- 在基础库 2.x 版本下，内嵌 scroll-view 产生 scroll-view 无法滚动的情况，建议scroll-view 阻止 touch 事件冒泡：catchTouchStart、catchTouchMove。详见[官方文档](https://opendocs.alipay.com/mini/component/scroll-view)
- Tabs 内部使用 transform 样式以进行轮播，会导致内嵌弹层显示问题，建议内部不嵌套包含弹层的组件或者使用 fallback 属性，以自己实现简单版的“轮播”，详见下方 fallback 的 demo。

## 代码示例
### 基本使用
<code src='../../demo/pages/Tabs'></code>

### fallback
<code src='../../demo/pages/TabsFallback'></code>

## 属性

#### Tabs
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| type | 类型，basis(基础)，capsule(胶囊)，mixin(混合) | 'basis' &verbar; 'capsule' &verbar; 'mixin' &verbar; 'title'  | 'basis' |
| index | 当前激活的索引| number | 0 |
| animation | 是否有过渡动画  | boolean | false |
| swipeable |  是否支持手势切换    | boolean | false | 
| sticky | 是否支持吸顶   | boolean | false | 
| plus |  右上角操作按钮，自定义节点 |  string &verbar; slot | - |
| title |自定义 tab 标题样式，仅在 type 为 basis 时可用    |  slot-scope | - |
| className | 类名 | string | - |

#### TabItem
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| tab |每一项 tab 内容|  {title: string; subTitle?: string; badge?: number; disabled?: boolean}[] | - |
| className | 类名 | string | - |

## 事件

#### Tabs
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 面板切换时候，触发回调 |(index: number) => void|

## 插槽
#### Tabs
| 名称 | 说明 |
| ----|----|
| plus | 表单项额外内容 |

## 作用域插槽
#### Tabs
| 名称 | 说明 |
| ----|----|
| title | 自定义 tab 标题样式 |

## 样式类
#### Tabs
| 类名 | 说明 |
| -----|-----|
| amd-tabs | 整体样式 |
| amd-tabs-bar | 上方标题区域样式 |
| `amd-tabs-bar-active` |  `上方标题区域激活时样式` |
| `amd-tabs-bar-active:after` | `上方标题区域激活时 indicator 样式` |
| amd-tabs-bar | 上方标题区域样式 |
| amd-tabs-bar-sticky | 吸顶状态样式 |
| amd-tabs-bar-plus | 右上角标签样式 |
| amd-tabs-bar-fade | 两侧渐淡效果样式 |
| amd-tabs-bar-fade-left | 左侧渐淡效果样式 |
| amd-tabs-bar-fade-right | 左侧渐淡效果样式 |
| amd-tabs-bar-scroll-view | 内部ScrollView组件样式 |
| amd-tabs-bar-wrap| 每个标题的样式 |
| amd-tabs-bar-item | 每个标题的样式 |
| amd-tabs-bar-basis | type 为 basis 时，每个标题的样式 |
| amd-tabs-bar-capsule | type 为 capsule 时，每个标题的样式 |
| amd-tabs-bar-capsule-title | type 为 capsule 时，每个标题内部文字的样式 |
| amd-tabs-bar-capsule-badge | type 为 capsule 时，每个标题内部 badge 的样式 |
| amd-tabs-bar-mixin| 内type 为 mixin 时，每个标题的样式 |
| amd-tabs-bar-mixin-title| 内type 为 mixin 时，每个标题的文字样式 |
| amd-tabs-bar-mixin-subtitle| 内type 为 mixin 时，每个标题的副标题样式 |
| amd-tabs-bar-disabled | 禁用态选项卡样式 |

#### TabItem
| 类名 | 说明 |
| -----|-----|
| amd-tabs-item | 整体样式 |
| amd-tabs-item-pane | 整体样式 |