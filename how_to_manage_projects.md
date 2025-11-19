# How to Manage Your Portfolio

This guide explains how to add new projects using Google Sheets and how to update your website on GitHub.

## Part 1: Managing Projects with Google Sheets

You can manage your projects in a Google Sheet instead of writing code.

### 1. Setup your Google Sheet
1.  Open your Google Sheet.
2.  Ensure you have these exact headers in the first row:
    `id`, `title`, `description`, `tags`, `image`, `link`, `content_html`

### 2. What goes in each column?

| Column | What to write | Example |
| :--- | :--- | :--- |
| **id** | A unique number for the project. | `3` |
| **title** | The name of your project. | `Customer Churn Analysis` |
| **description** | A short summary that appears on the home page card. | `Predicted customer churn using Python and identified key risk factors.` |
| **tags** | Keywords separated by semicolons (;). | `Python; Machine Learning; Excel` |
| **image** | The path to your image. **Important:** You must upload the image to your `assets` folder on GitHub first. | `assets/churn_chart.png` |
| **link** | **Leave this empty** to use the automatic detail page. Only fill this if you built a custom HTML page. | *(Leave Empty)* |
| **content_html** | The full details of your project. You can write normal text here. To make a new paragraph, use `<br><br>`. To make text bold, use `<b>text</b>`. | `This project analyzed 10k customers.<br><br><b>Key Findings:</b><br>1. Price was the main factor.` |

### 3. Connect Google Sheets to Your Site
1.  In your Google Sheet, go to **File > Share > Publish to Web**.
2.  In the dialog box, change "Web page" to **Comma-separated values (.csv)**.
3.  Click **Publish**.
4.  **Copy the link** it gives you.
5.  Send this link to me (the AI), or paste it into `script.js` inside the quotes:
    ```javascript
    const projectsCsvUrl = 'YOUR_LINK_HERE';
    ```

---

## Part 2: Updating Your Website (GitHub)

**Important:** I (the AI) am working on files on your **local computer**. I am not directly connected to your GitHub. You must manually upload the changes for them to appear online.

### How to Update
1.  **Locate the Files:** Go to the folder `c:\Users\dell\.gemini\antigravity\playground\rogue-hubble` on your computer.
2.  **Upload to GitHub:**
    *   Go to your GitHub repository (e.g., `github.com/yourname/portfolio`).
    *   Click **Add file** > **Upload files**.
    *   Drag and drop **ALL** the files from your local folder into GitHub.
    *   Commit the changes.
3.  **Wait:** GitHub Pages will update your site in 1-2 minutes.

### When do I need to upload?
*   **If you change code (HTML/CSS/JS):** You MUST upload the files to GitHub.
*   **If you change the Google Sheet:** You do **NOT** need to upload anything! The site reads the sheet automatically (once connected).
*   **If you add a new image:** You MUST upload the new image to the `assets` folder on GitHub.
