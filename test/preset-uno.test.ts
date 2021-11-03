import { createGenerator, escapeSelector, presetUno } from 'unocss'

const targets = [
  '-gap-y-5',
  '-m-auto',
  '!hover:px-10',
  '!p-5px',
  'all:m-auto',
  'bg-[#153]/10',
  'bg-[#1533]',
  'bg-[#1533]/10',
  'bg-#452233/40',
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
  'bg-red-100',
  'bg-teal-100/55',
  'bg-teal-200:55',
  'bg-teal-300:[.55]',
  'bg-teal-400/[.55]',
  'bg-teal-500/[55%]',
  'blur-4',
  'border-2',
  'border-b',
  'border-collapse',
  'border-green-100/10',
  'border-separate',
  'border-t-2',
  'border',
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
  'grid-cols-[1fr,2fr,100px,min-content]',
  'grid-cols-2',
  'grid-rows-[1fr,2fr,100px,min-content]',
  'grid-rows-3',
  'grid',
  'auto-rows-min',
  'auto-rows-fr',
  'row-auto',
  'auto-cols-auto',
  'auto-rows-auto',
  'col-span-1',
  'row-span-full',
  'row-end-1',
  'row-start-full',
  'auto-flow-cols-dense',
  'h-1',
  'hover:!p-1',
  'inline-table',
  'first:p-2',
  'not-hover:p-3',
  'group-focus:p-4',
  'hover:not-first:checked:bg-red/10',
  'hover:p-5',
  'leading-2',
  'light:text-sm',
  'm-[3em]',
  'm-0',
  'm-1/2',
  'm-auto',
  'max-h-[1px]',
  'max-w-screen-lg',
  'md:!hidden',
  'md:m-1',
  'mix-blend-normal',
  'mix-blend-color-light',
  'my-auto',
  'op-10',
  'opacity-0',
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
  'rounded-[4px]',
  'rounded-1/2',
  'rounded-full',
  'rounded-md',
  'rounded-rb-1/2',
  'rounded-t-sm',
  'rounded-tr',
  'rounded',
  'sm:m-1',
  'sm:m1',
  'lt-sm:m1',
  'lt-lg:m2',
  'table',
  'table-auto',
  'table-caption',
  'table-empty-cells-visible',
  'table-empty-cells-hidden',
  'table-footer-group',
  'table-row-group',
  'text-[#124]',
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
  'to-current',
  'to-green-500',
  'to-transparent',
  'top-0',
  'tracking-wide',
  'transition-none',
  'transition-delay-300',
  'transition-duration-300',
  'transition-property-width',
  'transition-property-all',
  'transition-200',
  'transition',
  'w-1/2',
  'z-1',
  'z-100',
  'box-content',
  'box-border',
  'filter',
  'invert',
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
  'translate-y-1/4',
  'preserve-3d',
  'preserve-flat',
  'text-opacity-[13.3333333%]',
  'via-current',
  'via-green-500',
  'via-transparent',
  'list-none',
  'list-disc',
  'list-outside',
  'list-none-inside',
  'image-render-pixel',
  'decoration-slice',
  'appearance-none',
  'caret-op-90',
  'caret-red',
  'space-x-2',
  'space-y-4',
  '-space-x-4',
  'space-x-reverse',
  'next:mt-0',
  'italic',
  'underline',
  'underline-dashed',
  'underline-red-500',
  'underline-op80',
  'underline-auto',
  'underline-5',
  'underline-offset-0.6rem',
  'antialiased',
  'hyphens-none',
  'tab',
  'tab-6',
  'indent',
  'indent-1/2',
  'indent-lg',
  'text-stroke-6',
  'text-stroke-sm',
  'text-stroke-blue-500',
  'text-stroke-op-60',
  'write-normal',
  'write-orient-sideways',
  'grid-cols-$1',
  'color-$red',
  'tab-$tabprop',
  'items-$size',
  'object-$fit',
  'bg-$test-variable',
  'bg-blend-$data',
  '!m-$c-m',
  'animate-none',
  '!animate-ping',
  'hover:animate-bounce',
  'placeholder-color-red-1',
  'placeholder-transparent',
  'placeholder-opacity-60',
]

const nonTargets = [
  '--p-2',
  'before:before:m2',
  'hi',
]

const uno = createGenerator({
  presets: [
    presetUno(),
  ],
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
  expect(css).toMatch('')
})
