import { nullish__none_ } from '@ctx-core/function'
import { Astro_ } from './Astro'
import { val__be_derive_pair__new } from '@ctx-core/vanjs'
export const [
	Astro__url$_,
	Astro__url_,
] = val__be_derive_pair__new(ctx=>
	nullish__none_([Astro_(ctx)], Astro=>
		Astro!.url))
