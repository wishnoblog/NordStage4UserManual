"""Build current OS 1.6x book and the OS 1.4x reference edition together."""
from pathlib import Path
import argparse,subprocess

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--mdbook',default='mdbook')
    parser.add_argument('--dest',default=None)
    args=parser.parse_args()
    root=Path(__file__).resolve().parents[1]
    destination=Path(args.dest).resolve() if args.dest else root/'book'
    for project,out in [(root,destination),(root/'versions'/'v1.4',destination/'v1.4'),(root,destination/'v1.6')]:
        subprocess.run([args.mdbook,'build',str(project),'--dest-dir',str(out)],check=True)
    # Add only the version picker to the generated old edition. The archived sources stay unchanged.
    for html in (destination/'v1.4').glob('*.html'):
        text=html.read_text(encoding='utf-8')
        tag='<script src="/theme/version-selector.js"></script>'
        if tag not in text:text=text.replace('</body>',tag+'\n</body>')
        html.write_text(text,encoding='utf-8')
    print('Built current edition plus /v1.4/ and /v1.6/.')

if __name__=='__main__':main()
