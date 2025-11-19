# How to Host Your Portfolio Website

The easiest and most professional way to host your portfolio for free is using **GitHub Pages**. This is standard for developers and data analysts.

## Prerequisites
1.  **GitHub Account**: If you don't have one, sign up at [github.com](https://github.com/).
2.  **Git Installed**: You likely already have this if you've done some coding.

## Step-by-Step Guide

### 1. Create a New Repository
1.  Log in to GitHub.
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it something like `portfolio` or `my-portfolio`.
4.  Make sure it is **Public**.
5.  Click **Create repository**.

### 2. Upload Your Files
You can do this via the command line or the web interface. Since you are comfortable with basic programming, the web interface is the simplest start:

1.  In your new repository, click the link that says **uploading an existing file**.
2.  Drag and drop all your project files here:
    *   `index.html`
    *   `style.css`
    *   `script.js`
    *   `project-amazon.html`
    *   `project-sales.html`
    *   Any images you add later
3.  Wait for them to upload, then scroll down and click **Commit changes**.

### 3. Enable GitHub Pages
1.  Go to your repository's **Settings** tab.
2.  On the left sidebar, click **Pages**.
3.  Under **Build and deployment** > **Branch**, select `main` (or `master`) from the dropdown menu.
4.  Click **Save**.

# How to Host Your Portfolio Website

The easiest and most professional way to host your portfolio for free is using **GitHub Pages**. This is standard for developers and data analysts.

## Prerequisites
1.  **GitHub Account**: If you don't have one, sign up at [github.com](https://github.com/).
2.  **Git Installed**: You likely already have this if you've done some coding.

## Step-by-Step Guide

### 1. Create a New Repository
1.  Log in to GitHub.
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it something like `portfolio` or `my-portfolio`.
4.  Make sure it is **Public**.
5.  Click **Create repository**.

### 2. Upload Your Files
You can do this via the command line or the web interface. Since you are comfortable with basic programming, the web interface is the simplest start:

1.  In your new repository, click the link that says **uploading an existing file**.
2.  Drag and drop all your project files here:
    *   `index.html`
    *   `style.css`
    *   `script.js`
    *   `project-amazon.html`
    *   `project-sales.html`
    *   Any images you add later
3.  Wait for them to upload, then scroll down and click **Commit changes**.

### 3. Enable GitHub Pages
1.  Go to your repository's **Settings** tab.
2.  On the left sidebar, click **Pages**.
3.  Under **Build and deployment** > **Branch**, select `main` (or `master`) from the dropdown menu.
4.  Click **Save**.

### 4. Your Site is Live!
Wait about 1-2 minutes. Refresh the Pages settings page. You will see a box at the top saying:
> "Your site is live at https://yourusername.github.io/portfolio/"

**Click that link, and your website is now on the internet!** You can share this URL on LinkedIn and your resume.

## Updating Your Site
Whenever you want to change something (like adding a new project):
1.  Edit the file on your computer.
2.  Upload the new file to the GitHub repository again (it will overwrite the old one).
3.  GitHub Pages updates automatically in a minute or two.

## 6. Professional URL & Custom Domains

To make your portfolio URL look more professional (e.g., removing `/portfolio/` or using a `.com` domain), you have two main options:

### Option A: Cleaner GitHub URL (ahmedsharaf93.github.io)
If you want your URL to be just `https://ahmedsharaf93.github.io/` without the `/portfolio/` part:
1.  **Rename your repository**: Go to your repository **Settings** on GitHub.
2.  Change the repository name to exactly: `ahmedsharaf93.github.io`.
3.  Your site will now be available at `https://ahmedsharaf93.github.io/`.

### Option B: Custom Domain (e.g., ahmedsharaf.com)
This is the most professional option.
1.  **Purchase a Domain**: Buy a domain name from a provider like Namecheap, GoDaddy, or Google Domains (e.g., `ahmedsharaf.com`).
2.  **Configure GitHub Pages**:
    *   Go to your repository **Settings** > **Pages**.
    *   In the **Custom domain** field, enter your domain (e.g., `www.ahmedsharaf.com`).
    *   Click **Save**.
    *   Check the **Enforce HTTPS** box.
3.  **Configure DNS**: Log in to your domain provider's website and update the DNS settings to point to GitHub Pages.
    *   **CNAME Record**: Host: `www`, Value: `ahmedsharaf93.github.io`.
    *   **A Records**: Point your root domain (`@`) to GitHub's IP addresses (check GitHub's documentation for the latest IPs).
3.  GitHub Pages updates automatically in a minute or two.
