import urllib.request
import re
import ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
req = urllib.request.Request('https://dribbble.com/shots/25500168-Timeline-Design', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
    match = re.search(r'<meta property="og:image" content="(.*?)"', html)
    if match:
        print("IMG_URL:", match.group(1))
    else:
        print("No image found")
except Exception as e:
    print(e)
