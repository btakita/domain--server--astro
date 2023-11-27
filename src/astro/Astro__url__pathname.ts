import { nullish__check_ } from 'ctx-core/function'
import { be_memo_pair_ } from 'rmemo'
import { Astro__url_ } from './Astro__url.js'
export const [
	Astro__url__pathname$_,
	Astro__url__pathname_,
] = be_memo_pair_(ctx=>
		nullish__check_([Astro__url_(ctx)], Astro__url=>
			Astro__url.pathname),
	{ id: 'Astro__url__pathname' })
