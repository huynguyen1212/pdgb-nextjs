const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function tinyImagesInFolder(folderPath, quality) {
  // Get all files in the specified folder
  const files = fs.readdirSync(folderPath);

  // Loop through each file in the folder
  for (const file of files) {
    // Check if the file is an image
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const filePath = path.join(folderPath, file);

      // Load the image from the file and get its metadata
      const { width, height } = await sharp(filePath).metadata();

      // Get the original file size
      const { size: originalSize } = await fs.promises.stat(filePath);

      // Compress the image while keeping the same dimensions
      const compressedBuffer = await sharp(filePath)
        .resize(width, height)
        .jpeg({ quality: quality })
        .toBuffer();

      const compressedSize = compressedBuffer.length;
      const byteReduction = originalSize - compressedSize;
      const percentReduction = ((byteReduction / originalSize) * 100).toFixed(
        2
      );

      // Write the compressed image back to the original file
      await fs.promises.writeFile(filePath, compressedBuffer);

      // Log the byte reduction as a percentage for this image
      console.log(
        `Tiny (${file}): ${percentReduction}% reduction (${
          byteReduction / 1000
        } kB saved) - Remain ${compressedSize / 1000} kB`
      );
    }
  }
}
(async () => {
  await tinyImagesInFolder(
    "path of local lap",
    10
  );
})();
