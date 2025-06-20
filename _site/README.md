# DataMaster Course Landing Page

A Jekyll-based landing page for selling data science courses with an indie aesthetic.

## Features

- Responsive design matching DataTalks.Club aesthetic
- Smooth scrolling navigation
- Course syllabus breakdown
- Instructor profile
- Student testimonials
- FAQ section
- Newsletter signup
- Mobile-friendly

## Setup

1. Install Jekyll and dependencies:
\`\`\`bash
bundle install
\`\`\`

2. Run the development server:
\`\`\`bash
bundle exec jekyll serve
\`\`\`

3. Visit `http://localhost:4000` to view the site

## Deployment to GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

- Edit `_config.yml` for site settings
- Modify content in `index.html`
- Update styles in `_sass/main.scss`
- Add functionality in `assets/js/main.js`

## Structure

\`\`\`
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Main layout template
├── _sass/
│   └── main.scss        # Styles
├── assets/
│   ├── css/
│   │   └── main.scss    # CSS entry point
│   └── js/
│       └── main.js      # JavaScript functionality
├── index.html           # Main page content
├── Gemfile              # Ruby dependencies
└── README.md            # This file
