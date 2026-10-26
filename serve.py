"""Preview the hotel website using a directory relative to this script."""

import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


SITE_DIRECTORY = Path(__file__).resolve().parent / "hotel-website-starter-vercel" / "dist"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=8001, help="Local port (default: 8001)")
    args = parser.parse_args()
    if not 1 <= args.port <= 65535:
        parser.error("--port must be between 1 and 65535")
    if not (SITE_DIRECTORY / "index.html").is_file():
        parser.exit(1, f"Website not found: {SITE_DIRECTORY / 'index.html'}\n")

    handler = partial(SimpleHTTPRequestHandler, directory=str(SITE_DIRECTORY))
    try:
        server = ThreadingHTTPServer(("127.0.0.1", args.port), handler)
    except OSError as error:
        parser.exit(1, f"Could not start the preview: {error}\nTry another port with --port 8002.\n")

    with server:
        print(f"Serving {SITE_DIRECTORY}", flush=True)
        print(f"Open http://127.0.0.1:{args.port}/ (Ctrl+C to stop)", flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\nPreview stopped.")


if __name__ == "__main__":
    main()
