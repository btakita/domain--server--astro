import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_memo_tuple4_ } from '@ctx-core/solid-nanostores'
import { Astro_ } from './Astro'
export const [
	Astro__props$_,
	Astro__props_,
	Astro__props__memo,
	Astro__props__memo_,
] = val__be_computed_memo_tuple4_(ctx=>
	nullish__none_([Astro_(ctx)], Astro=>
		Astro?.props))