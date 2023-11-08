import { val__be_state_triple__new } from '@ctx-core/vanjs'
import { type nullish } from '@ctx-core/function'
// @ts-ignore
import type { APIContext, AstroGlobal } from 'astro'
export const [
	Astro$_,
	Astro_,
	Astro__set,
] = val__be_state_triple__new<APIContext|AstroGlobal|nullish>('Astro', ()=>
	undefined)
