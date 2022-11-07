import type { Rule } from '@unocss/core'
import {
  alignments,
  appearance,
  appearances,
  aspectRatio,
  bgColors,
  borders,
  boxShadows,
  boxSizing,
  containerParent,
  contentVisibility,
  contents,
  cssProperty,
  cursors,
  displays,
  flex,
  floats,
  fontSmoothings,
  fontStyles,
  fonts,
  gaps,
  grids,
  insets,
  justifies,
  margins,
  cssVariables as miniCssVariables,
  textTransforms as miniTextTransforms,
  opacity,
  orders,
  outline,
  overflows,
  paddings,
  placements,
  pointerEvents,
  positions,
  questionMark,
  resizes,
  rings,
  sizes,
  svgUtilities,
  tabSizes,
  textAligns,
  textColors,
  textDecorations,
  textIndents,
  textOverflows,
  textShadows,
  textStrokes,
  transforms,
  transitions,
  userSelects,
  verticalAligns,
  whitespaces,
  willChange,
  breaks as wordBreaks,
  zIndexes,
} from '@unocss/preset-mini/rules'
import { container } from './container'
import { backgroundStyles } from './background'
import { filters } from './filters'
import { spaces } from './spacing'
import { backgroundBlendModes, hyphens, isolations, mixBlendModes, objectPositions, screenReadersAccess, textTransforms, writingModes, writingOrientations } from './static'
import { tables } from './table'
import { accents, carets, imageRenderings, listStyle, overscrolls, scrollBehaviors } from './behaviors'
import { animations } from './animation'
import { cssVariables } from './variables'
import { divides } from './divide'
import { lineClamps } from './line-clamp'
import { fontVariantNumeric } from './typography'
import { touchActions } from './touch-actions'
import { scrolls } from './scrolls'
import { columns } from './columns'
import { placeholders } from './placeholder'

export const rules: Rule[] = [
  miniCssVariables,
  cssVariables,
  cssProperty,
  container,
  screenReadersAccess,
  pointerEvents,
  appearances,
  positions,
  insets,
  lineClamps,
  isolations,
  zIndexes,
  orders,
  grids,
  floats,
  margins,
  boxSizing,
  displays,
  aspectRatio,
  sizes,
  flex,
  tables,
  transforms,
  animations,
  cursors,
  touchActions,
  userSelects,
  resizes,
  scrolls,
  listStyle,
  appearance,
  columns,
  placements,
  alignments,
  justifies,
  gaps,
  spaces,
  divides,
  overflows,
  overscrolls,
  scrollBehaviors,
  textOverflows,
  whitespaces,
  wordBreaks,
  borders,
  bgColors,
  backgroundStyles,
  svgUtilities,
  objectPositions,
  paddings,
  textAligns,
  textIndents,
  verticalAligns,
  fonts,
  miniTextTransforms,
  textTransforms,
  fontStyles,
  fontVariantNumeric,
  textColors,
  textDecorations,
  fontSmoothings,
  tabSizes,
  textStrokes,
  textShadows,
  hyphens,
  writingModes,
  writingOrientations,
  carets,
  accents,
  opacity,
  backgroundBlendModes,
  mixBlendModes,
  boxShadows,
  outline,
  rings,
  imageRenderings,
  filters,
  transitions,
  willChange,
  contentVisibility,
  contents,
  placeholders,
  containerParent,

  // should be the last
  questionMark,
].flat(1)
