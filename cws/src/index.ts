
export default {
	// what the cloudflare worker runtime sends the request to
	async fetch(request, env, ctx): Promise<Response> {
		return new Response("Hello World!" +" " + Math.random());
	},
} satisfies ExportedHandler<Env>;

// This itslef is an http server
// everything that cloudflare wants for its worker , resides inside that fetch function 
// cloudflare wants you to have atleast one fetch function to initialise its worker