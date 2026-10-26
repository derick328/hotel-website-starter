# Hotel Website Starter

A responsive boutique hotel website concept. It uses plain HTML, CSS and JavaScript: no npm install and no build are needed. The sample hotel name, room descriptions and photographs are illustrative. The booking form is a demo until you connect a real booking provider.

## Project structure

```text
hotel-website-starter-vercel/
├── dist/
│   ├── index.html          Page structure
│   ├── styles.css          Responsive styling
│   ├── site.js             Navigation, room cards, form and FAQs
│   ├── config.js           Hotel-specific content and links
│   └── assets/             Example photographs to replace
├── vercel.json             Vercel's static output configuration
├── .gitignore
└── README.md
```

## 1. Preview on your computer

Extract the ZIP. Open a terminal in `hotel-website-starter-vercel` and run:

- Windows (Python installed): `py -m http.server 8000 --directory dist`
- Ubuntu/Linux: `python3 -m http.server 8000 --directory dist`

Visit `http://localhost:8000`. Stop the server with Ctrl+C. Open the folder in VS Code to edit it. Since this is a static site, there is no `npm install` or `npm run dev` step.

## 2. Replace the demo details

Edit `dist/config.js`:

- Set `name`, `monogram`, `pageTitle`, `location`, introductory copy and other page text.
- Replace the example `rooms`, `features`, `faqs`, descriptions and image alt text with verified facts about the hotel.
- Set `email`, `phone`, `mapUrl` and `instagramUrl` if applicable.
- Replace files in `dist/assets/` with real, licensed photographs; update `images` and each room's `image` path.
- Set `bookingUrl` only after choosing a real booking provider. The example form adds `checkin`, `checkout` and `guests` query parameters to that URL. Booking providers may require different names or a different integration; adapt `dist/site.js` to their documented format.

Also review the default content in `dist/index.html`, including the concept banner, footer notice and general section headings. Remove or update the concept wording before publishing a real hotel site. Add your real privacy policy, terms, address and cancellation information where required. Do not advertise demo rooms, facilities or images as real.

## 3. Put it on GitHub

Create a new, empty GitHub repository named `hotel-website-starter` under your account. Do not initialize it with a README, .gitignore or license because the extracted project already has files.

In the extracted project's folder, run (using your own GitHub username if different):

```bash
git init
git branch -M main
git add .
git commit -m "Initial hotel website starter"
git remote add origin git@github.com:derick328/hotel-website-starter.git
git push -u origin main
```

The SSH remote requires your GitHub SSH key to be set up. If it is not, use GitHub Desktop: File → Add Local Repository (create a repository in this folder if prompted), commit the files, then Publish repository. Another option is GitHub CLI: `gh repo create derick328/hotel-website-starter --private --source=. --remote=origin --push` after `git init`, `git add` and `git commit` (do not run `git remote add origin` as well).

To make this reusable, open the repository on GitHub → Settings → General → check **Template repository**. For each hotel, choose **Use this template** → **Create a new repository**, then edit only that hotel's content, images and integration. A GitHub template makes independent copies; later updates to the template will not automatically update the hotel repositories.

## 4. Deploy on Vercel

1. In Vercel, select **Add New → Project** and connect GitHub if asked.
2. Import the repository you just created.
3. Set **Root Directory** to the repository root.
4. Set **Framework Preset** to **Other**.
5. Leave the **Build Command** empty (use Override if Vercel shows a default command). The included `vercel.json` sets **Output Directory** to `dist`.
6. Select **Deploy**. Vercel will provide a `.vercel.app` URL. Later pushes to your GitHub production branch trigger deployments.
7. Add your own domain under the Vercel project's domain settings when ready.

If you instead set the Vercel Root Directory to `dist`, the root `vercel.json` will not apply; keep the root at the repository root.

## Architecture for many hotels

For a small number of properties, use this as a GitHub template. Each hotel gets its own GitHub repo and Vercel project. For many sites that must receive shared design fixes together, move the shared styling and components into a versioned package or a monorepo with one app per hotel. Keep property content, photos, domains and booking details separate.

## Example photo provenance

The sample images came from Unsplash (`images.unsplash.com`) with source IDs `1542314831-068cd1dbfeeb`, `1566073771259-6a8506099945`, `1611892440504-42a792e24d32`, `1590490360182-c33d57733427`, `1618773928121-c32242e63f39` and `1559339352-11d035aa65de`. They do not depict a single property. Replace them with actual hotel photography before launch.
