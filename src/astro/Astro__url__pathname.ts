import { nullish__check_ } from '@ctx-core/function'
import { val__be_computed_memo_tuple4_ } from '@ctx-core/solid-nanostores'
import { Astro__url_ } from './Astro__url'
export const [
	Astro__url__pathname$_,
	Astro__url__pathname_,
	Astro__url__pathname__memo,
	Astro__url__pathname__memo_,
] = val__be_computed_memo_tuple4_(ctx=>
	nullish__check_([Astro__url_(ctx)], Astro__url=>
		Astro__url.pathname))
