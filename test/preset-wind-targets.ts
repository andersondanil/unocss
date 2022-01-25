export const presetWindiTargets: string[] = [
  // animation
  'keyframes-pulse',
  'keyframes-pulse-alt',
  'animate-keyframes-pulse',
  'animate-keyframes-pulse-alt',
  'animate-none',
  'animate-pulse',
  'animate-pulse-alt',
  'animate-duration-100ms',
  'animate-duration-100s',
  'animate-duration-100',
  'animate-duration-100.00',
  'animate-duration-100.02',
  'animate-duration-100.30',
  'animate-duration-100.32',
  'animate-delay--1.37',
  'animate-name-move',
  'animate-normal',
  'animate-paused',
  'animate-play-paused',
  'animate-play-state-running',
  'animate-state-running',
  'animate-mode-none',
  'animate-fill-mode-both',
  'animate-fill-backwards',
  'animate-reverse',
  'animate-direction-alternate-reverse',
  'animate-count-2.4',
  'animate-iteration-2',
  'animate-iteration-count-2',
  'animate-iteration-count-2-4-infinity',
  'animate-iteration-count-[2,4,infinity]',
  'animate-duration-$variable',
  'animate-delay-$variable',
  'animate-iteration-count-$variable',
  'animate-ease',
  'animate-ease-linear',
  'animate-ease-$variable',
  'animate-ease-[steps(4,_jump-start)]',
  'animate-$variable',
  'animate-[4s_linear_0s_infinite_alternate_move\\_eye]',

  // background
  'bg-auto',
  'bg-blend-normal',
  'bg-blend-color-burn',
  'bg-blend-luminosity',
  'bg-bottom',
  'bg-clip-border',
  'bg-clip-text',
  'bg-cover',
  'bg-fixed',
  'bg-gradient-to-t',
  'bg-gradient-to-tl',
  'bg-local',
  'bg-no-repeat',
  'bg-none',
  'bg-origin-border',
  'bg-repeat-space',
  'bg-right-bottom',
  'bg-scroll',

  // bg gradient
  'from-current',
  'from-green-500',
  'from-green-500/50',
  'from-transparent',
  'from-$bg-from',
  'to-current',
  'to-green-500',
  'to-green-500/50',
  'to-transparent',
  'to-$bg-to',
  'via-current',
  'via-green-500',
  'via-green-500/30',
  'via-transparent',
  'via-$bg-via',
  'via-opacity-30',
  'bg-gradient-from-current',
  'bg-gradient-from-green-600',
  'bg-gradient-from-green-600/60',
  'bg-gradient-from-transparent',
  'bg-gradient-to-current',
  'bg-gradient-to-green-600',
  'bg-gradient-to-green-600/60',
  'bg-gradient-to-transparent',
  'bg-gradient-via-current',
  'bg-gradient-via-green-600',
  'bg-gradient-via-green-600/40',
  'bg-gradient-via-transparent',
  'bg-gradient-via-opacity-40',
  'bg-gradient-[70deg,blue,pink]',
  'bg-gradient-stops-[blue,pink]',
  'stops-[blue,pink]',
  'bg-gradient-linear',
  'bg-gradient-radial',
  'bg-gradient-repeating-conic',
  'bg-gradient-shape-t',
  'bg-gradient-shape-tl',
  'bg-gradient-shape-[70deg]',
  'bg-gradient-shape-[closest-side]',
  'bg-gradient-shape-[circle_at_70%]',
  'bg-gradient-shape-[from_40deg]',
  'shape-tl',
  'shape-[70deg]',
  'shape-[farthest-corner_at_0_0]',
  'shape-[from_3.1416rad_at_10%_50%]',

  // behaviors
  'list-none',
  'list-disc',
  'list-outside',
  'box-decoration-slice',
  'accent-op-90',
  'accent-red',
  'caret-op-90',
  'caret-red',
  'image-render-pixel',
  'overscroll-x-auto',
  'overscroll-contain',
  'overscroll-none',
  'scroll-auto',

  // columns
  'columns-3',
  'columns-5em',
  'columns-auto',
  'columns-[3_auto]',
  'columns-[auto_13em]',
  'columns-[auto_auto]',
  'break-before-avoid-page',
  'break-inside-avoid-column',
  'break-after-column',

  // container
  //

  // divide
  'divide',
  'divide-y-4',
  'divide-x-4',
  'divide-x-reverse',
  'divide-block-4',
  'divide-inline-4',
  'divide-inline-reverse',
  'divide-green-500',
  'divide-opacity-50',
  'divide-dashed',
  'divide-dotted',
  'divide-transparent',
  'divide-current',
  'divide-none',

  // filters
  'filter',
  'filter-none',
  'filter-blur',
  'filter-blur-md',
  'filter-blur-4',
  'filter-blur-none',
  'blur',
  'blur-md',
  'blur-4',
  'blur-none',
  'brightness-0',
  'brightness-60',
  'contrast-125',
  'drop-shadow',
  'drop-shadow-[0_4px_3px_#000]',
  'drop-shadow-none',
  'drop-shadow-sm',
  'drop-shadow-color-red-300',
  'drop-shadow-color-op-30',
  'grayscale',
  'grayscale-90',
  'hue-rotate-0',
  'hue-rotate-360',
  'invert',
  'invert-90',
  'saturate-0',
  'saturate-30',
  'saturate-120',
  'sepia',
  'sepia-80',

  // filters - backdrop
  'backdrop-filter',
  'backdrop-filter-none',
  'backdrop-blur',
  'backdrop-blur-md',
  'backdrop-blur-4',
  'backdrop-blur-none',
  'backdrop-brightness-0',
  'backdrop-brightness-60',
  'backdrop-contrast-125',
  'backdrop-grayscale',
  'backdrop-grayscale-90',
  'backdrop-hue-rotate-0',
  'backdrop-hue-rotate-360',
  'backdrop-invert',
  'backdrop-invert-90',
  'backdrop-opacity',
  'backdrop-opacity-90',
  'backdrop-saturate',
  'backdrop-saturate-30',
  'backdrop-saturate-120',
  'backdrop-sepia',
  'backdrop-sepia-80',

  // line clamp
  'line-clamp-7',
  'line-clamp-100',
  'line-clamp-none',

  // scrolls
  'snap-y',
  'snap-both',
  'snap-mandatory',
  'snap-none',
  'snap-center',
  'snap-align-none',
  'snap-always',
  'scroll-m-[3em]',
  'scroll-m-0',
  'scroll-m-1/2',
  'scroll-m-auto',
  'scroll-p-2',
  'scroll-p-t-2',
  'scroll-p2',
  'scroll-pl-10px',
  'scroll-pt-2',
  'scroll-pt2',
  'scroll-pis-10px',
  'scroll-pbs-2',
  'scroll-pbs2',

  // shadow, spacing
  'mix-blend-normal',
  'mix-blend-hard-light',
  'space-x-2',
  'space-y-4',
  'space-x-reverse',
  'space-x-$space',
  'space-inline-2',
  'space-block-4',
  'space-inline-reverse',
  'space-inline-$space',

  // static
  'capitalize',
  'normal-case',
  'hyphens-none',
  'hyphens-auto',
  'write-normal',
  'write-orient-sideways',
  'not-sr-only',
  'isolate',
  'isolate-auto',
  'isolation-auto',
  'object-none',
  'object-center',
  'object-ct',
  'object-cb',
  'object-center-top',
  'object-center-bottom',

  // tables
  'border-collapse',
  'border-separate',
  'caption-top',
  'caption-bottom',
  'inline-table',
  'table',
  'table-auto',
  'table-caption',
  'table-empty-cells-visible',
  'table-empty-cells-hidden',
  'table-footer-group',
  'table-row-group',

  // touch-actions
  'touch-pan-left',
  'touch-pan-y',
  'touch-pinch-zoom',
  'touch-manipulation',
  'touch-none',

  // typography
  'lining-nums',
  'normal-nums',
  'tabular-nums',

  // variables
  'bg-blend-$data',
  'divide-$variable',
  'divide-x-$variable',
  'divide-inline-$variable',
  'blur-$variable',
  'brightness-$variable',
  'contrast-$variable',
  'drop-shadow-$variable',
  'grayscale-$variable',
  'hue-rotate-$variable',
  'invert-$variable',
  'saturate-$variable',
  'sepia-$variable',
  'backdrop-opacity-$variable',
  'bg-image-$variable',
  'object-position-$variable',
  'object-$fit',

  // variants - dark/light
  '.dark:text-xl',
  '@dark:text-xl',

  // variants - placeholder
  'placeholder-red-400',
  'placeholder-inherit',

  // variants
  '!animate-ping',
  '-backdrop-hue-rotate-90',
  '-hue-rotate-90',
  'hover:animate-bounce',

  '-scroll-mb-px',
  '-scroll-p-px',
  '-space-x-4',
]
