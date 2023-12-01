// @ts-ignore
import type { APIContext, AstroGlobal } from 'astro'
import { type nullish } from 'ctx-core/function'
import { be_sig_triple_ } from 'rmemo'
export const [
	Astro$_,
	Astro_,
	Astro__set,
] = be_sig_triple_<APIContext|AstroGlobal|nullish>(()=>
		undefined,
	{ id: 'Astro' })
