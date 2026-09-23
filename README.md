# Personal website — Abhishek Borah

Plain HTML + CSS, no build step. Hosted free on GitHub Pages.

```
index.html              ← main page (About, Research, Publications, Projects, CV, Writing)
blog/index.html         ← list of posts
blog/posts/*.html       ← one file per post (copy hello-world.html as a template)
assets/css/style.css    ← all styling; colors/fonts are variables at the top
assets/js/main.js       ← dark-mode toggle, mobile menu
assets/img/             ← put profile.jpg and figures here
assets/cv.pdf           ← add your CV here (the "Download CV" button links to it)
.nojekyll               ← tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages (≈5 minutes)

1. Sign in to GitHub → **New repository**.
2. Name it exactly **`YOUR-USERNAME.github.io`** (replace with your GitHub username). Public. Create.
3. On the new repo page click **"uploading an existing file"**, drag in *everything inside this folder*
   (including `assets/`, `blog/` and `.nojekyll`), then **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, Save.
5. After ~1 minute your site is live at **https://YOUR-USERNAME.github.io**.

> Hidden file tip: on Windows/Mac `.nojekyll` may be hidden. If it doesn't upload, create it on GitHub with
> **Add file → Create new file**, name `.nojekyll`, leave it empty, commit.

### Using git instead (optional)
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io
# copy the site files into that folder, then:
git add . && git commit -m "Initial site" && git push
```

## Editing checklist
- [ ] Replace `YOUR-USERNAME` in the GitHub link (index.html)
- [ ] Add Google Scholar, ORCID, LinkedIn URLs
- [ ] Fill in publications, talk titles, CV dates, PhD program name
- [ ] Add `assets/img/profile.jpg` (square, ~400×400) and swap the avatar div (see comment in index.html)
- [ ] Add `assets/cv.pdf`
- [ ] Rewrite the sample blog post

## Writing a new blog post
1. Copy `blog/posts/hello-world.html` → `blog/posts/my-new-post.html` and edit title/date/text.
2. Add a `<li>` for it at the top of the list in `blog/index.html` (and optionally in the *Writing* section of `index.html`).
3. Commit — the site updates within a minute.

## Custom domain (optional)
Buy a domain (e.g. `abhishekborah.com`), then in **Settings → Pages → Custom domain** enter it and follow GitHub's DNS instructions.
