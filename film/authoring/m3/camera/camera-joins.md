# Quadrillions M3 camera join corrections

The two inserts replace 60 frames of the 660-frame, 24 fps registered camera. They contain the complete 1280 × 720 image for each affected frame. Keep original audio, chapter time mapping, DOM overlays and camera duration. Start and end frame indexes below refer to the camera asset. The end index is exclusive.

| Insert | Original frame interval | Frames | SHA-256 |
| --- | --- | ---: | --- |
| valley-0120-0166.mp4 | [120, 166) | 46 | c6879b8ecd5d7bcf7a193b7c43d95f2a49eb45db5f5137a412ccc561ea15a5e1 |
| retreat-0488-0502.mp4 | [488, 502) | 14 | 64fd55781c4b75e22274460fb4eae58bf76c1db322a0a34450ac8643d7af6178 |

Use Python 3, NumPy, SciPy, OpenCV and FFmpeg with libx264. From the directory containing the authoring script run

```sh
python repair_joins.py path/to/original/camera-pass.mp4 camera-inserts
```

The script checks the original camera SHA-256 before rendering. The five photographic anchors come from original frames 119, 143, 166, 487 and 502. The pylon uses a registered seven-landmark projection. The outlet and toaster use locally matched planar projections with interpolation across the backsplash. Coordinate controls and the pilot trajectory are in the script. Replacing the indicated ranges in the original film only once avoids an extra camera generation.

The side-by-side motion comparison covers the approaching and departing frames around both repaired joins. A narrow blend remains across distant architecture at the valley transition and the upper cabinetry during the kitchen retreat. The plug, toaster body and camera-side tower have a single registered trajectory. The indicator's center stays registered throughout its fading light cue.
