const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  { url: "/portfolio", changefreq: "weekly", priority: 0.7 },
  { url: "/contact", changefreq: "weekly", priority: 0.7 }
];

const sitemap = new SitemapStream({
  hostname: "https://websynthix.netlify.app"
});

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated successfully");
});

links.forEach(link => sitemap.write(link));
sitemap.end();