import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_memo_tuple4_ } from '@ctx-core/solid-nanostores'
import { Astro_ } from './Astro'
export const [
	Astro__url$_,
	Astro__url_,
	Astro__url__memo,
	Astro__url__memo_,
] = val__be_computed_memo_tuple4_(ctx=>
	nullish__none_([Astro_(ctx)], Astro=>
		Astro?.url))