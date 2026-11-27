# Editing the infinity zoom

The finished shot is already in the normal film source and requires no extra dependencies to play. To re-author the move, use Python with NumPy, SciPy, OpenCV and FFmpeg. The eleven selected approved plates are in `plates.zip`. The script uses the L r4 shot as its reference for the original physical performance, the blade entrance and unchanged camera sections.

Place the L r4 portable player beside the scripts as `Quadrillions-L-r4.html` and run the following commands.

```sh
python3 extract_reference.py Quadrillions-L-r4.html reference-camera.mp4
python3 render_camera.py reference-camera.mp4 camera-pass.mp4
```

The script renders 660 frames at 1280 × 720, 24 fps. The M3 JSON maps this movement onto the revised narration. Each named point is normalized to its plate. Change matched landmarks in `render_camera.py` to change the grid/road and city/coast paths. `window_exit.py` controls the foreground window, `counter_join.py` holds the electrical outlet through the kitchen turn, and `orbit_repair.py` tracks Florida into a single Earth limb.
