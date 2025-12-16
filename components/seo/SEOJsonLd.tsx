export default function SEOJsonLd() {
    const title = "Jamie Calaku | Fullstack Engineer";
    const description = "I’m a young full-stack developer from Darmstadt, Germany. I learn best by building, failing, fixing, and repeating the process. I’m curious about how things work under the hood and I enjoy turning vague ideas into real projects that I can actually be proud of.";

    const data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://jamiecalaku.dev#about",
                "name": "Jamie Calaku",
                "url": "https://jamiecalaku.dev",
                "jobTitle": "Fullstack Engineer",
                "image": {
                    "@type": "ImageObject",
                    "url": "https://jamiecalaku.dev/cover.jpg",
                    "width": 1200,
                    "height": 630
                },
                "sameAs": [
                    "https://github.com/jamiecalaku",
                    "https://www.linkedin.com/in/jamie-calaku"
                ]
            },
            {
                "@type": "WebSite",
                "url": "https://jamiecalaku.dev",
                "name": "Jamie Calaku",
                "description": description,
                "publisher": {"@id": "https://jamiecalaku.dev#about"},
                "inLanguage": "en"
            },
            {
                "@type": "WebPage",
                "url": "https://jamiecalaku.dev",
                "name": title,
                "about": { "@id": "https://jamiecalaku.dev#about" },
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://jamiecalaku.dev/cover.jpg",
                    "width": 1200,
                    "height": 630
                },
                "headline": title,
                "inLanguage": "en",
                "mainEntity": [
                    { "@type": "WebPageElement", "name": "Home Section", "cssSelector": "#home"},
                    { "@type": "WebPageElement", "name": "About Section", "cssSelector": "#about"},
                    { "@type": "WebPageElement", "name": "Skills Section", "cssSelector": "#skills"},
                    { "@type": "WebPageElement", "name": "Projects Section", "cssSelector": "#projects"},
                    { "@type": "ContactPage", "name": "Contact Section", "cssSelector": "#contact"}
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}