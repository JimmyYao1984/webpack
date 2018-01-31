const stats = {
	hash: false,
	timings: false,
	assets: false,
	chunks: true,
	chunkOrigins: true,
	entrypoints: true,
	modules: false
};
module.exports = [

	{
		name: "default",
		mode: "production",
		entry: {
			main: "./",
			a: "./a",
			b: "./b",
			c: "./c"
		},
		output: {
			filename: "default/[name].js"
		},
		optimization: {
			splitChunks: {
				minSize: 0 // enforce all
			}
		},
		stats
	},

	{
		name: "all-chunks",
		mode: "production",
		entry: {
			main: "./",
			a: "./a",
			b: "./b",
			c: "./c"
		},
		output: {
			filename: "default/[name].js"
		},
		optimization: {
			splitChunks: {
				minSize: 0, // enforce all,
				chunks: "all"
			}
		},
		stats
	},

	{
		name: "manual",
		mode: "production",
		entry: {
			main: "./",
			a: "./a",
			b: "./b",
			c: "./c",
			vendors: ["x", "y", "z"]
		},
		output: {
			filename: "default/[name].js"
		},
		optimization: {
			splitChunks: {
				minSize: 0, // enforce all,
				chunks: "all",
				cacheGroups: {
					default: false,
					vendors: {
						test: "vendors",
						name: "vendors",
						enforce: true
					}
				}
			}
		},
		stats
	},
	{
		name: "name-too-long",
		mode: "production",
		entry: {
			main: "./",
			aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: "./a",
			bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb: "./b",
			cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc: "./c"
		},
		output: {
			filename: "[name].js"
		},
		optimization: {
			splitChunks: {
				minSize: 0,
				chunks: "all"
			}
		},
		stats
	}

];
