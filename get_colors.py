import sys
from PIL import Image
from collections import Counter
import math

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb[:3]

def color_distance(c1, c2):
    return math.sqrt(sum((a - b) ** 2 for a, b in zip(c1, c2)))

img = Image.open('public/logo_new.png')
img = img.convert('RGBA')
pixels = list(img.getdata())

blue_pixels = []
orange_pixels = []

for p in pixels:
    r, g, b, a = p
    if a > 200:
        # Ignore white/light gray background
        if r > 240 and g > 240 and b > 240:
            continue
        
        # Categorize roughly by hue
        if b > r and b > g:  # Blue-ish
            blue_pixels.append((r, g, b))
        elif r > g and r > b: # Orange-ish/Red-ish
            orange_pixels.append((r, g, b))

if blue_pixels:
    blue_counter = Counter(blue_pixels)
    print("Most common BLUE colors:")
    for color, count in blue_counter.most_common(5):
        print(f"{rgb_to_hex(color)} - RGB: {color} (Count: {count})")

if orange_pixels:
    orange_counter = Counter(orange_pixels)
    print("Most common ORANGE colors:")
    for color, count in orange_counter.most_common(5):
        print(f"{rgb_to_hex(color)} - RGB: {color} (Count: {count})")
