import { createGenerator, escapeSelector } from '@unocss/core'
import presetUno from '@unocss/preset-uno'
import { expect, test } from 'vitest'

const targets = [
  '-gap-y-5',
  '-m-auto',
  '!hover:px-10',
  '!p-5px',
  'all:m-auto',
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
  'bg-hex-452233/40',
  'bg-local',
  'bg-no-repeat',
  'bg-none',
  'bg-origin-border',
  'bg-opacity-45',
  'bg-repeat-space',
  'bg-right-bottom',
  'bg-scroll',
  // fill
  'fill-none',
  'fill-current',
  'fill-green-400',
  'fill-opacity-80',
  'caption-top',
  'caption-bottom',
  'children:m-auto',
  'dark:not-odd:text-red',
  'dark:text-xl',
  'duration-111',
  'flex-[hi]',
  'flex',
  'font-mono',
  'from-current',
  'from-green-500',
  'from-transparent',
  'gap-4',
  'gap-x-1',
  'hover:!p-1',
  'inline-table',
  'first:p-2',
  'not-hover:p-3',
  'group-focus:p-4',
  'group-hover:group-focus:text-center',
  'peer-checked:bg-blue-500',
  'hover:not-first:checked:bg-red/10',
  'hover:p-5',
  'leading-2',
  'light:text-sm',
  'm-[3em]',
  'm-0',
  'm-1/2',
  'm-auto',
  '-mb-px',
  'aspect-ratio-auto',
  'aspect-ratio-3/2',
  'aspect-ratio-0.7',
  'aspect-ratio-$var',
  'aspect-ratio-[auto_16/9]',
  'md:!hidden',
  'md:m-1',
  'mix-blend-normal',
  'mix-blend-color-light',
  'my-auto',
  'op-10',
  'opacity-0',
  'opacity-$opa',
  'order-first',
  'overflow-auto',
  'overflow-x-scroll',
  'overscroll-x-auto',
  'overscroll-contain',
  'p-2',
  'p-t-2',
  'p2',
  'pl-10px',
  'pt-2',
  'pt2',
  '-p-px',
  'sm:m-1',
  'sm:m1',
  'lt-sm:m1',
  'lt-lg:m2',
  'at-sm:m1',
  'at-lg:m2',
  'at-2xl:m2',
  'table',
  'table-auto',
  'table-caption',
  'table-empty-cells-visible',
  'table-empty-cells-hidden',
  'table-footer-group',
  'table-row-group',
  'text-[#124]',
  'text-[2em]',
  'text-[calc(1em-1px)]',
  'text-4xl',
  'text-base',
  'text-black/10',
  'text-blue',
  'text-lg',
  'text-red-100',
  'text-red-200/10',
  'text-red-300/20',
  'text-red100',
  'text-red2',
  'text-[var(--color)]',
  'to-current',
  'to-green-500',
  'to-transparent',
  'top-0',
  'top-$top-height',
  'tracking-wide',
  'word-spacing-wide',
  'word-spacing-2',
  '-z-1',
  'z-0',
  'z-1',
  'z-100',
  'box-content',
  'box-border',
  'shadow',
  'shadow-transparent',
  'shadow-current',
  'shadow-none',
  'shadow-xl',
  'shadow-green-500',
  'mt-[-10.2%]',
  'ring',
  'ring-10',
  'ring-red2',
  'ring-offset-4',
  'ring-offset-green5',
  'inset-x-5',
  'text-opacity-[13.3333333%]',
  'via-current',
  'via-green-500',
  'via-green-500/30',
  'via-transparent',
  'via-opacity-30',
  'list-none',
  'list-disc',
  'list-outside',
  'list-none-inside',
  'image-render-pixel',
  'decoration-slice',
  'appearance-none',
  'accent-op-90',
  'accent-red',
  'caret-op-90',
  'caret-red',
  'space-x-2',
  'space-y-4',
  '-space-x-4',
  'space-x-reverse',
  'next:mt-0',
  'italic',
  'lining-nums',
  'normal-nums',
  'tabular-nums',
  'antialiased',
  'hyphens-none',
  'tab',
  'tab-6',
  'tab-inherit',
  'indent',
  'indent-1/2',
  'indent-lg',
  'text-stroke-6',
  'text-stroke-sm',
  'text-stroke-blue-500',
  'text-stroke-op-60',
  'text-shadow',
  'text-shadow-lg',
  'text-shadow-none',
  'text-shadow-$var',
  'write-normal',
  'write-orient-sideways',
  'color-$red',
  'tab-$tabprop',
  'items-$size',
  'object-$fit',
  'bg-$test-variable',
  'bg-blend-$data',
  '!m-$c-m',
  'mt-$height',
  'pt-$title2',
  'space-x-$space',
  'outline-solid',
  'outline-color-red-1',
  'outline-width-10px',
  'outline-inset',
  'outline-110',
  'outline-blue-2',
  'outline-none',
  'outline-[var(--red)]',
  'outline-size-[var(--width)]',
  'outline-offset-[var(--offset)]',
  'placeholder-color-red-1',
  'placeholder-transparent',
  'placeholder-opacity-60',
  'select-none',
  'ws-nowrap',
  'b-2',
  'v-top',
  'v-mid',
  'disabled:op50',
  'touch-pan-left',
  'touch-pan-y',

  // custom colors
  'text-custom-a',
  'bg-custom-b',
  'border-custom-b/10',
]

const nonTargets = [
  '--p-2',
  'before:before:m2',
  'hi',
  'row-{row.id}',
  'tabs',
  'tab.hello',
  'text-anything',
  'p-anything',
  'rotate-[3]deg',
]

const uno = createGenerator({
  presets: [
    presetUno({
      dark: 'media',
    }),
  ],
  theme: {
    colors: {
      custom: {
        a: 'var(--custom)',
        b: 'rgba(var(--custom), %alpha)',
      },
    },
  },
})

test('targets', async() => {
  const code = targets.join(' ')
  const { css } = await uno.generate(code)
  const { css: css2 } = await uno.generate(code)

  const unmatched = []
  for (const i of targets) {
    if (!css.includes(escapeSelector(i)))
      unmatched.push(i)
  }
  expect(unmatched).toEqual([])
  expect(css).toMatchSnapshot()
  expect(css).toEqual(css2)
})

test('non-targets', async() => {
  const code = nonTargets.join(' ')
  const { css, matched } = await uno.generate(code)

  expect(Array.from(matched)).toEqual([])
  expect(css).toBe('')
})
