# LOMA RECORDS — WEBSITE PROJECT

## Folder structure
```text
loma-records-site/
├── html/
│   ├── index.html      # Home
│   ├── about.html      # About
│   ├── shows.html      # Concert schedules
│   └── shop.html       # Merchandise
├── css/
│   ├── base.css        # Shared navigation, footer, fonts, colors
│   ├── index.css       # Home only
│   ├── about.css       # About only
│   ├── shows.css       # Shows only
│   └── shop.css        # Shop only
├── js/main.js          # Navigation, animations, popups
├── images/             # Put your images here
└── media/              # Your uploaded videos
```

## How to open
Double-click `html/index.html` in Finder or Explorer.
For VS Code Live Server, right-click `html/index.html` and select **Open with Live Server**.

## How to edit
- Each HTML file has clear indentation and section separators.
- Page-specific CSS is separated and formatted into readable rules.
- Change site-wide colors in `css/base.css` (`:root`).
- Replace image placeholders with paths such as `../images/photo.jpg` inside HTML.
- Video paths from HTML use `../media/logo-ident.mp4` and `../media/instagram-post.mp4`.
- Instagram and YouTube links currently lead to platform homepages; replace them with your desired account URLs.

## Notes
The Artists page and its navigation links have been removed. Concert schedules and merchandise are fictional examples for a student concept site, not actual sales.
