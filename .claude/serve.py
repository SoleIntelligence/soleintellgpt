import functools, os, sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class Handler(SimpleHTTPRequestHandler):
    """Static preview server. NOCACHE=1 forces a cold load every time."""

    def end_headers(self):
        if os.environ.get("NOCACHE"):
            self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()

    def send_header(self, keyword, value):
        if os.environ.get("NOCACHE") and keyword in ("Last-Modified", "ETag"):
            return
        super().send_header(keyword, value)


root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8787
handler = functools.partial(Handler, directory=root)
print("serving %s on http://127.0.0.1:%d" % (root, port), flush=True)
ThreadingHTTPServer(("127.0.0.1", port), handler).serve_forever()
