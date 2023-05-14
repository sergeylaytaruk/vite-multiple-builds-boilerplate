import { defineConfig } from "vite";
import viteMultiBundler from "vite-multi-bundler";
import fg from 'fast-glob';
import path from 'path';

export default defineConfig({
    build: {
        //outDir: path.join(__dirname, "dist1"),
        minify: true,
        sourcemap: true,
        emptyOutDir: false,
        rollupOptions: {
            input: {
                app: './src/index.html',
            },
        },
    },
    plugins: [
        // {
        //     name: 'watch-external',
        //     async buildStart(){
        //         const files = await fg(['src/**/*','src2/**/*']);
        //         for(let file of files){
        //             this.addWatchFile(file);
        //         }
        //     }
        // },
        viteMultiBundler({
            file_versioning: false,
            js: [
                {
                    filename: "index_bundle.min",
                    entryPoints: ["src/index.js", "src/index2.js", "src2/index3.js"],
                    outputDir: "dist1",
                },
                {
                    filename: "login_bundle.min",
                    entryPoints: ["src/index2.js"],
                    outputDir: "dist",
                },
                {
                    filename: "tariff_bundle.min",
                    entryPoints: ["src/index.js"],
                    outputDir: "dist",
                },
            ],
            css: [
                {
                    filename: "index_bundle",
                    entryPoints: ["src/style.css"],
                    outputDir: "dist1",
                },
                {
                    filename: "login_bundle",
                    entryPoints: ["src/style.css"],
                    outputDir: "dist",
                },
                {
                    filename: "tariff_bundle",
                    entryPoints: ["src/style.css"],
                    outputDir: "dist",
                },
            ],
        }),
    ],
});
