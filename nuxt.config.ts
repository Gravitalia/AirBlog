export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=500, initial-scale=1",
            title: "AirBlog",
            link: [
                { rel: "icon", href: "/favicon.webp" }
            ],
            meta: [
                { name: "description", content: "AirBlog, read and write everywhere. Create your blog easily!" }
            ],
        }
    },

    modules: [
        "@nuxtjs/tailwindcss",
        //"@nuxtjs/i18n"
    ],

    typescript: {
        shim: false
    }
});