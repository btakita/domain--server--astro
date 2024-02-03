import { nullish__none_ } from 'ctx-core/function'
import { be_memo_pair_ } from 'rmemo'
import { Astro_ } from './Astro.js'
export const [
	Astro__props$_,
	Astro__props_,
] = be_memo_pair_(ctx=>
	nullish__none_([Astro_(ctx)], Astro=>
			Astro!.props),
{ id: 'Astro__props' })
