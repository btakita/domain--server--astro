import { val__be_state_triple__new } from '@ctx-core/vanjs'
import { type nullish } from '@ctx-core/function'
import { type APIContext, type AstroGlobal } from 'astro'
export const [
	Astro$_,
	Astro_,
	Astro__set,
] = val__be_state_triple__new<APIContext|AstroGlobal|nullish>('Astro', ()=>
	undefined)
