# Hotel Website Starter

The website is in `hotel-website-starter-vercel/dist`. No installation or build is needed.

## Run locally

From this repository's root folder (`Hotel_Website_Starter_Vercel`), run:

```bash
python3 serve.py
```

On Windows, replace `python3` with `py`.

Open **http://127.0.0.1:8001/**, or the exact URL printed in the terminal. Stop the server with Ctrl+C. The launcher locates the website relative to its own file, so it also works when invoked by its full path from another folder. It uses port 8001 to avoid an older preview still running on port 8000. If the port is occupied, run `python3 serve.py --port 8002` and open the printed URL.

If you see `404 - File not found`, check that the browser uses the exact URL printed by the launcher, without adding `/dist` to the URL. Check the terminal for a startup error; an older server may still be responding if the new one failed to start.

To use Python's server directly from this repository's root, run `python3 -m http.server 8001 --bind 127.0.0.1 --directory hotel-website-starter-vercel/dist`. Its `--directory` path is relative to your terminal's current folder; `--directory dist` from the outer folder points to a nonexistent directory.

## Deploy on Vercel

For this repository layout, use these project settings:

| Setting | Value |
| --- | --- |
| Root Directory | Repository root (leave the field empty) |
| Framework Preset | Other |
| Build Command | Empty (no build required) |
| Output Directory | `hotel-website-starter-vercel/dist` |

The repository-root `vercel.json` sets the framework, build command and output directory. Commit and push this file to the Git branch connected to Vercel so it is included in the next deployment. Save any dashboard setting changes and deploy that updated commit. Redeploying an older commit will not include the new configuration.

After deployment, open the deployment's URL at `/`. If it still returns `404 NOT_FOUND`, check that the deployment's output contains `index.html` at its top level and that you are opening the current deployment URL.

Alternatively, set Root Directory to `hotel-website-starter-vercel` and Output Directory to `dist`; this uses the inner `vercel.json`. The output directory must always be relative to the selected root directory.

See the [website README](hotel-website-starter-vercel/README.md) for customization and instructions for using the inner folder as a standalone project.
