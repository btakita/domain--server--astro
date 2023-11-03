import { val__be_derive_pair_ } from '@btakita/domain--all--blog'
import { nullish__none_ } from '@ctx-core/function'
import { Astro_ } from './Astro'
export const [
	Astro__props$_,
	Astro__props_,
] = val__be_derive_pair_(ctx=>
	nullish__none_([Astro_(ctx)], Astro=>
		Astro!.props))
