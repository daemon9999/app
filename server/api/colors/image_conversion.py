import PIL
from PIL import Image
import numpy as np
def convert2image(image_array: np.ndarray) -> Image:
    image_array = image_array.astype(np.uint8)
    image = Image.fromarray(image_array)
    return image